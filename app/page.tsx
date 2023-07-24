import Image from 'next/image'
import logo from '../public/logo.png'
import Foto from '../public/pic-3d-1.png'
import {
  BsFillCloudArrowDownFill,
  BsFillDisplayFill,
  BsBraces,
  BsShieldFill
} from 'react-icons/bs'

export default function Home() {
  return (
    <main className="min-h-screen bg-backgorund-400 px-10">
      <section>
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
          <div className='relative p-5 mx-auto m-10 bg-gradient-to-t from-white rounded-full h-72 w-72 mt-20 lg:mr-3 lg:h-96 lg:w-96'>
            <Image src={Foto} alt='picture' layout='fill' objectFit='cover'/>
          </div>
          <div className='text-center my-10 lg:mx-auto lg:pt-14 lg:text-left lg:min-w-lg'>
            <h1 className='font-semibold text-white text-3xl '>Autofat</h1>
            <h2 className='text-button-1 text-xl mt-1 mb-3'>Website Developer</h2>
            <div className='my-5 max-w-xl lg:max-w-xl mx-auto lg:text-xl'>
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
        {/* services */}
        <div className='text-center mt-20 mb-10'>
          <div className='my-10'>
            <h1 className='text-white text-3xl font-semibold'>SERVICES</h1>
          </div>
          <div className='flex flex-col items-center justify-center mb-10 lg:flex-row gap-10'>
            {/* cards */}
            <div className='bg-white shadow-md rounded-lg p-10 mb-5 flex justify-center flex-col'>
              <div className='text-center item-center mx-auto'>
                <BsFillDisplayFill className='w-10 h-10 m-5 text-button-1'/>
              </div>
                <h1 className='text-center text-xl font-medium mb-5'>
                  Website Development
                </h1>
                <hr className='mb-5'/>
                <p className=' max-w-md'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem aliquid alias non adipisci, fuga ex, ad nihil voluptas ullam,
                  impedit facere libero cupiditate exercitationem qui est amet?
                  Distinctio, quod enim.
                </p>
            </div>
            <div className='bg-white shadow-md rounded-lg p-10 mb-5 flex justify-center flex-col'>
              <div className='text-center item-center mx-auto'>
                <BsBraces className='w-10 h-10 m-5 text-button-1'/>
              </div>
                <h1 className='text-center text-xl font-medium mb-5'>
                  Software Engineer
                </h1>
                <hr className='mb-5'/>
                <p className=' max-w-md'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem aliquid alias non adipisci, fuga ex, ad nihil voluptas ullam,
                  impedit facere libero cupiditate exercitationem qui est amet?
                  Distinctio, quod enim.
                </p>
            </div>
            <div className='bg-white shadow-md rounded-lg p-10 mb-5 flex justify-center flex-col'>
              <div className='text-center item-center mx-auto'>
                <BsShieldFill className='w-10 h-10 m-5 text-button-1'/>
              </div>
                <h1 className='text-center text-xl font-medium mb-5'>
                  Cybersecurity
                </h1>
                <hr className='mb-5'/>
                <p className=' max-w-md'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem aliquid alias non adipisci, fuga ex, ad nihil voluptas ullam,
                  impedit facere libero cupiditate exercitationem qui est amet?
                  Distinctio, quod enim.
                </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
