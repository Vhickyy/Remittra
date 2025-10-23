import { useEffect } from "react";
import supabase from "../../supabase-client";

const Admin = () => {
  const listUser = async () => {
    const { data } = await supabase.auth.admin.listUsers();
    console.log({ data });
  };

  useEffect(() => {
    listUser();
  }, []);
  return (
    <section>
      <p>Users</p>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((_user, index) => (
          <div className="flex gap-4 items-center" key={index}>
            <p>Victoria Kyc status</p>
            <div className="p-[3px] rounded-xl w-8 bg-gray-300/20">
              <div className="bg-primary/50 w-3 h-3 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admin;
