import classNames from 'classnames';
import MoreNav from './MoreNav';

function MobileNavOverlay({ open }: { open: boolean }) {
  const overlayClasses = classNames(
    'absolute left-0 flex flex-col gap-2',
    'bg-blue text-white',
    'overflow-hidden w-full pt-20 px-4',
    'transition-all duration-700',
    {
      '-top-screen': !open,
      'top-0': open,
    }
  );
  return (
    <div className={overlayClasses}>
      <a className="py-2" href="#">
        Live
      </a>
      <a className="py-2" href="#">
        Push
      </a>
      <a className="py-2" href="#">
        Note
      </a>
      <a className="py-2" href="#">
        Link
      </a>
      <a className="py-2" href="#">
        Shop
      </a>
      <a className="py-2" href="#">
        Packs
      </a>
      <a className="py-2" href="#">
        Help
      </a>
      <a className="py-2" href="#">
        Try Live 12 For Free
      </a>
      <a className="py-2 mb-4 text-xs font-light" href="#">
        Login or register
      </a>
      <MoreNav />
    </div>
  );
}

export default MobileNavOverlay;
