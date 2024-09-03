import "../style/Navbar.css"
import keyboard from "../assets/keyboard.png"
import about from "../assets/info.png"
import setting from "../assets/setting.png"
import leader from "../assets/crown.png"
import contact from "../assets/contact.png"
import profile from "../assets/profile.png"

const Navbar = () => {

    return (
      <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Monkeytype</div>
        <div className="nav-item">
          <img src={keyboard} alt="Start Test" />
        </div>

        <div className="nav-item">
          <img src={leader}  alt="Leaderboard" 
           />
        </div>

        <div className="nav-item">
          <img src={about} alt="About"
           />
        </div>

        <div className="nav-item">
          <img src={setting} alt="Settings"
           />
        </div>

      </div>
      <div className="navbar-right">
        <div className="nav-item">
          <img src={contact} alt="Contact"/>
        </div>
        <div className="nav-item">
          <img src={profile} alt="Profile"/>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;
