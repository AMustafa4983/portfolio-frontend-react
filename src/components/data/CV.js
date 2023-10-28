import React, { useState, useEffect } from 'react';

function CV() {
    const [CV, setCV] = useState([]);
  
    useEffect(() => {
       fetch('http://127.0.0.1:8000/get-cv/')
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
             setCV(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  
    return (
    <>
            <a href={CV} class="inline-flex items-center justify-center p-0.5 mt-6 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-red-500 group-hover:from-purple-500 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" download='Abdelrahman Mohamed.pdf' data-download-simplified="simplified">
              <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Donwload My Resume
              </span>
            </a>
    </>
    );
}

export default CV;
