import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import first from '../../assets/doctors/1.svg'
import second from '../../assets/doctors/2.svg'
import third from '../../assets/doctors/3.svg'
import fourth from '../../assets/doctors/4.svg'
import fivth from '../../assets/doctors/5.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const photos = [
     first,second,third,fourth,fivth
];

export default function CoverFlow() {
    return (
        <section className="pt-[7rem] pb-[2rem] bg-[#DAEAF7FF]">
            <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
               
                <Swiper
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    effect={'coverflow'}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                      }}
                    centeredSlides={true}
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 0,
                        slideShadows: false,
                    }}
                    className="coverflow"
                >
                    {photos.map((p, index) => (
                        <SwiperSlide key={index}>
                            <img src={p} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
