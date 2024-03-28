import { MdChevronRight } from 'react-icons/md';
import Image from 'next/image';
import Facebook from './Facebook';
import X from './X';
import Youtube from './Youtube';
import Instagram from './Instagram';
import Tiktok from './Tiktok';
import Localization from './Localization';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="p-1/12vw xl:tracking-tight">
      <h1 className="pb-1/12vw xs:pb-1/24vw lg:text-[54px]">Ableton</h1>
      <div className="lg:grid grid-cols-10 gap-3">
        <div className="order-last col-span-4">
          <h6 className="xl:text-lg">Sign up to our newsletter</h6>
          <p className="xl:text-lg">
            Enter your email address to stay in touch with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className="mt-4 flex text-sm xl:text-lg pb-1/12vw xs:pb-1/24vw">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-1.5 leading-4 bg-[#eee] flex-grow"
            />
            <button className="bg-blue text-white py-1.5 px-6 xl:py-1.75 xl:px-7.5">Sign up</button>
          </div>
        </div>
        <div className="col-span-3">
          <ul className="text-sm xl:text-lg space-y-1">
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
          <ul className="flex mt-3 space-x-3 pb-1/12vw xs:pb-1/24vw">
            <li>
              <a href="#" className="block w-8">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#" className="block w-8">
                <X />
              </a>
            </li>
            <li>
              <a href="#" className="block w-8">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="#" className="block w-8">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#" className="block w-8">
                <Tiktok />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <h6 className="xl:text-lg">Education</h6>
          <ul className="text-sm xl:text-lg space-y-1 pb-1/12vw xs:pb-1/24vw">
            <li>
              <a href="#" className="flex items-center">
                Offers for students and teachers <MdChevronRight />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Ableton for the Classroom <MdChevronRight />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Ableton for Colleges and Universities <MdChevronRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:grid grid-cols-10">
        <div className="col-span-3">
          <h6 className="xl:text-lg">Community</h6>
          <ul className="text-sm xl:text-lg space-y-1 pb-1/12vw xs:pb-1/24vw">
            <li>
              <a href="#" className="flex items-center">
                Find Ableton User Groups <MdChevronRight />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Find Certified Training <MdChevronRight />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Become a Certified Trainer <MdChevronRight />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-7">
          <Localization />
        </div>
      </div>
      <div className="lg:flex lg:justify-between xl:tracking-normal">
        <ul className="text-xs font-semibold lg:bold space-y-3 lg:space-y-0 lg:space-x-3 xl:space-x-4 pb-4 lg:pb-0 lg:flex lg:items-end">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Press Resources</a>
          </li>
          <li>
            <a href="#">Legal Info</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
          <li>
            <a href="#">Imprint</a>
          </li>
        </ul>
        <div className="flex items-center lg:items-end mt-1/12vw lg:mt-4">
          <Image
            className="lg:order-last"
            src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg"
            alt="Footer Logo"
            width={45}
            height={21}
          />
          <span className="ml-4 lg:mr-4 text-xs font-semibold">
            Made in Berlin
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
