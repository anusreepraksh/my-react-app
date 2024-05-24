function Header() {
  const one = "About";
  return (
    <header>
      <h2>My website</h2>
      <ul>
        <li>{one}</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
      <hr></hr>
    </header>
  );
}
export default Header;
