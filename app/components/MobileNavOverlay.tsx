import { useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import Logo from './Logo';
import { HiOutlinePlus } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';

function MobileNavOverlay() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);
  const toggleMobileNav = () =>
    setIsMobileNavOpen((isMobileNavOpen) => !isMobileNavOpen);
  const isMobileOverlayView = isMobileNavOpen && !isDesktopScreen;

  useLayoutEffect(() => {
    const updateScreen = () => {
      setIsDesktopScreen(window.innerWidth >= 1024);
    };
    updateScreen();
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  const overlayClasses = classNames(
    'absolute top-0 left-0',
    'flex flex-col lg:flex-row',
    'gap-2 lg:gap-5 xl:gap-8',
    'bg-blue text-white',
    'lg:bg-gray-50 lg:text-black',
    'overflow-hidden w-full p-5',
    'transition-all duration-500',
    {
      '-translate-y-full lg:-translate-y-0': !isMobileOverlayView,
      'translate-y-0': isMobileOverlayView,
    }
  );

  const whiteToBlackClasses = classNames('transition-color delay-200', {
    'text-white': isMobileNavOpen && !isDesktopScreen,
    'text-black': !isMobileNavOpen || isDesktopScreen,
  });

  const navGridLiClasses = 'min-w-48 max-w-60';
  return (
    <>
      <div className={overlayClasses}>
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
        <ul className="space-y-6 mb-4 lg:space-y-0 lg:flex lg:items-center">
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Push</a>
          </li>
          <li>
            <a href="#">Note</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Packs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <ul className="space-y-6 mb-6 lg:space-y-0 lg:mb-0 lg:flex lg:items-center lg:gap-3 xl:gap-5">
          <li>
            <a href="#">Try Live 12 For Free</a>
          </li>
          <li className="text-xs font-light">
            <a href="#">Login or register</a>
          </li>
        </ul>
      </div>
      <div className="lg:h-0 lg:overflow-hidden">
        <section className="mb-6">
          <h4>More on Ableton.com:</h4>
          <ul className="flex-col space-y-5 text-xs">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Ableton for the Classroom</a>
            </li>
            <li>
              <a href="#">Ableton for Colleges and Universities</a>
            </li>
            <li>
              <a href="#">Certified Training</a>
            </li>
            <li>
              <a href="#">About Ableton</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Apprenticeships</a>
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h4>More from Ableton:</h4>
          <ul className="flex relative space-x-4 overflow-hidden">
            <li className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-blue lg:from-transparent"></li>
            <li className={navGridLiClasses}>
              <a href="#">
                <div>
                  <h4>Loop</h4>
                  <p>
                    Watch Talks, Performances, and Features from Ableton's
                    Summit for Music Makers
                  </p>
                </div>
              </a>
            </li>
            <li className={navGridLiClasses}>
              <a href="#">
                <div>
                  <h4>Learning Music</h4>
                  <p>
                    Learn the fundamentals of music making right in your
                    browser.
                  </p>
                </div>
              </a>
            </li>
            <li className={navGridLiClasses}>
              <a href="#">
                <div>
                  <h4>Learning Synths</h4>
                  <p>
                    Get started with synthesis using a web-based synth and
                    accompanying lessons.
                  </p>
                </div>
              </a>
            </li>
            <li className={navGridLiClasses}>
              <a href="#">
                <div>
                  <h4>Making Music</h4>
                  <p>
                    Some tips from 74 Creative Strategies for Electronic
                    Producers.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default MobileNavOverlay;
