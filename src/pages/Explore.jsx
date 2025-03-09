// import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// import "../styles/pages/Explore.css";
// import "../App.css";
// import axios from "axios";
// import API_BASE_URL from "../config";

// const Explore = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/projects`);
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Failed to fetch projects:", error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h1>Explore Campaigns</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project._id}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>Goal: ${project.goalAmount}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Explore;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/pages/Explore.css";
import "../App.css";

const Explore = () => {
  // Example campaign data
  const allCampaigns = [
    { id: 1, title: "Tech Startup", description: "Innovative AI solutions", progress: 80 },
    { id: 2, title: "Medical Aid", description: "Helping those in need", progress: 60 },
    { id: 3, title: "Education Fund", description: "Scholarships for students", progress: 90 },
    { id: 4, title: "Green Energy", description: "Solar power initiatives", progress: 50 },
    { id: 5, title: "Animal Rescue", description: "Saving endangered species", progress: 75 },
  ];

  // State for search input
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [visibleCampaigns, setVisibleCampaigns] = useState(3);

  // Debounce search input (wait 300ms after typing)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Filter campaigns based on search
  const filteredCampaigns = allCampaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Load more campaigns function
  const handleLoadMore = () => {
    setVisibleCampaigns((prev) => prev + 3);
  };

  // Highlight matching text in search results
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight-text">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="explore-container" >
      <h1 className="text-center text-3xl font-bold mb-4">Explore Campaigns</h1>

      {/* Animated Search Bar */}
      <motion.input
        type="text"
        placeholder="Search campaigns..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <h2 className="text-lg text-gray-500 text-center mb-4">
        {filteredCampaigns.length > 0
          ? `Showing ${filteredCampaigns.length} Campaigns`
          : "No campaigns found"}
      </h2>

      <div className="campaign-list">
        {filteredCampaigns.slice(0, visibleCampaigns).map((campaign) => (
          <motion.div
            key={campaign.id}
            className="campaign-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{highlightText(campaign.title, debouncedSearch)}</h2>
            <p>{campaign.description}</p>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
            <p className="progress-text">Raised: {campaign.progress}%</p>

            <Link to={`/campaign/${campaign.id}`} className="view-details-btn">
              View Details
            </Link>
          </motion.div>
        ))}
      </div>

      {visibleCampaigns < filteredCampaigns.length && (
        <button onClick={handleLoadMore} className="load-more-btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default Explore;