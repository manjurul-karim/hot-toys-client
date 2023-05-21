import React from "react";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import banner4 from "../../../assets/banner/banner4.png";
import banner5 from "../../../assets/banner/banner5.png";
import banner6 from "../../../assets/banner/banner6.png";
import banner7 from "../../../assets/banner/banner7.png";
import banner8 from "../../../assets/banner/banner8.png";
import banner9 from "../../../assets/banner/banner9.png";
import banner10 from "../../../assets/banner/banner10.jpeg";
import banner11 from "../../../assets/banner/banner11.jpg";
import banner14 from "../../../assets/banner/banner14.jpg";
import banner15 from "../../../assets/banner/banner15.png";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] rounded">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          {/* <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2b2a2a] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                Find Your Best Toys For Your CHILDREN
              </h2>
              <p>
                We Delivered Best of fantastic,hand-piched,age appropiet car
                toys.
              </p>
            </div>
          </div> */}
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide15" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner5} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner6} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide7" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img src={banner7} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide8" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <img src={banner8} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide7" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide9" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide9" className="carousel-item relative w-full">
          <img src={banner9} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide8" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide10" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide10" className="carousel-item relative w-full">
          <img src={banner10} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide9" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide11" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide11" className="carousel-item relative w-full">
          <img src={banner11} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide10" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide12" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide12" className="carousel-item relative w-full">
          <img src={banner14} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide11" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide13" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide13" className="carousel-item relative w-full">
          <img src={banner15} className="w-full" />
          <BannerText></BannerText>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide12" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
