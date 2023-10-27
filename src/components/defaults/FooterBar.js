import React from 'react';
import { Footer } from 'flowbite-react';
import { BsGithub, BsLinkedin, BsTwitter, BsMedium } from 'react-icons/bs';

const FooterBar = () => {
  return (
    <Footer className='bg-transparent' container>
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between px-5 sm:px-10">
          <Footer.Copyright
            by="AbdelrahmanMohamed™"
            href="/"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

            <Footer.Icon
              href="https://www.linkedin.com/in/amustafa4983/"
              icon={BsLinkedin}
              className='hover:text-white'
            />
            <Footer.Icon
              href="https://twitter.com/AMustafa4983"
              icon={BsTwitter}
              className='hover:text-white'
            />
            <Footer.Icon
              href="https://github.com/AMustafa4983"
              icon={BsGithub}
              className='hover:text-white'
            />
            <Footer.Icon
              href='https://medium.com/@AMustafa4983'
              icon={BsMedium}
              className='hover:text-white'
            >
            </Footer.Icon>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterBar;
