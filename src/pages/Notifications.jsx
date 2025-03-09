
import React, { useState } from "react";
import "../style/Notifications.css"; // Import styles

const Notifications = () => {
  // Sample notification data (Replace with API calls)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your campaign has reached 50% of its goal!", time: "2 hours ago", read: false },
    { id: 2, message: "New backer contributed to your project!", time: "5 hours ago", read: false },
    { id: 3, message: "Your withdrawal request has been approved.", time: "1 day ago", read: true },
    { id: 4, message: "System update scheduled for tomorrow.", time: "3 days ago", read: true },
  ]);

  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notif) => (
            <li key={notif.id} className={`notification-item ${notif.read ? "read" : "unread"}`}>
              <p>{notif.message}</p>
              <small>{notif.time}</small>
              {!notif.read && (
                <button className="mark-read-btn" onClick={() => markAsRead(notif.id)}>
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
