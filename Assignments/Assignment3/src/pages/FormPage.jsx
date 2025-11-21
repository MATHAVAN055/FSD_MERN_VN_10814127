import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ users, setUsers }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    phone: "",
    gender: "",
    address: "",
    country: "",
    pincode: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { id: users.length + 1, ...form };
    setUsers([...users, newUser]);
    navigate("/cards");
  }

  return (
    <div className="container">
      <h1>User Registration Form</h1>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        Please fill all the required details below to create your user profile.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        
        <input name="name" placeholder="Enter Full Name" onChange={handleChange} required />
        <input name="age" placeholder="Enter Age" onChange={handleChange} required />
        <input name="email" placeholder="Enter Email Address" onChange={handleChange} required />
        <input name="phone" placeholder="Enter Phone Number" onChange={handleChange} required />

        <select name="gender" onChange={handleChange} required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <input name="city" placeholder="Enter City" onChange={handleChange} required />
        <input name="country" placeholder="Enter Country" onChange={handleChange} required />
        <input name="pincode" placeholder="Enter Pincode" onChange={handleChange} required />

        <textarea 
          name="address" 
          placeholder="Enter Full Address" 
          onChange={handleChange} 
          required 
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", minHeight: "80px" }}
        ></textarea>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
