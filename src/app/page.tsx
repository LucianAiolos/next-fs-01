import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-8xl mb-10'>NEXT.js</h1>
      <p className='mb-20'>Welcome to my NEXT.js App</p>
      <div className='w-full flex justify-around'>
        <Link href={"pages/page1"} className='px-4 py-2 text-xl rounded-lg bg-indigo-300 text-gray-100'>Page 1</Link>
        <Link href={"pages/page2"} className='px-4 py-2 text-xl rounded-lg bg-indigo-300 text-gray-100'>Page 2</Link>
        <Link href={"pages/page3"} className='px-4 py-2 text-xl rounded-lg bg-indigo-300 text-gray-100'>Page 3</Link>
      </div>
    </main>
  )
}
