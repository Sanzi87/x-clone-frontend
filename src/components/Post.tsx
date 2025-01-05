import React from 'react';
import Image from './Image';
import PostInfo from './PostInfo';
import PostInteractions from './PostInteractions';

const Post = () => {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
      {/* POST TYPE */}
      <div className='flex items-center gap-2 text-sm text-textGray mb-2 from-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
        >
          <path
            fill='#71767b'
            d='M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z'
          />
        </svg>
        <span>DalaSoftware reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className='flex gap-4'>
        {/* AVATAR */}
        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
          <Image
            path='/XC/general/avatar.png'
            alt=''
            width={100}
            height={100}
            tr={true}
          />
        </div>
        {/* CONTENT */}
        <div className='flex-1 flex flex-col gap-2'>
          {/* TOP */}
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2 flex-wrap'>
              <h1 className='text-md font-bold'>Dala Software</h1>
              <span className='text-textGray'>@dalasoftware</span>
              <span className='text-textGray'>3 days ago</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <div className=''></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            incidunt veritatis quos magni quidem tenetur voluptatum, nostrum
            maiores, neque eveniet consequatur facere eos non aperiam
            consectetur illum modi fugit? Tenetur.
          </p>
          <Image path='/XC/general/post.jpg' alt='' width={600} height={600} />
        </div>
      </div>
      <PostInteractions />
    </div>
  );
};

export default Post;
