'use client'

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import image1 from '@/public/360_F_599359632_43wJXiaMD8o6HX3H4mshW6E83IUrLKCh.jpg'
import image2 from '@/public/winter-morning-sunrise-natural-beauty-bangldesh-village-135697768.webp'
import image3 from '@/public/photo-1679029524057-7065d479da5c.jpeg'

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
        <div className="container mx-auto px-2">
        <Slider {...settings}>
            {/* Slide 1 */}
            <div>
                <Image className="w-full h-40 md:h-80 lg:h-[500px] object-center object-cover"
                src={image1}
                alt="Picture of the author"
                />
            </div>

            {/* Slide 2 */}
            <div>
                <Image className="w-full h-40 md:h-80 lg:h-[500px] object-center object-cover"
                src={image2}
                alt="Picture of the author"
                />
            </div>

            {/* Slide 3 */}
            <div>
                <Image className="w-full h-40 md:h-80 lg:h-[500px] object-center object-cover"
                src={image3}
                alt="Picture of the author"
                />
            </div>
            
        </Slider>
        </div>
    </div>
  );
};

export default BannerSlider;
