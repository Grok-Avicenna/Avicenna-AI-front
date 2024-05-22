import HeaderComponent from "../header/header";
import React from "react";
import './wrapper.css'
import CoverFlow from "../swiper/swiper";
import bulits from '../../assets/bulits.svg'
import Phone from '../../assets/Group.png'
import timeIcon from '../../assets/icons/timeIcon.svg'
import pigIcon from '../../assets/icons/pick.svg'
import gromofon from '../../assets/icons/gromofon.svg'
import messageIcon from '../../assets/icons/message.svg'
import kingIcon from '../../assets/icons/king.svg'
import onePhoto from '../../assets/icons/01.svg'
import twoPhoto from '../../assets/icons/02.svg'
import threePhoto from '../../assets/icons/03.svg'
import foorPhoto from '../../assets/icons/04.svg'
import one from '../../assets/icons/01number.svg'
import two from '../../assets/icons/02number.svg'
import three from '../../assets/icons/03number.svg'
import foor from '../../assets/icons/04number.svg'
import mobile from '../../assets/mobile.svg'
import timeIcon2 from '../../assets/icons/timeIcon2.svg'
import desctopIncon from '../../assets/icons/desctopIcon.svg'
import docIcon from '../../assets/icons/docIcon.svg'
import wallet from '../../assets/icons/walletIcon.svg'
import traidingIcon from '../../assets/icons/traidingIcon.svg'
import groupIcon from '../../assets/icons/groupIcon.svg'
import instagram from '../../assets/icons/instagram.svg'
import watsap from '../../assets/icons/watsap.svg'
import logo from '../../assets/avicenna-logo.svg'
import { NavLink } from "react-router-dom";



