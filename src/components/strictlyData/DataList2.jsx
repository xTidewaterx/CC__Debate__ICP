//i installed correct may 2023 version of swiper with this tutorial:: https://medium.com/@masterrajpatel/create-beautiful-image-sliders-with-react-swiper-a-step-by-step-guide-af522ef8d11c
//link swiper options:: https://medium.com/@masterrajpatel/create-beautiful-image-sliders-with-react-swiper-a-step-by-step-guide-af522ef8d11c
//correct version swiper, now have carousel with presentation to take bacck history aarchieve a historic presentation of life and intelligence reactions to danger our primal beasts clashing on the world stage for money, to settle wars and create friendships, but mostly just toxicity and ego
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const arrayList = [{headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}]

// if you want to use array

const slide_image_1 =    "https://swiperjs.com/demos/images/nature-1.jpg";
const slide_image_2 =    "https://swiperjs.com/demos/images/nature-2.jpg";
const slide_image_3 =    "https://swiperjs.com/demos/images/nature-3.jpg";
const slide_image_4 =    "https://swiperjs.com/demos/images/nature-4.jpg";
const slide_image_5 =    "https://swiperjs.com/demos/images/nature-5.jpg";
const slide_image_6 =    "https://swiperjs.com/demos/images/nature-6.jpg";
const slide_image_7 =    "https://swiperjs.com/demos/images/nature-7.jpg";


const DataList2 
    = () => {
        return (
            <div className="container">
            <h1 className="heading">CC</h1>
            <Swiper
            id="swiper__perspective"
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_1} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_2} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_3} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_4} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_5} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_6} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_7} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>

              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_1} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_2} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_3} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_4} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_5} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_6} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
              <SwiperSlide id="swiper-slide-alternative">
                <img src={slide_image_7} alt="slide_image" />
                <h3>Lorem Ipsum</h3>
              </SwiperSlide>
      
      
              <div className="slider-controler" >
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination" id="swiper__optionsCenter"></div>
              </div>
            </Swiper>
          </div>
        );
      };

export default DataList2;