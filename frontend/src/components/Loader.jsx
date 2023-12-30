import React from 'react'

const Loader = () => {
  return (
    <>
        <div className='spinner'>
          <article></article>
          <p className='text-black opacity-75 mt-5 font-corrois text-lg'>Data is loading.... Please Wait....!</p>
        </div>
    </>
  )
};

export default Loader;