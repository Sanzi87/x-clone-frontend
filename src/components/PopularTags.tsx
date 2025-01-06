import Link from 'next/link';
import Image from './Image';

const PopularTags = () => {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
      <h1 className='text-xl font-bold text-textGrayLight'>
        {"What's"} Happening
      </h1>
      {/* TREND EVENT */}
      <div className='flex gap-4'>
        <div className='relative w-20 h-20 rounded-xl overflow-hidden'>
          <Image
            path='/XC/general/event.png'
            alt='event'
            width={120}
            height={120}
            tr={true}
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-textGrayLight'>New Year - 2025!</h2>
          <span className='text-sm text-textGray'>Last Week</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-textGray text-sm'>Technology • Trending</span>
          <Image
            path='/XC/icons/infoMore.svg'
            alt='info'
            width={16}
            height={16}
          />
        </div>
        <h2 className='text-textGrayLight font-bold'>OpenAI</h2>
        <span className='text-textGray text-sm'>20K posts</span>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-textGray text-sm'>Technology • Trending</span>
          <Image
            path='/XC/icons/infoMore.svg'
            alt='info'
            width={16}
            height={16}
          />
        </div>
        <h2 className='text-textGrayLight font-bold'>SpaceX</h2>
        <span className='text-textGray text-sm'>20K posts</span>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-textGray text-sm'>Technology • Trending</span>
          <Image
            path='/XC/icons/infoMore.svg'
            alt='info'
            width={16}
            height={16}
          />
        </div>
        <h2 className='text-textGrayLight font-bold'>Microsoft</h2>
        <span className='text-textGray text-sm'>20K posts</span>
      </div>
      {/* TOPICS */}
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-textGray text-sm'>Technology • Trending</span>
          <Image
            path='/XC/icons/infoMore.svg'
            alt='info'
            width={16}
            height={16}
          />
        </div>
        <h2 className='text-textGrayLight font-bold'>Linux</h2>
        <span className='text-textGray text-sm'>20K posts</span>
      </div>
      <Link href='/' className='text-iconBlue'>
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
