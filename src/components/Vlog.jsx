import React from "react";
import { useState, useEffect } from "react";
import Blog from "../assets/icons/blog.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "./Swiper.module.css"; // Ensure this path is correct and matches the file location
// import fill from "../assets/icons/time-fill.png";
// import list from "../assets/icons/Wish-list.png";

const newsItems = [
  {
    date: "05, July, 2021",
    author: "Cristofer Westervelt",
    title: "New Features for WordPress Themes so we can enjoy Coding",
    image: Blog,
  },
  {
    date: "05, July, 2021",
    author: "Cristofer Westervelt",
    title: "New Features for WordPress Themes so we can enjoy Coding",
    image: Blog,
  },
  {
    date: "05, July, 2021",
    author: "Cristofer Westervelt",
    title: "New Features for WordPress Themes so we can enjoy Coding",
    image: Blog,
  },
  {
    date: "06, August, 2021",
    author: "Jane Doe",
    title: "New Features for WordPress Themes so we can enjoy Coding",
    image: Blog,
  },
  {
    date: "07, September, 2021",
    author: "John Smith",
    title: "Introducing Our Latest Plugins so we can enjoy Coding",
    image: Blog,
  },
];

const vlog = () => {
  return (
    <>
      <section className="py-10 px-10  sm:py- sm:px-10 md:py- md:px-20 lg:py- lg:px-20 xl:py- xl:px-32">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="py-15 text-center font-josefin font-bold text-2xl sm:text-[2rem] md:text-[2rem] leading-[1.5] tracking-[0%]">Latest News</h2>

          {/* Swiper Carousel  */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1 }, // Mobile devices
              480: { slidesPerView: 1 }, // Small devices
              640: { slidesPerView: 1 }, // Small tablets and up
              768: { slidesPerView: 1},
              1280: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              bulletClass: `swiper-pagination-bullet ${styles.swiperPaginationBullet}`,
              bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperPaginationBulletActive}`,
            }}
            loop={true}
            className={styles.swiperContainer} // Apply scoped class
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" md:flex md:justify-self-center md:w-[80%] lg:w-93 lg:h-98  w-93 h-98 rounded-lg shadow-md mx-4">
                  <div className="p-5  ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-85 h-60 object-cover mb-4 md:flex md:justify-self-center" // Added margin-bottom for spacing
                    />
                    <div className="p-4  flex flex-col gap-3">
                      <div className="flex items-center text-gray-500 gap-9 text-sm mb-2">
                        <span className="mr-2">📅 {item.date}</span>
                        <span>👤 {item.author}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.swiperPagination}></div>
        </div>
      </section>
    </>
  );
};

export default vlog;

{
  /* <h1 className="text-center font-josefin font-bold text-3xl sm:text-[2rem] md:text-[2rem] leading-[1.5] tracking-[0%]">
                Latest News
                </h1> */
}
{
  /* <div>
          <div>
            <img src={Blog} alt="Blog" className="w-full h-96" />
            <div>
              <div>
                <img src={fill} alt="Fill" className="w-4 h-4" />
                <p></p>
              </div>
              <div>
                <img src={list} alt="List" className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div> */
}
