import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const menuList = [
  {
    id: 1,
    name: 'Homepage',
    link: '/',
    icon: 'home.svg',
  },
  {
    id: 2,
    name: 'Explore',
    link: '/',
    icon: 'explore.svg',
  },
  {
    id: 3,
    name: 'Notification',
    link: '/',
    icon: 'notification.svg',
  },
  {
    id: 4,
    name: 'Messages',
    link: '/',
    icon: 'message.svg',
  },
  {
    id: 5,
    name: 'Bookmarks',
    link: '/',
    icon: 'bookmark.svg',
  },
  {
    id: 6,
    name: 'Jobs',
    link: '/',
    icon: 'job.svg',
  },
  {
    id: 7,
    name: 'Communities',
    link: '/',
    icon: 'community.svg',
  },
  {
    id: 8,
    name: 'Premium',
    link: '/',
    icon: 'logoxc.svg',
  },
  {
    id: 9,
    name: 'Profile',
    link: '/',
    icon: 'profile.svg',
  },
  {
    id: 10,
    name: 'More',
    link: '/',
    icon: 'more.svg',
  },
];

const LeftBar = () => {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt- pb-8'>
      {/* LOGO MENU BUTTON */}
      <div className='flex flex-col gap-4 text-lg items-center xxl:items-start'>
        {/* LOGO */}
        <Link href='/' className='p-2 rounded-full hover:bg-[#181818]'>
          <Image src='icons/logoxc.svg' alt='logo' width={24} height={24} />
        </Link>
        {/* MENU LIST */}
        <div className='flex flex-col gap-2'>
          {menuList.map((item) => (
            <Link
              href={item.link}
              className='p-3 rounded-full hover:bg-[#181818] flex items-center gap-4'
              key={item.id}
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className='hidden xxl:inline'>{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href='/'
          className='bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden my-4'
        >
          <Image src='/icons/post.svg' alt='new post' width={24} height={24} />
        </Link>
        <Link
          href='/'
          className='hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-16 my-4'
        >
          Post
        </Link>
      </div>
      {/* USER */}
      <div className='flex items-center justify-between mt-6'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 relative rounded-full overflow-hidden'>
            <Image src='/general/avatar.png' alt='DalaSoftware' fill />
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Dala Software</span>
            <span className='text-sm text-textGray'>@dalasoftware</span>
          </div>
        </div>
        <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
      </div>
    </div>
  );
};

export default LeftBar;
