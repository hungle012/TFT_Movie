import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AppMovie() {
    const slick = {
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        next: false,
      };
    return (
        <div className="footer__introduce " id="ungDung">
          <div className="container">
            <div className="row">
              <div className="intro__info col-lg-6 text-center text-lg-left">
                <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                <p>
                  Không chỉ đặt vé, bạn có thể bình luận phim, chấm điểm rạp và
                  đổi quà hấp dẫn
                </p>
                <button className="bt mb-2">App miễn phí - Tải về ngay!</button>
                <br />
                <span>
                  {" "}
                  Fox có 2 phiên bản{" "}
                  <Link to="#" href="#">
                    iOS
                  </Link>{" "}
                  và{" "}
                  <Link to="#" href="#">
                    Android
                  </Link>
                </span>
              </div>

              <div className="intro__img col-lg-6 mt-5 mt-lg-0">
                <LazyLoadImage
                  src="./img/app/mobile.png"
                  alt="img_mobie"
                  className="img__mobile"
                />

                <div className="img__app">
                  <Slider {...slick}>
                    <LazyLoadImage
                      src="./img/app/slide1.jpg"
                      alt="img_slide1"
                      className="img"
                    />
                    <LazyLoadImage
                      src="./img/app/slide2.jpg"
                      alt="img_slide2"
                      className="img-fluid"
                    />
                    <LazyLoadImage
                      src="./img/app/slide3.jpg"
                      alt="img_slide3"
                      className="img-fluid"
                    />
                    <LazyLoadImage
                      src="./img/app/slide4.jpg"
                      alt="img_slide4"
                      className="img-fluid"
                    />
                    <LazyLoadImage
                      src="./img/app/slide5.jpg"
                      alt="img_slide5"
                      className="img-fluid"
                    />
                    <LazyLoadImage
                      src="./img/app/slide6.jpg"
                      alt="img_slide6"
                      className="img-fluid"
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
