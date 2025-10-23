import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Auth_Layout from "../auth_components/Auth_Layout";
import supabase from "../../../supabase-client";
import { useState } from "react";

const Login_View = () => {
  const [formDetail, setFormDetail] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!formDetail.email || !formDetail.password)
      alert("Please provide all fields");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: formDetail.email,
      password: formDetail.password,
    });
    if (!error) {
      setLoading(false);
      navigate("/dashboard");
    } else {
      setLoading(false);
      alert(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetail((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <Auth_Layout>
      <p className="text-primary font-semibold text-xl">Login</p>
      <div className="grid gap-2 ">
        <label htmlFor="email">Email</label>
        <Input
          placeholder={"Enter Email"}
          value={formDetail.email}
          type="email"
          name={"email"}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2 ">
        <label htmlFor="password">Password</label>
        <Input
          placeholder={"Enter Password"}
          value={formDetail.password}
          type="password"
          name={"password"}
          onChange={handleChange}
        />
      </div>
      <button
        className="p-2 w-full bg-primary rounded-xl text-white font-semibold shadow-lg cursor-pointer"
        onClick={loginUser}
      >
        {!loading ? "Sign In" : "Loading"}
      </button>
    </Auth_Layout>
  );
};

export default Login_View;
