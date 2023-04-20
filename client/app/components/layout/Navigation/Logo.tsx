import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import logoImg from '../../../assets/images/logo.svg';


const Logo: FC = () => {
  return (
    <Link href='/' className='px-layout mb-8 flex items-center'>
      <Image src={logoImg} width={50} height={50} alt='Outline cinema' />
      <h2 className='font-bold text-lg'>Online cinema</h2>
    </Link>
  )
}

export default Logo