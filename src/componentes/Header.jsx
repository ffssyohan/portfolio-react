function Header() {
  const fullName = "Felipe Yohan Sapio";
  const profession = "Full Stack Developer";

  return (
    <header className="header">
      <h1>{fullName}</h1>
      <p>{profession}</p>
      <nav>
        <a href="#about">About</a>
        <a href="#about">Projects</a>
        <a href="#about">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
