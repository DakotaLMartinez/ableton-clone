import { MdChevronRight } from 'react-icons/md';

function Footer() {
  return (
    <footer className="p-1/12vw">
      <h1 className="pb-1/12vw">Ableton</h1>
      <h6>Sign up to our newsletter</h6>
      <p>
        Enter your email address to stay in touch with the latest offers,
        tutorials, downloads, surveys and more.
      </p>
      <div className="mt-4 flex text-sm pb-1/12vw">
        <input
          type="email"
          placeholder="Email address"
          className="px-3 py-1.5 leading-4 bg-[#eee] flex-grow"
        />
        <button className="bg-blue text-white py-1.5 px-6">Sign up</button>
      </div>
      <ul className="text-sm space-y-1">
        <li>
          <a href="#" className="flex items-center">
            Register Live or Push <MdChevronRight />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            About Ableton <MdChevronRight />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Jobs <MdChevronRight />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
