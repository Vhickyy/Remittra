import { useState } from "react";
import Input from "../../../components/Input";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import supabase from "../../../supabase-client";

export interface IAjo {
  id?: string;
  ajo_name: string;
  cycle_amount: string;
  members: { email: string; user_id: string }[];
  owner_id: string | undefined;
  current_cycle: number;
  current_index: number;
  cycle_interval_seconds: string;
}

const Create_Ajo_View = () => {
  const { user } = useGlobalContext();
  const [ajo, setAjo] = useState<IAjo>({
    ajo_name: "",
    cycle_amount: "",
    members: [],
    owner_id: user?.id,
    current_cycle: 0,
    current_index: 0,
    cycle_interval_seconds: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAjo((pre) => ({ ...pre, [name]: value }));
  };

  const createAjoGroup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!ajo.ajo_name || !ajo.cycle_amount || !ajo.cycle_interval_seconds)
      alert(
        "Please provide all fields, cycle amount and cycle interval must be a number greater than 0"
      );
    setLoading(true);
    const { data, error } = await supabase
      .from("ajo")
      .insert({ ...ajo, members: [{ email: user?.email, user_id: user?.id }] })
      .select();

    if (data) {
      setLoading(false);
      setAjo((pre) => ({
        ...pre,
        ajo_name: "",
        cycle_amount: "",
        members: [],
        owner_id: user?.id,
        current_cycle: 0,
        current_index: 0,
        cycle_interval_seconds: "",
      }));
      navigate("/dashboard/ajo");
    } else {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-[90%] max-w-[30rem]  mx-auto">
      <p className="text-primary pb-12 text-xl font-semibold">
        Create Ajo Group
      </p>
      <form className="w-full">
        <section className="grid gap-6">
          <div className="grid gap-2 ">
            <label htmlFor="ajo_name">Enter Ajo Name</label>
            <Input
              placeholder={"Enter Ajo Name"}
              name="ajo_name"
              value={ajo.ajo_name}
              onChange={(e) => updateInput(e)}
            />
          </div>

          <div className="grid gap-2 ">
            <label htmlFor="cycle_amount">Enter Cycle Amount</label>
            <Input
              placeholder={"Enter contribution amount"}
              name="cycle_amount"
              value={ajo.cycle_amount}
              onChange={(e) => updateInput(e)}
            />
          </div>

          <div className="grid gap-2 ">
            <label htmlFor="cycle_interval_seconds">Enter Cycle Interval</label>
            <Input
              placeholder={"Enter Cycle Interval"}
              name="cycle_interval_seconds"
              value={ajo.cycle_interval_seconds}
              onChange={(e) => updateInput(e)}
            />
          </div>
          <button
            className="p-2 w-full bg-primary rounded-xl text-white font-semibold shadow-lg cursor-pointer"
            onClick={createAjoGroup}
          >
            {loading ? "Loading..." : "Create Ajo"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default Create_Ajo_View;
