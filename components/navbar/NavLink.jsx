import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  const getLinkClass = (href) => {
    return pathname === href
      ? 'text-primary text-xl font-medium transition duration-300 ease-in-out'
      : 'text-xl font-medium text-white hover:text-primary transition duration-300 ease-in-out';
  };

  return (
    <Link href={href} className={getLinkClass(href)} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