export default function Wrapper() {
    return (
        <div className="w-full text-white font-montserrat ">
            <div className="w-full  firstPage" >
                <HeaderComponent />
                <div className="w-[68%] m-auto">
                    <div className="text-[50px] mt-[115px] font-montserrat leading-[4rem]">
                        <span className="text-[#E5B093]">AI ПОПУТНИК</span>
                        <br />
                        <span>НА ПУТИ К</span><br />
                        <span className="text-[#E5B093]">ЗДОРОВЬЮ</span>
                    </div>
                    <p className="text-[18px] w-[480px] font-sans font-normal mt-2">Избавьтесь от неприятностей, сопровождающие визит к врачу, с помощью нашего сервиса и опробуйте на себе удобство Avicenna AI</p>
                    <NavLink to={"/chat"}> <button className="btn-prime mt-[70px] h-[90px] w-[340px]">Попробовать Avicenna AI</button></NavLink>
                    <img src={bulits} alt="" className="mt-[118px] pb-[100px]" />
                </div>
            </div>
            <div className="w-full h-screen secondPage">
                <h1 className="uppercase text-[48px] flex justify-center text-center mb-10 font-montserrat font-normal">Ваше здоровье  <br /> в ваших руках</h1>
                <div className="w-[359px] text-[20] font-light flex flex-col items-start ml-[1100px]">
                    <p>Консультация у врача часто <br /> сопровождается тратой большого <br /> количества времени, денег и сил, а <br /> назначенное лечение не всегда <br /> оказывает пациенту должного <br /> результата. </p>
                    <p className="mt-[22px]">В свою очередь, Anicenna AI  может <br /> предложить подходящего в вашем <br /> случае специалиста, тщательно  <br />проанализировав ваши сообщения <br /> о самочувствии и состоянии. После <br />этого вы можете связаться с <br /> рекомендованным специалистом  и <br /> назначить консультацию.</p>
                    <button className="btn-prime text-[14px]  mt-[40px] h-[70px] w-[260px]">СПЕЦИАЛИСТЫ</button>
                </div>
            </div>
            <CoverFlow />
            <div className="bg-[#010E54FF]">
                <h1 className="text-[48px] flex justify-center pt-10 font-extralight ">ДОСТУПЕН ВСЕГДА И ВЕЗДЕ</h1>
                <div className="w-[68%] m-auto flex flex-row gap-[78px] mt-[30px] items-center">
                    <div className="w-[419px] text-[20px] ">
                        <p>Сейчас в нашей стране функционируют множество клиник, но не всегда нужный специалист находится в той же части города.</p>
                        <p className="mt-[30px]">
                            Но эту проблему легко решить, если вы решите воспользоваться нашим сайтом, ведь теперь ИИ подберет вам врача на основе вашего вопроса и назначит консультацию с ним в любое удобное время и больше никаких бесконечных очередей и беготни от кабинета к кабинету.</p>
                        <a href='https://helpmed-system.onrender.com/login'>
                            <button className="btn-prime w-[90%] h-[80px] text-[14px] mt-[14px]">ПЕРЕЙТИ НА ФОРУМ</button>
                        </a>
                    </div>
                    <div>
                        <img src={Phone} alt="" />
                    </div>
                </div>
                <div className="w-[68%] m-auto">
                    <div className="text-[50px] mt-[115px] font-montserrat leading-[4rem] text-center">
                        <span>ПЛАНИРУЙТЕ ЖИЗНЬ И</span><br />
                        <span className="text-[#E5B093]">ЛЕЧИТЕСЬ В  УДОВОЛЬСТВИЕ</span>
                    </div>
                    <div className="flex flex-row gap-[80px] text-center text-[14px] mt-[4rem] items-center">
                        <div className="w-[182px] flex flex-col items-center gap-[16px]">
                            <img src={timeIcon} alt="" className="w-[54px]" />
                            <p>Сэкономите время на очереди к кабинету врача.</p>
                        </div>
                        <div className="w-[182px] flex flex-col items-center gap-[16px]">
                            <img src={pigIcon} alt="" className="w-[54px]" />
                            <p>Сбережете деньги — платите только за услуги специалиста.</p>
                        </div>
                        <div className="w-[182px] flex flex-col items-center gap-[16px]">
                            <img src={gromofon} alt="" className="w-[54px]" />
                            <p>Связь со специалистом из любого уголка планеты</p>
                        </div>
                        <div className="w-[182px] flex flex-col items-center gap-[16px]">
                            <img src={messageIcon} alt="" className="w-[54px]" />
                            <p>Сделаете визит к врачу в разы приятнее.</p>
                        </div>
                        <div className="w-[182px] flex flex-col items-center gap-[16px]">
                            <img src={kingIcon} alt="" className="w-[54px]" />
                            <p>Построите график под себя.</p>
                        </div>
                    </div>
                    <div className="text-[50px] mt-[115px] font-montserrat leading-[4rem] text-center">
                        <span className="text-[#E5B093] uppercase">как</span>
                        <span className="uppercase"> происходит работа  <br /> avicenna ai?</span>
                    </div>
                    <div className="flex flex-col gap-2 m-auto w-3/4 mt-[104px]">
                        <div className="flex flex-row items-center gap-16">
                            <div><img src={onePhoto} alt="" className="w-[380px]" /></div>
                            <div className="flex flex-col">
                                <img src={one} alt="" className="w-[220px]" />
                                <p className="font-[30px] tracking-[1px] w-[190px] mt-[-30px] ml-[100px]">Анализ сообщений пользователя и предварительный диагноз</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-16">
                            <div className="flex flex-col">
                                <img src={two} alt="" className="w-[220px]" />
                                <p className="font-[30px] tracking-[1px] w-[250px] mt-[-30px] ml-[100px]">Рекомендации подходящих пользователю специалистов</p>
                            </div>
                            <div><img src={twoPhoto} alt="" className="w-[380px]" /></div>
                        </div>
                        <div className="flex flex-row items-center gap-16">
                            <div><img src={threePhoto} alt="" className="w-[380px]" /></div>
                            <div className="flex flex-col">
                                <img src={three} alt="" className="w-[220px]" />
                                <p className="font-[30px] tracking-[1px] w-[250px] mt-[-30px] ml-[100px]">Пользователь выбирает специалиста</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-16">
                            <div className="flex flex-col">
                                <img src={foor} alt="" className="w-[220px]" />
                                <p className="font-[30px] tracking-[1px] w-[220px] mt-[-30px] ml-[100px]">Связь со специалистом, получение диагноза и соответствующего лечения</p>
                            </div>
                            <div><img src={foorPhoto} alt="" className="w-[380px]" /></div>
                        </div>
                    </div>
                    <div className=" mt-[115px] font-montserrat text-center">
                        <span className="text-[#E5B093] text-[50px] leading-[4rem]">ЭКОНОМЬТЕ ВРЕМЯ</span>
                        <span className="uppercase text-[50px] leading-[4rem]"> НА очереди <br /> к кабинету врача</span>
                        <p className="text-[20px] mt-4 font-light tracking-[1px] ">Попробуйте воспользоватьсяя нашим сервисом хотя бы раз и заметите, <br />насколько приятнее стал визит врача</p>
                    </div>
                    <div className="bg-wrapper mb-12">

                        <div className="flex flex-row w-[90%] m-auto">
                            <div><img src={mobile} className="w-[95%] mt-[100px]" alt="" /></div>
                            <div className="text-black mt-[200px] flex flex-col text-center items-center pr-[40px]">
                                <p className="text-[30px] text-center font-light">Обратиться К ИИ помощнику</p>
                                <p className="text-[16px] w-[322px] mt-[17px]">Сосредоточьтесь на своем собственном графике, а врач всегда будет у вас в кармане</p>
                                <NavLink to={'/chat'}>
                                    <button className="btn-prime w-[344px] h-[80px] mt-[52px] font-[14px]  text-white">AVICENNA AI</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
