import Auth_Layout from "../auth_components/Auth_Layout";
import Input from "../../../components/Input";
import { useState } from "react";
import supabase from "../../../supabase-client";
import { useNavigate } from "react-router-dom";

const Register_View = () => {
  const navigate = useNavigate();
  const [formDetail, setFormDetail] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [loading, setLoading] = useState(false);

  const registerUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!formDetail.email || !formDetail.password || !formDetail.fullname)
      alert("Please provide all fields");
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: formDetail.email,
      password: formDetail.password,
      options: {
        data: {
          fullname: formDetail.fullname,
        },
      },
    });
    if (!error) {
      alert("You have been authenticated, Please Log in");
      setLoading(true);
      navigate("/auth/login");
    } else {
      alert(error.message);
      setLoading(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetail((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <Auth_Layout>
      <p className="text-primary font-semibold text-xl">Register</p>
      <div className="grid gap-2 ">
        <label htmlFor="fullname">Full Name</label>
        <Input
          placeholder={"Enter Email"}
          value={formDetail.fullname}
          type="text"
          name={"fullname"}
          onChange={handleChange}
        />
      </div>
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
        onClick={registerUser}
      >
        {!loading ? "Sign Up" : "Loading"}
      </button>
    </Auth_Layout>
  );
};

export default Register_View;
