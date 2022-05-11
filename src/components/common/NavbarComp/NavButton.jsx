import './NavBar.css';

function NavButton({ text, dest }) {
  // console.log(text, dest);
  return (
    <a href={dest} className="navButton">
      <p>{text.toUpperCase()}</p>
    </a>
  );
}

export default NavButton;
