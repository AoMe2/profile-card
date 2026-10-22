import { useState } from "react";
import "./ProfileCard.css";

// ไฟล์โค้ด React สำหรับสร้างโครงสร้างและการทำงานของการ์ดโปรไฟล์ (UI Component)
function ProfileCard({ name, role, emoji, color, theme = "light" }) {
  const handleGreet = () => {
    alert(`สวัสดี ฉันชื่อ ${name}`);
  };

  return (
    <div className={`profile-card ${theme}`} style={{ borderTopColor: color }}>
      <div className="profile-emoji" style={{ backgroundColor: color }}>
        {emoji}
      </div>
      <h3 className="profile-name">{name}</h3>
      <p className="profile-role">{role}</p>
      <button
        className="profile-greet-btn"
        style={{ backgroundColor: color }}
        onClick={handleGreet}
      >
        ทักทาย
      </button>
    </div>
  );
}

export default ProfileCard;
