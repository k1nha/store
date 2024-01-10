export default function Home() {
  return (
    <>
      <main className='flex min-h-screen w-full'>
        <section className='flex w-full flex-col items-center justify-center gap-2 bg-white text-black lg:w-1/2'>
          <div className='absolute left-7 top-10 flex items-center gap-2 lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='#000'
              viewBox='0 0 256 256'
            >
              <path d='M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z'></path>
            </svg>
            <h1 className='font-semibold'>Mission Store</h1>
          </div>

          <h2 className='text-3xl font-semibold'>Login</h2>
          <p className='text-center text-sm text-gray-500'>
            Entre seu email e senha para efetuar o login
          </p>
        </section>

        <section className='hidden w-1/2 flex-col justify-between bg-black p-10 text-white lg:flex'>
          <div className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='#fff'
              viewBox='0 0 256 256'
            >
              <path d='M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z'></path>
            </svg>
            <h1 className='font-semibold'>Mission Store</h1>
          </div>

          <article>
            <p className='text-lg font-thin'>
              {'"'}Dinheiro e sucesso não mudam as pessoas, eles só ampliam o
              que já está lá.{'"'}
            </p>
            <p className='text-sm font-semibold'>Will Smith</p>
          </article>
        </section>
      </main>
    </>
  )
}
