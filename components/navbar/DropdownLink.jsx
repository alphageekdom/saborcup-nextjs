import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DropdownLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  const getDropdownLinkClass = (href) => {
    return pathname === href
      ? 'text-lg px-4 py-3 bg-primary text-white'
      : 'text-lg px-4 py-3 text-white hover:bg-primary';
  };
  return (
    <Link href={href} className={getDropdownLinkClass(href)} onClick={onClick}>
      {children}
    </Link>
  );
};

export default DropdownLink;
