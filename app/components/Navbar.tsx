import Logo from './Logo';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 text-xs font-medium">
      <div className="flex gap-4 items-center">
        <Logo />
        <a href="#">Live</a>
        <a href="#">Push</a>
        <a href="#">Note</a>
        <a href="#">Link</a>
        <a href="#">Packs</a>
        <a href="#">Shop</a>
        <a href="#">Help</a>
        <a href="#">More +</a>
      </div>
      <div className="flex gap-3">
        <a href="#">Try Live 12 for free</a>
        <a href="#">Log in or register</a>
      </div>
    </nav>
  );
}

export default Navbar;
