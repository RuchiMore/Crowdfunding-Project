import React, { useState } from "react";
import "../styles/pages/CreateCampaign.css";
import "../App.css"

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("Health");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !goal) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setMessage("Campaign Created Successfully!");
    setTitle("");
    setDescription("");
    setGoal("");
    setCategory("Health");
    setImage(null);
  };

  return (
    <div className="create-campaign-container">
      <h1 className="title">Create Your Campaign</h1>
      <form className="campaign-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Campaign Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          className="input-field"
        />
        <p className="char-count">{title.length}/50</p>

        <textarea
          placeholder="Campaign Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          className="input-field textarea"
        />
        <p className="char-count">{description.length}/200</p>

        <input
          type="number"
          placeholder="Funding Goal ($)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="input-field"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        >
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Environment">Environment</option>
        </select>

        <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
        {image && <img src={image} alt="Preview" className="image-preview" />}

        <button type="submit" className="create-btn">Create Campaign</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default CreateCampaign;
