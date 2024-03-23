import classNames from 'classnames';
function SecondaryNav() {
  const ulClasses = classNames(
    'p-5 lg:py-6 xl:pl-10',
    'flex gap-5 xl:gap-7',
    'font-medium text-xs xl:text-sm'
  );
  return (
    <ul className={ulClasses}>
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
