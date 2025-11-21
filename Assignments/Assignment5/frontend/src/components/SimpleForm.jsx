import React, { useState } from "react";
import "./SimpleForm.css";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    Age: "",
    email: "",
    password: "",
    city: ""  
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      let data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      alert("User added successfully!");
      setFormData({
        name: "",
        Age: "",
        email: "",
        password: "",
        city: ""  
      });

    } catch (error) {
      setError(error.message);
      alert(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="clean-wrapper">
      <div className="clean-card">
        <h2>User Registration</h2>

        {error && <p className="clean-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <label>Age</label>
          <input
            type="number"
            name="Age"
            value={formData.Age}
            required
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />

          
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            required
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
