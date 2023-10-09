import "./NavBarLinks.css";

const NavBarLinks = ({ data }) => {
  var render_list = [];
  data.forEach((element) => {
    render_list.push(
      <li key={element["title"]}>
        <a href={element["href"]}>{element["title"]}</a>
      </li>
    );
  });

  return (
    <div className="links">
      <ul>{render_list}</ul>
    </div>
  );
};

export default NavBarLinks;
