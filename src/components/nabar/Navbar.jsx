import './Navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href='/' className='logo'>
          <img src="/logo.png" alt='logo' />
          <span>Rent-Right</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agent</a>
      </div>
      <div className="right">
        <a href='/'>Sign in</a>
        <a href='/' className='register'>Sign up</a>
      </div>
    </nav>
  );
}
