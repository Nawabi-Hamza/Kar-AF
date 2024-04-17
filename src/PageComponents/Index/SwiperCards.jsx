import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";



export default function SwiperCards({jobdata}) {
  return (
    <>
    <div className="container-fluid px-2 px-md-3 px-lg-5 container my-swip">
      <div className="swiper-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000,pauseOnMouseEnter:true }}
              speed={1000}
              slidesPerView={1} // Set number of slides per view
              breakpoints={{
                // Set different configurations based on device size
                1000: {
                  slidesPerView: 2, // Show 2 slides per view on devices larger than or equal to 768px (tablets and desktops)
                },
                1200: {
                  slidesPerView: 3, // Show 3 slides per view on devices larger than or equal to 1024px (desktops)
                },
              }}
              spaceBetween={30}
              className="mySwiper"
          >
            {jobdata.map( (item)=>(
              <SwiperSlide key={item.id} className="swiper-card bg-white p-4">
              <div className="d-flex gap-3 justify-content-around">
                <img src={`./assets/${item.img}`} alt="" className="swiper-img" />
                <div className="w-100 item-swiper-body d-flex flex-column justify-content-between ">
                    <p className="d-flex justify-content-between h5 fw-bold text-secondary"><span>{item.company}</span><span className="d-flex  gap-2"><i className="bi bi-file-earmark-ruled "></i><i className="bi bi-file-earmark-zip"></i></span></p>
                    <h4 className="h4 d-flex">{item.jobTitle}</h4>
                    <p className="d-flex justify-content-between span "><span>{item.startDate}</span><span className="badge rounded-pill badge-bg-warning">Promoted</span></p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
   
    </>
  );
}
