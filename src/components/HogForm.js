import React, { useState } from "react";

function HogForm({ addNewHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: 0,
    greased: false,
    "highest medal achieved": "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewHog(formData);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: 0,
      greased: false,
      "highest medal achieved": "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
        placeholder="Specialty"
      />
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <label>
        Greased:
        <input
          type="checkbox"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="highest medal achieved"
        value={formData["highest medal achieved"]}
        onChange={handleChange}
        placeholder="Highest Medal"
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;