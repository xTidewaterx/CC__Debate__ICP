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
import "../../css/swiperStyles.css"
// install Swiper modules
import Swiper, {Navigation} from "swiper";

import { SwiperSlide } from "swiper/react";

//problem mixing different versions of swiper, classs constructors invoked with new, different rules for different data sets,
//another code that extends these classes different data objects 


const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

});


//the swiper container that wraps our slides take the element properties 
//
//link parameter values for slide with initialSlide and slidesPerView
export default function DataList3 ()  {
 
 
 
 
 try { return (
    <>

    <Swiper className="swiper"  
    navigation={true}
    pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      nextEl={ '.swiper-button-next'}
      prevEl={ '.swiper-button-prev'}
      
    
      
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={5}
      initialSlide={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      watchOverflow= {true}
      centeredSlides={true}
   


 
     
      >
 
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>

    </Swiper>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>



  </>
  ) } catch (error) {
    console.log(error.message)
 
  }
}


