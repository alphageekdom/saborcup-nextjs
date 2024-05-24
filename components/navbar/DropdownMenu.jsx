import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { FaPlus, FaMinus } from 'react-icons/fa';

import DropdownLink from './DropdownLink';

const DropdownMenu = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative flex flex-col' onClick={handleToggle}>
      <DropdownLink href={`/menu/${title.toLowerCase().replace(' ', '-')}`}>
        {title}
        {isOpen ? (
          <FaMinus className='ml-2 inline' />
        ) : (
          <FaPlus className='ml-2 inline' />
        )}
      </DropdownLink>
      {isOpen && (
        <div className='bg-black opacity-80 text-white py-2 w-48 flex flex-col pl-2'>
          {links.map((link) => (
            <DropdownLink key={link.href} href={link.href}>
              {link.label}
            </DropdownLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
