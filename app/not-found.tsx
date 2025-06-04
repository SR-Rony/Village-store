import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className='grid grid-rows-none justify-center items-center h-screen'>
        <div>
            <h1 className='text-red-700'>404 page is not found</h1>
            <Link href='/'><p>back to Home pages</p></Link>
        </div>
    </div>
  )
}

export default Error