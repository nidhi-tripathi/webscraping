import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navIcons = [
  {src:'/assets/icons/search.svg', alt:'search', width: 24, height: 24},
  {src:'/assets/icons/black-heart.svg', alt:'heart', width: 24, height: 24},
  {src:'/assets/icons/user.svg', alt:'user', width: 24, height: 24}
]

const Navbar = () => {
  return (
    <header className="w-full">
    <nav className='nav'>
       <Link href="/" className="flex item-center gap-1">
       <Image
        src="/assets/icons/logo.svg"
        width={27}
        height={27}
        alt="logo" />
        <p className='nav-logo'>
          Price<span className='text-primary'>Wise</span>
        </p>
         </Link>
         <div className='flex item-center gap-5'>
          {navIcons.map((icon) => (
            <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width={icon.width} 
            height={icon.height}
            className='object-contain'
            />
          ))}
        </div>
    </nav>  
    </header>
  )
}

export default Navbar
