import { useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import Logo from './Logo';
import { HiOutlinePlus } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import MobileNavOverlay from './MobileNavOverlay';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);
  const toggleMobileNav = () =>
    setIsMobileNavOpen((isMobileNavOpen) => !isMobileNavOpen);

  const whiteToBlackClasses = classNames('transition-color delay-200', {
    'text-white': isMobileNavOpen && !isDesktopScreen,
    'text-black': !isMobileNavOpen || isDesktopScreen,
  });
  const navClasses = classNames(
    'relative flex justify-between',
    'z-10 p-5 xl:px-10',
    'lg:text-xs font-medium',
    {
      'border-b-2 border-separator': !isMobileNavOpen || isDesktopScreen,
    }
  );

  useLayoutEffect(() => {
    const updateScreen = () => {
      setIsDesktopScreen(window.innerWidth >= 1024);
    };
    updateScreen();
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  return (
    <>
      <nav className={navClasses}>
        <div className="flex lg:text-sm xl:text-lg">
          <Logo className={whiteToBlackClasses} />
          <button
            className={classNames(
              'flex items-end lg:hidden ml-8',
              whiteToBlackClasses
            )}
            onClick={toggleMobileNav}
          >
            Menu <MdArrowDropDown />
          </button>
          <div className="hidden lg:flex lg:ml-8 lg:gap-5 xl:gap-8 items-center">
            <a href="#">Live</a>
            <a href="#">Push</a>
            <a href="#">Note</a>
            <a href="#">Link</a>
            <a href="#">Shop</a>
            <a href="#">Packs</a>
            <a href="#">Help</a>
            <a className="text-orange flex items-center" href="#">
              More <HiOutlinePlus className="text-lg" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-3 xl:gap-5 items-center">
          <a className="text-blue xl:text-lg" href="#">
            Try Live 12 for free
          </a>
          <a className="xl:text-sm" href="#">
            Log in or register
          </a>
        </div>
      </nav>
      <MobileNavOverlay open={isMobileNavOpen && !isDesktopScreen} />
    </>
  );
}

export default Navbar;
