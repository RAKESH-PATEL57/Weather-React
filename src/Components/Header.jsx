function Header()
{
    return (
        <header>
        <a href="#" className="logo">Weather</a>
        <nav className="icons">
          <button className="speak"></button>
          <a className="dark-mood" href="#" id="dark-Mood"></a>
          <a className="light-mood" href="#" id="light-Mood"></a>
        </nav>
      </header>
    );
}

export default Header;

{/* <i className="bi bi-hurricane"></i>
<i className="bi bi-volume-up"></i>
<i id="dark_mood-icon" className="bi bi-moon-stars"></i>
<i id="light_mood-icon" className="bi bi-sun"></i> */}