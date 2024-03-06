import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
const Avatar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { data: session } = useSession();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const fetchDisplayName = () => {
    return session?.user?.name || 'FM';
  };

  const handleSignOut = async () => {
    await signOut();
    // Redirect to the homepage using window.location.href
    window.location.href = '/homepage';
  };
  // Dropdown content in JSON format
  const dropdownContent = {
    avatar: {
      name: fetchDisplayName(),
      email: session?.user?.email || 'user@email.com',
    },
    Menu: [
      { label: 'Dashboard', href: '#', src: 'Chart_fill', className: 'block px-4 py-2 text-gold' },
      { label: 'Account', href: '#', src: 'User', className: 'block px-4 py-2  text-gold' },
      { label: 'History', href: '#', src: 'Calendar', className: 'block px-4 py-2 text-gold' },
      { label: 'Privacy', href: '#', src: 'Folder', className: 'block px-4 py-2 text-gold' },
      { label: 'FeedBack', href: '#', src: 'Setting', className: 'block px-4 py-2 text-gold' },
    ],
    signOut: {
      label: 'Sign out',
      src: 'logout',
      className: 'block px-4 py-2 text-sm text-gold',
    },
  };

  return (
    <>
      {/* Avatar for Large and Mobile screens */}
      <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-darkGray rounded-full cursor-pointer sm:hidden" onClick={toggleDropdown}>
        <span className="font-bold text-gold">{dropdownContent.avatar.name}</span>
      </div>

      {/* Dropdown for Mobile screens */}
      {isDropdownOpen && (
        <div id="userDropdown" className="ml-12 mt-4 z-10 fixed bg-royalBlue divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 sm:hidden">
          {/* Dropdown content */}
          <div className="px-4 py-3 text-sm text-gold dark:text-white">
            <div>{dropdownContent.avatar.name}</div>
            <div className="font-medium truncate">{dropdownContent.avatar.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700  dark:text-gray-200" aria-labelledby="avatarButton">
            {/* Dropdown options */}
            {dropdownContent.Menu.map((Menu, index) => (
              <li key={index} className="flex rounded-md mx-2 cursor-pointer hover:bg-darkGray text-sm items-center ">
                <Image src={`/assets/${Menu.src}.png`} alt={Menu.label} width={20} height={20} className="w-6 mx-2 h-6 mr-2" />
                <a href={Menu.href} className={Menu.className}>
                  {Menu.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="py-1">
            {/* Sign out option */}
            <button onClick={() => signOut()} className='w-full'>
              <li className="flex rounded-md mx-2 cursor-pointer hover:bg-darkGray text-sm items-center">
                <Image src="/assets/logout.png" width={20} height={20} alt={dropdownContent.signOut.label} className="w-6 h-6 mx-2 mr-2" />
                <a className={dropdownContent.signOut.className}>
                  {dropdownContent.signOut.label}
                </a>
              </li>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Avatar;
