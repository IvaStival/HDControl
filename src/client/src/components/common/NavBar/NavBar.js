import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <h2>Hd Control</h2>
        <div className="links">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/hds">Hds</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
