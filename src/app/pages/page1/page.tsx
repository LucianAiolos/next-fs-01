import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div className='w-full h-screen '>
    <p>FIRST PAGE</p>
    <Link rel="stylesheet" href="/" className='mb-96'>Home</Link>
    <Image 
      src={'https://images.genius.com/bfb7df45480a34db7215be61f213d429.1000x1000x1.jpg'} 
      width={600} 
      height={400}
      layout='responsive'
      alt='liquid stranger poster'
    />
  </div>
}

export default Page