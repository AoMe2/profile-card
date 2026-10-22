import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>การ์ดแนะนำตัวชมรม</h1>
      <div className="card-list">
        <ProfileCard
          name="สมชาย"
          role="หัวหน้าชมรม"
          emoji="🎮"
          color="#ff6b6b"
        />
        <ProfileCard
          name="สมหญิง"
          role="รองหัวหน้าชมรม"
          emoji="🎨"
          color="#4dabf7"
        />
        <ProfileCard
          name="วิชัย"
          role="เหรัญญิก"
          emoji="💰"
          color="#51cf66"
        />
        <ProfileCard
          name="มาลี"
          role="ประชาสัมพันธ์"
          emoji="📣"
          color="#ffa94d"
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;
