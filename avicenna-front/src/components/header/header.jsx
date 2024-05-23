import logo from '../../assets/avicenna-logo.svg'
import callback from '../../assets/icons/logout.webp'
import { NavLink } from 'react-router-dom'


function HeaderComponent() {
    return (
        <header className="w-full text-[16px] ">
            <div className="flex flex-row justify-around items-center text-white pt-12">
                <div className='flex items-center '>
                    <NavLink to={'/wrapper'}>
                        <img className='mr-[5px]' src={logo} alt="" />
                    </NavLink>
                    <NavLink to={'/wrapper'}>
                        <p className='cursor-pointer'>Avicenna AI</p>
                    </NavLink>
                    <div className="h-[58.25px] w-[1.10px] mx-[25px] bg-[#D8D8D8]"></div>
                    <p className="w-[77px] text-[12px] font-thin">Забота на расстоянии</p>
                </div>
                <div className='flex items-center gap-[20px] font-medium'>
                    <a className="cursor-pointer">О нас</a>
                    <a className="cursor-pointer">Болезни</a>
                    <NavLink className={'cursor-pointer'} to={'/specialists'}>Специалисты</NavLink>
                    <NavLink to={'/chat'}>Avicenna AI</NavLink>
                </div>
                <div>
                    <NavLink to="/">
                        <img className='w-[25px]' src={callback} alt="" />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
export default HeaderComponent;