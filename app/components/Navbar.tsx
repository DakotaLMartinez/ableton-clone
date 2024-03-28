import { useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import Logo from './Logo';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';

function OneNavToRuleThemAll() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMoreFromAbletonOpen, setIsMoreFromAbletonOpen] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);

  const toggleMobileNav = () =>
    setIsMobileNavOpen((isMobileNavOpen) => !isMobileNavOpen);

  const toggleAbletonMore = () =>
    setIsMoreFromAbletonOpen((isMoreFromAbletonOpen) => !isMoreFromAbletonOpen);

  useLayoutEffect(() => {
    const updateScreen = () => {
      setIsDesktopScreen(window.innerWidth >= 1024);
    };
    updateScreen();
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  const mobileNavVisible = isMobileNavOpen && !isDesktopScreen;
  const moreFromAbletonVisible = !isDesktopScreen || isMoreFromAbletonOpen;

  const whiteToBlackClasses = classNames('transition-color delay-200', {
    'text-white': mobileNavVisible,
    'text-black': !mobileNavVisible,
  });

  const navClasses = classNames(
    'relative z-20',
    'lg:flex lg:items-center',
    'px-5 py-5 lg:py-6 xl:px-10 xl:pb-5',
    'lg:text-xs font-medium',
    {
      'bg-blue': mobileNavVisible,
    }
  );

  const navGridLiClasses = 'min-w-48 max-w-60';
  const navLinksContainerClasses = classNames(
    'absolute top-0 left-0 lg:static lb:block',
    'w-full',
    'transition-transform duration-500',
    'lg:translate-y-0',
    'text-white lg:text-black',
    'pl-5 pt-10 lg:pl-0 lg:pt-0',
    'bg-blue lg:bg-white',
    {
      'translate-y-0': mobileNavVisible || isDesktopScreen,
      '-translate-y-full': !mobileNavVisible,
    }
  );

  const desktopNavClasses = classNames(
    'lg:flex lg:items-center',
    'lg:text-sm lg:font-semibold xl:text-lg',
    'lg:gap-5 xl:gap-8',
    'space-y-6 lg:space-y-0',
    'pl-0 lg:pl-20 xl:pl-24 my-8 lg:my-0',
    'xl:h-7'
  );

  const moreFromAbletonClasses = classNames('mt-6 lg:mt-12', {
    hidden: !moreFromAbletonVisible,
  });

  return (
    <nav className={navClasses}>
      <div className="flex">
        <a className="absolute mt-1 top-4 xl:top-4.5 inline-block lg:block z-30 lg:z-10">
          <Logo className={whiteToBlackClasses} />
        </a>
        <button
          className={classNames(
            'flex items-center mt-1 lg:hidden ml-24 z-30 lg:z-0',
            whiteToBlackClasses
          )}
          onClick={toggleMobileNav}
        >
          Menu <MdArrowDropDown />
        </button>
      </div>
      <div className={navLinksContainerClasses}>
        <ul className={desktopNavClasses}>
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
          <li className="hidden lg:list-item">
            <a
              className="text-orange flex items-center"
              href="#"
              onClick={toggleAbletonMore}
            >
              More{' '}
              {moreFromAbletonVisible ? (
                <HiOutlineMinus className="text-lg" />
              ) : (
                <HiOutlinePlus className="text-lg" />
              )}
            </a>
          </li>
          <li className="ml-auto">
            <a className="lg:text-blue lg:text-xs xl:text-lg" href="#">
              Try Live 12 for free
            </a>
          </li>
          <li>
            <a className="text-xs xl:text-sm" href="#">
              Log in or register
            </a>
          </li>
        </ul>
        <div className={moreFromAbletonClasses}>
          <section className="mb-6">
            <h4>More on Ableton.com:</h4>
            <ul className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-6 xl:space-x-8 text-xs xl:text-base font-medium">
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
          <section className="mb-6 xl:mt-12">
            <h4>More from Ableton:</h4>
            <ul className="flex lg:grid lg:grid-cols-4 gap-6 relative overflow-hidden w-full">
              <li
                className={classNames(
                  'lg:hidden',
                  'transition-all delay-500',
                  'absolute top-0 right-0 w-16 h-full bg-gradient-to-l',
                  {
                    'from-blue': mobileNavVisible,
                    'from-transparent': !mobileNavVisible,
                  }
                )}
              ></li>
              <li className={navGridLiClasses}>
                <a href="#">
                  <div>
                    <h5>Loop</h5>
                    <p>
                      Watch Talks, Performances, and Features from
                      Ableton&apos;s Summit for Music Makers
                    </p>
                  </div>
                </a>
              </li>
              <li className={navGridLiClasses}>
                <a href="#">
                  <div>
                    <h5>Learning Music</h5>
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
                    <h5>Learning Synths</h5>
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
                    <h5>Making Music</h5>
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
      </div>
    </nav>
  );
}

export default OneNavToRuleThemAll;
