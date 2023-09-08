import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div>
    <p className='text-xl '>Second Page</p>
    <link rel="stylesheet" href="/" />
  </div>
}

export default Page