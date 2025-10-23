import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import supabase from "../../../supabase-client";
import { Link } from "react-router-dom";
import type { IAjo } from "../create_ajo_view/Create_Ajo_View";

type Ajo = "All" | "Joined" | "Others";

const Ajo_View = () => {
  const { user, userBalance, setUserBalance } = useGlobalContext();
  const [ajos, setAjos] = useState<IAjo[]>();
  const [filter, setFilter] = useState<IAjo[]>();
  const [active, setActive] = useState<Ajo>("All");
  const tabs: Ajo[] = ["All", "Joined", "Others"];

  const fetchAjo = async () => {
    const { data, error } = await supabase.from("ajo").select("*");
    // check for data
    if (data) {
      setAjos(data);
      setFilter(data);
    }
  };

  const filterUserAjos = () => {
    const ajo = ajos?.filter((ajo) => ajo.owner_id == user?.id);
    setFilter(ajo);
    console.log({ ajo });
  };

  const filterOtherUserAjos = () => {
    const ajo = ajos?.filter((ajo) => ajo.owner_id !== user?.id);
    console.log({ ajo });
    setFilter(ajo);
  };

  useEffect(() => {
    fetchAjo();
  }, []);

  useEffect(() => {
    active == "All"
      ? fetchAjo()
      : active == "Joined"
      ? filterUserAjos()
      : filterOtherUserAjos();
  }, [active]);

  const joinGroup = async (id: string, index: number) => {
    const updatedMembers = [
      ...(filter![index].members || []),
      { email: user?.email, user_id: user?.id },
    ];
    await supabase
      .from("ajo")
      .update({
        members: updatedMembers,
      })
      .eq("id", id)
      .select();
    fetchAjo();
  };

  const contribute = async (ajo: any) => {
    if (Number(userBalance.balance) < Number(ajo.cycle_amount))
      return alert("Insufficient wallet funds");
    const newBal = Number(userBalance.balance) - Number(ajo.cycle_amount);
    await supabase
      .from("wallet")
      .update({ balance: newBal })
      .match({ id: userBalance.walletId, user_id: user?.id });

    await supabase.from("ajo_contribution").insert({
      ajo_id: ajo.id,
      user_id: user?.id,
      amount: ajo.cycle_amount,
      cycle: ajo.current_cycle,
    });
    // set userbalance here
    setUserBalance((pre) => ({ ...pre, balance: newBal }));

    alert("Contributed for this cycle");
  };

  return (
    <section className="px-4 py-4 w-full grid gap-4">
      <Link
        to={"/dashboard/create-ajo"}
        className="bg-primary text-white font-semibold text-lg rounded-xl px-10 cursor-pointer py-2 w-fit"
      >
        Create Ajo Group
      </Link>

      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-3 rounded-xl ${
              active == tab
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary"
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filter?.length ? (
          filter?.map((ajo, index) => {
            const isAlreadyMember = ajo.members?.find(
              (member) => member.user_id == user?.id
            );
            return (
              <div
                className="flex flex-col gap-4  bg-white shadow-xl rounded-xl p-6"
                key={index}
              >
                <p>Name: {ajo?.ajo_name}</p>
                <p>Owner: {ajo.members[ajo?.members?.length - 1]?.email}</p>
                <p>Cycle contribution: N {ajo?.cycle_amount}</p>
                {(user?.id !== ajo.owner_id || !isAlreadyMember) && (
                  <button
                    className="bg-transparent  border border-primary text-primary font-semibold text-lg rounded-xl px-10 cursor-pointer py-2"
                    onClick={() => joinGroup(ajo.id!, index)}
                  >
                    Join
                  </button>
                )}
                {isAlreadyMember && (
                  <button
                    className="bg-transparent  border border-primary text-primary font-semibold text-lg rounded-xl px-10 cursor-pointer py-2"
                    onClick={() => contribute(ajo)}
                  >
                    Contribute
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </div>
    </section>
  );
};

export default Ajo_View;
