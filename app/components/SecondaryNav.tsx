import { useRef, useEffect } from 'react';
import classNames from 'classnames';

function SecondaryNav() {
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = navRef.current as HTMLElement | undefined;
      if (header) {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const headerHeight = header.offsetHeight;
        const scrollThreshold = documentHeight - windowHeight - headerHeight;
        console.log('scrollPosition', scrollPosition, 'documentHeight', documentHeight, 'windowHeight', windowHeight, 'headerHeight', headerHeight, 'scrollThreshold', scrollThreshold)
        if (scrollPosition >= scrollThreshold) {
          header.classList.remove('lg:sticky');
        } else {
          header.classList.add('lg:sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ulClasses = classNames(
    'p-5 lg:py-6 xl:pl-10',
    'flex gap-5 xl:gap-7',
    'font-medium text-xs xl:text-sm',
    'lg:sticky lg:top-0 lg:bg-white lg:bg-opacity-70 lg:z-10'
  );
  return (
    <ul ref={navRef} className={ulClasses}>
      <li>
        <a className="text-orange" href="#">
          About
        </a>
      </li>
      <li>
        <a href="#">Jobs</a>
      </li>
      <li>
        <a href="#">Apprenticeships</a>
      </li>
    </ul>
  );
}

export default SecondaryNav;
