import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-full flex items-center justify-center gap-4'>
        <Image
          src={"/logo-pizza.svg"}
          width={50}
          height={50}
        />
        <h1 className='text-dark-orange font-medium tracking-wide'>
          Hello World
        </h1>
      </div>
    </>
  )
}
