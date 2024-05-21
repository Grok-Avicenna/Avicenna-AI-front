import logo from '../../assets/avicenna-logo.svg'
import callback from '../../assets/callback.svg'


function HeaderComponent() {
    return (
        <header className="w-full text-[16px] ">
            <div className="flex flex-row justify-around items-center text-white pt-12">
                <div className='flex items-center '>
                    <img className='mr-[5px]' src={logo} alt="" />
                    <p>Avicenna AI</p>
                    <div className="h-[58.25px] w-[1.10px] mx-[25px] bg-[#D8D8D8]"></div>
                    <p className="w-[77px] text-[12px] font-thin">Забота на расстоянии</p>
                </div>
                <div className='flex items-center gap-[20px] font-medium'>
                    <a className="cursor-pointer">О нас</a>
                    <a className="cursor-pointer">Болезни</a>
                    <a className="cursor-pointer">Специалисты</a>
                    <a href='https://helpmed-system.onrender.com/login' className="cursor-pointer border-none">Форум</a>
                </div>
                <div>
                    <img src={callback} alt="" />
                </div>
            </div>
        </header>
    );
}
export default HeaderComponent;