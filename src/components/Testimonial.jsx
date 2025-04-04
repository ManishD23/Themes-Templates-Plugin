import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Swiper.module.css";
import quotes from "../assets/icons/double-quotes-l.png";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.",
    name: "Guy Hawkins",
    title: "CEO, Founder",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.",
    name: "Guy Hawkins",
    title: "CEO, Founder",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.",
    name: "Guy Hawkins",
    title: "CEO, Founder",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.",
    name: "Jane Doe",
    title: "Product Manager",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.",
    name: "John Smith",
    title: "Lead Developer",
  },
];

const Testimonial = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 xl:px-32 py-12">
      <h1 className="text-center font-josefin font-bold text-2xl sm:text-[2rem] md:text-[2rem] leading-[1.5] tracking-[0%]">
        What Our Clients Say
      </h1>
      <div className="pt-20">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // Small tablets and up
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.swiperPaginationBullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperPaginationBulletActive}`,
            // el: `.${styles.swiperPagination.split(" ")[0]}`,
          }}
          loop={true}
          className={styles.swiperContainer}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className="flex flex-col items-center justify-center text-center shadow-md w-full h-56">
                <img
                  src={quotes}
                  alt="Quotes"
                  className="sm:w-10 sm:h-10 md:mx-auto md:mb-4"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-400">{testimonial.quote}</p>
                  <h3 className="p-3 font-semibold">{testimonial.name}</h3>
                  <p className="text-xs text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperPagination}></div>
      </div>
    </section>
  );
};

export default Testimonial;

// import React from "react";
// import { useState, useEffect } from "react";
// import quotes from "../assets/icons/double-quotes-l.png";

// const Testimonial = () => {
//   return (
//     <section className=" px-4 sm:px-8 md:px-16 xl:px-32 ">
//       <h1 className=" text-center font-josefin font-bold text-3xl sm:text-[2rem] md:text-[2rem] leading-[1.5] tracking-[0%]">
//         What Our Clients Say
//       </h1>
//       <div className="pt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//         <div className="items-center w-93 h-56  flex flex-col justify-center text-center shadow-emerald-950">
//           <img src={quotes} alt="Quotes" className="w-10 h-10 mx-auto mb-4" />
//           <div className="p-5">
//             <p className="text-sm text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
//               eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
//               nisl volutpat at laoreet.
//             </p>
//             <h3 className="p-3 ">Guy Hawkins</h3>
//             <p className="text-xs text-gray-400">CEO, Founder</p>
//           </div>
//         </div>
//         <div className="items-center w-93 h-56  flex flex-col justify-center text-center shadow-md">
//           <img src={quotes} alt="Quotes" className="w-10 h-10 mx-auto mb-4" />
//           <div className="p-5">
//             <p className="text-sm text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
//               eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
//               nisl volutpat at laoreet.
//             </p>
//             <h3 className="p-3">Guy Hawkins</h3>
//             <p className="text-xs text-gray-400">CEO, Founder</p>
//           </div>
//         </div>
//         <div className="items-center w-93 h-56  flex flex-col justify-center text-center shadow-md">
//           <img src={quotes} alt="Quotes" className="w-10 h-10 mx-auto mb-4" />
//           <div className="p-5">
//             <p className="text-sm text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
//               eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere
//               nisl volutpat at laoreet.
//             </p>
//             <h3 className="p-3">Guy Hawkins</h3>
//             <p className="text-xs text-gray-400">CEO, Founder</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
