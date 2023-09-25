import "./NavBarContent.css";

import NavBarLinks from "../NavBarLinks/NavBarLinks";
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const NavBarContent = ({ handleLogout }) => {
  return (
    <div className="nav">
      <div className="nav-content">
        <Title>HD Control</Title>
        <NavBarLinks
          data={[
            { href: "/", title: "Home" },
            { href: "/hds", title: "Hds" },
          ]}
        />
        <Button onClick={handleLogout} className={`logout-button`}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default NavBarContent;
