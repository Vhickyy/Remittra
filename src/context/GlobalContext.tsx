"use client";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import supabase from "../supabase-client";
import type { User } from "@supabase/supabase-js";

interface GlobalProviderProps {
  children: ReactNode;
}

interface IGlobalContext {
  session: any;
  sessionLoading: boolean;
  user: User | null | undefined;
  userBalance: { balance: number; walletId: string };
  setUserBalance: React.Dispatch<
    React.SetStateAction<{
      balance: number;
      walletId: string;
    }>
  >;
}
const Global_Context = createContext<IGlobalContext | null>(null);

const GlobalContextProvider = ({ children }: GlobalProviderProps) => {
  const [user, setUser] = useState<User | null>();
  const [session, setSession] = useState<any>(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [userBalance, setUserBalance] = useState({ balance: 0, walletId: "" });

  const getSession = async () => {
    setSessionLoading(true);
    const currentSession = await supabase.auth.getSession();
    if (currentSession?.data) {
      setSession(currentSession.data.session);
      setSessionLoading(false);
      const { data } = await supabase.auth.getUser();
      if (data) {
        setUser(data.user);
        const { data: dataBalance } = await supabase
          .from("wallet")
          .select("*")
          .eq("user_id", data?.user?.id)
          .single();
        if (dataBalance?.balance || dataBalance.balance == 0) {
          setUserBalance((pre) => ({
            ...pre,
            balance: Number(dataBalance.balance),
            walletId: dataBalance.id,
          }));
        } else {
          const { data: walletData, error } = await supabase
            .from("wallet")
            .insert({ user_id: data?.user?.id, balance: 0 })
            .select();

          if (walletData) {
            setUserBalance((pre) => ({
              ...pre,
              balance: 0,
              walletId: walletData[0].id,
            }));
          } else {
            alert(error?.message);
          }
        }
      }
    }
    setSessionLoading(false);
  };

  useEffect(() => {
    getSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    console.log({ userBalance });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Global_Context.Provider
      value={{ session, sessionLoading, user, userBalance, setUserBalance }}
    >
      {children}
    </Global_Context.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(Global_Context);
  if (context === null) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalContextProvider, useGlobalContext };
