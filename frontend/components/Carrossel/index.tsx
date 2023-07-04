import React from 'react';

import imagemReitoria from '../../public/images/banner.jpg';
import logoUfmg from '../../public/images/LogoUfmg.png';
import Image from 'next/image';


import { Swiper, SwiperSlide,Navigation, Pagination} from 'swiper/react';
import {  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Carrossel() {

    const slides = [imagemReitoria, logoUfmg];

  return (
    <div>
        <Swiper
        modules={[Navigation, Pagination]}
        >
            {slides.map((slide)=>{
                return(
                <SwiperSlide key="oi">
                    <Image src={slide} alt="imagem logo" width={200} height={150} />
                </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  );
}

