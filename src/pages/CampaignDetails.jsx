import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/pages/CampaignDetails.css";
import "../App.css"
import axios from "axios";
import API_BASE_URL from "../config";

const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error("Failed to fetch campaign:", error);
      }
    };

    fetchCampaign();
  }, [id]);

  if (!campaign) return <p>Loading...</p>;

  return (
    <div>
      <h1>{campaign.title}</h1>
      <p>{campaign.description}</p>
      <p>Goal: ${campaign.goalAmount}</p>
    </div>
  );
};

export default CampaignDetails;
