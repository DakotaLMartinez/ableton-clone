import classNames from 'classnames';
import Image from 'next/image';

function Header() {
  const textClasses = classNames(
    'absolute',
    'top-0 left-0 w-full h-full',
    'flex items-center justify-center',
    'text-darkorange text-6xl md:text-9xl font-bold'
  );
  return (
    <header className="relative w-5/6 mx-auto">
      <Image
        src="https://ableton-production.imgix.net/about/header.jpg?fit=crop&auto=format&fm=jpg"
        alt="ableton header"
        width={1200}
        height={800}
        className="object-cover w-full h-5/6sh"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={textClasses}>Ableton</div>
    </header>
  );
}

export default Header;
