import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <h1>Navbar</h1>
                <img src={logo} alt='logo' className='h-8' />
            </div>
        </nav>
    )
}

export default Navbar
