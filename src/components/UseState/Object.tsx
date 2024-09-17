import { useState } from "react";

const UseStateObject = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <input
        className="w-1/4 mr-3 border border-slate-400 rounded-md px-2 py-1"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="w-1/4 mr-3 border border-slate-400 rounded-md px-2 py-1"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
};

export default UseStateObject;
