import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center font-orelega text-white text-xl font-medium px-32 py-3 bg-black/90'>
        <Link href={"#"}>Services</Link>
        <Link href={"#"}>Process</Link>
        <Link href={"#"}>
            <Image className='relative h-[60px] w-[160px]' width={1000} height={1000} src={"/logo.png"}></Image>
        </Link>
        <Link href={"#"}>About us</Link>
        <Link href={"#"}>Contact</Link>
    </div>
  )
}

export default Navbar