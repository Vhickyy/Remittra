import { useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import supabase from "../../../supabase-client";
import { Loader } from "lucide-react";

const Wallet_View = () => {
  const { user, userBalance, setUserBalance } = useGlobalContext();
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const fund = async () => {
    if (!amount) {
      alert("Amount is required and must be greater than 0");
      return;
    }
    const newBalance = Number(userBalance.balance) + Number(amount);
    setLoading(true);
    const { error } = await supabase
      .from("wallet")
      .update({ balance: newBalance })
      .match({ id: userBalance.walletId, user_id: user?.id })
      .select();
    if (!error) {
      setUserBalance((pre) => ({ ...pre, balance: newBalance }));
      setLoading(false);
    } else {
      setLoading(false);
      alert(error.message);
    }
    setAmount("");
  };

  const withdraw = async () => {
    if (!amount) {
      alert("Amount is required and must be greater than 0");
      return;
    }
    if (Number(amount) > Number(userBalance.balance)) {
      alert("Insufficient fund");
      return;
    }
    const newBalance = Number(userBalance.balance) - Number(amount);
    setLoading(true);
    const { error } = await supabase
      .from("wallet")
      .update({ balance: newBalance })
      .match({ id: userBalance.walletId, user_id: user?.id })
      .select();
    if (!error) {
      setUserBalance((pre) => ({ ...pre, balance: newBalance }));
      setLoading(false);
    } else {
      setLoading(false);
      alert(error.message);
    }
    setAmount("");
  };

  return (
    <section className="px-4 py-4 flex flex-col justify-center items-center w-[90%] max-w-[30rem] gap-4 min-h-screen mx-auto">
      <p className="text-primary pb-8 text-xl font-semibold">Wallet</p>
      <p className="text-center font-bold text-3xl">
        Balance: ₦ {userBalance.balance}
      </p>
      <input
        type="text"
        name="amount"
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
        className="border border-primary p-2 rounded-lg outline-0 w-full"
        value={amount}
      />
      {loading && <Loader />}
      <div className="flex gap-4">
        <button
          className="bg-primary text-white font-semibold text-lg rounded-xl px-16 cursor-pointer py-3"
          onClick={fund}
          disabled={loading}
        >
          Fund Wallet
        </button>
        <button
          className="bg-transparent border border-primary text-primary font-semibold text-lg rounded-xl px-12 cursor-pointer py-2"
          onClick={withdraw}
          disabled={loading}
        >
          Withdraw
        </button>
      </div>
    </section>
  );
};

export default Wallet_View;
