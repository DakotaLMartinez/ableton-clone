import classNames from 'classnames';

function MobileNavOverlay({ open }: { open: boolean }) {
  const overlayClasses = classNames(
    'absolute left-0 flex flex-col gap-2',
    'bg-blue text-white',
    'overflow-hidden w-full pt-18 px-4',
    'transition-all duration-500',
    {
      '-top-navheight': !open,
      'top-0': open,
    }
  );

  const navGridLiClasses = 'min-w-48 max-w-60';
  return (
    <div className={overlayClasses}>
      <ul className="space-y-6 mb-4">
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
      <ul className="space-y-6 mb-6">
        <li>
          <a href="#">Try Live 12 For Free</a>
        </li>
        <li className="text-xs font-light">
          <a href="#">Login or register</a>
        </li>
      </ul>
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
        <ul className="flex relative space-x-4 overflow-hidden bg-gradient-to-l from-blue">
          <li className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-blue"></li>
          <li className={navGridLiClasses}>
            <a href="#">
              <div>
                <h4>Loop</h4>
                <p>
                  Watch Talks, Performances, and Features from Ableton's Summit
                  for Music Makers
                </p>
              </div>
            </a>
          </li>
          <li className={navGridLiClasses}>
            <a href="#">
              <div>
                <h4>Learning Music</h4>
                <p>
                  Learn the fundamentals of music making right in your browser.
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
  );
}

export default MobileNavOverlay;
