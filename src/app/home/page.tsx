
import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
       <ul className='text-white flex gap-2 justify-center items-center'>
 <li><Link href={"/contact"}>Contact</Link></li><li><Link href="/about">About</Link></li><li> <Link href={"/blogs"}>Blogs</Link></li><li><Link href="/orders">Orders</Link></li></ul>

    </div>
  )
}

export default Home
