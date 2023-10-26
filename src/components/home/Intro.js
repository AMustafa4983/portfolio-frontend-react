import React from 'react'


const Intro = () => {
  return (
    < >
      <div className="inline-flex items-center justify-center w-full relative">
        <hr className="w-64 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
    <div className='font-rubik '>
      <blockquote className="text-white text-xl italic font-semibold text-gray-900 dark:text-white">
        <svg className="mx-32 w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
          <p className='px-48 text-lg text-left'>
            I wear two hats🎓: I'm an AI Researcher and a Software Engineer. I get a real kick out of finding elegant solutions to tricky problems. 🚀
            <br/>🌌 When it comes to artificial intelligence, I'm not just about building smart systems. I'm all about understanding how we think and making machines do the same. <br />Mixing creativity with tech know-how, I'm on a mission to shape the exciting world of AI research. 💡
            <br/><br/><strong className='text-xl'>Got an idea?</strong> Let's chat! Dive into my projects and content, and feel free to shoot me a message. Together, we'll turn those 'what ifs' into 'got its'! 🛠️👨‍💻
          </p>

        </blockquote>

            <center>
            <a href='#contact' className="inline-flex items-center justify-center p-0.5 mt-6 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-red-500 group-hover:from-purple-500 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact Me
              </span>
            </a>
            </center>
        </div>
      </>
      )
}

      export default Intro;