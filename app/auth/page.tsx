"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const divStyle = {
    backgroundImage: `url('/images/hero.jpg')`,
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={divStyle}>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" style={{ height: "44px" }} alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                type="text"
                label="Username"
                value={"oi"}
                onChange={(e: any) => setName(e.target.value)} 
                />
               <Input
                id="email"
                type="email"
                label="Email address or phone number"
                value={"oi"}
                onChange={(e: any) => setEmail(e.target.value)} 
              />
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={"oi"}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
            </div>
            <button onClick={() => {}} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
