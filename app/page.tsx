import Image from 'next/image'
import logo from '../public/logo.png'
import Foto from '../public/pic-3d-1.png'
import {BsFillCloudArrowDownFill} from 'react-icons/bs'

export default function Home() {
  return (
    <main className="min-h-screen bg-backgorund-400 px-10">
      <section className="">
        {/* Nav Bar */}
        <nav className="py-5  flex justify-between items-center">
          <div className='w-16 h-16 pt-4'>
            <Image src={logo} alt='logo'/>
          </div>
          <ul className=''>
            <li className='flex justify-center items-center mx-3'>
              <a href="" className='bg-button-1 ml-8 px-4 py-2 rounded-full text-center flex items-center'>
                <BsFillCloudArrowDownFill className='text-white w-5 h-5 mx-1.5'/> 
                <h1 className='text-white'>Resume</h1>
              </a>
            </li>
          </ul>
        </nav>
        {/* Profile */}
        <div className='lg:flex mx-auto justify-center text-center items-center'>
          <div className='relative p-5 mx-auto bg-gradient-to-t from-white rounded-full h-72 w-72 mt-20 lg:mr-3 lg:h-96 lg:w-96'>
            <Image src={Foto} alt='picture' layout='fill' objectFit='cover'/>
          </div>
          <div className='text-center my-10 lg:mx-auto lg:pt-14 lg:text-left lg:min-w-lg'>
            <h1 className='font-semibold text-white text-3xl '>Autofat</h1>
            <h2 className='text-button-1 text-xl mt-1 mb-3'>Website Developer</h2>
            <div className='my-5 md:max-w-xl mx-auto md:text-xl'>
              <p className='text-white py-2 lg:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Delectus sequi perferendis culpa eveniet ad illum, 
                error officiis atque debitis eum omnis, 
                iusto esse ipsum corrupti. 
                Saepe libero sequi vitae ex.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
