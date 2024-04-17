///link lists:: https://codesandbox.io/p/sandbox/image-slider-ewphf?file=%2Fsrc%2Fstyles.css%3A9%2C1, active on selected main
//find installation for perfect translucent carousel with light omnious
//install:: npm i react-multi-carousel
//now single original, all other smaller
//number the images, on certain screen size, when we evolve past certain sizes, now a certain iteration number is the center image
//image number 4 iteration on pc is the exact image in the middle on c ertain sizes breakpoints, now have that be specific class, if that number on certain size then exact larger center

//here we need correct imports for our main error message invoked without new to go away
//problem being application is deemed unresponsive as I removed all new code without any change, error still there despite no new imports

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../css/Styles.css"
import "../../css/slider.css"
import "../../css/swiperStyles.css"
// install Swiper modules

import { Swiper, SwiperSlide } from 'swiper/react';
//problem mixing different versions of swiper, classs constructors invoked with new, different rules for different data sets,
//another code that extends these classes different data objects 

import { Navigation } from "swiper";


//the swiper container that wraps our slides take the element properties 
//
//link parameter values for slide with initialSlide and slidesPerView
export default function DataList ()  {
 
 
 
 
 try { return (
    <>
    <h1 className="App__Collection">Collection</h1>

    <Swiper className="swiper"  
    navigation={true}
    pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      nextEl={ '.swiper-button-next'}
      prevEl={ '.swiper-button-prev'}
      
   
      //endless infinite:: https://codesandbox.io/p/devbox/swiper-react-infinite-loop-vfz433?file=%2Fsrc%2FApp.jsx
      modules={[Navigation]}

      slidesPerView={5}
      initialSlide={3}
     
      breakpoints = {{
        1024: {
            slidesPerView: 4,
          
        },
        438: {
            slidesPerView: 3,
       
        }
    }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      watchOverflow= {true}
      centeredSlides={true}
  
   

      loop= {true} //infinite scroll from bottom to first, values increasing with infinite
      spaceBetween= {30} 

 
     
      >
 
      <SwiperSlide> <img src="//into-the-program.com/demo/images/sample007.jpg" alt=""></img></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>

    </Swiper>



  </>
  ) } catch (error) {
    console.log(error.message)
 
  }
}




//.swiper-slide-active --boxc-shadow, remove center index