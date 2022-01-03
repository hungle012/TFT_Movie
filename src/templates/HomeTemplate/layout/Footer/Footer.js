import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="container">
          <div className="row info__top">
            <div className="col-md-4">
              <h4>TFT MOVIE</h4>
              <p>
                {" "}
                <Link to="#" href="#">
                  FAQ
                </Link>{" "}
                <span>
                  <Link to="#" href="#">
                    Thỏa thuận sử dụng
                  </Link>
                </span>{" "}
              </p>
              <p>
                <Link to="#" href="#">
                  Brand Guidelines
                </Link>{" "}
                <span>
                  {" "}
                  <Link to="#" href="#">
                    Chính sách bảo mật
                  </Link>{" "}
                </span>
              </p>
            </div>
            <div className="col-md-4 doiTac">
              <h4>ĐỐI TÁC</h4>
              <div className="row pb-2">
                <div className="col">
                  <a href="https://www.cgv.vn" target="_blank ">
                    <LazyLoadImage
                      src="../img/footer/cgv.png"
                      alt="cgv"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col ">
                  <a
                    href="https://www.bhdstar.vn"
                    title="bdh"
                    target="_blank "
                  >
                    {" "}
                    <LazyLoadImage
                      src="../img/footer/bhd.png"
                      alt="bhd"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col ">
                  <a
                    href="https://www.galaxycine.vn"
                    title="galaxy"
                    target="_blank "
                  >
                    {" "}
                    <LazyLoadImage
                      src="../img/footer/galaxycine.png"
                      alt="galaxy"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="http://cinestar.com.vn"
                    title="cinestar"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/cinestar.png"
                      alt="cinestar"
                      className="img-fluid w-100"
                    />
                  </a>
                </div>
                <div className="col ">
                  <a
                    href="https://www.megagscinemas.vn"
                    title="megags"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/megags.png"
                      alt="megags"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="row pb-2">
                <div className="col">
                  <a
                    href="https://www.betacineplex.vn/home.htm"
                    title="beta"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/bt.jpg"
                      alt="bt"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <a
                  href="https://www.betacineplex.vn/home.htm"
                  title="beta"
                  target="_blank "
                >

                </a>
                <div className="col">
                  <a
                    href="http://ddcinema.vn"
                    title="ddc"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/dongdacinema.png"
                      alt="ddc"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://touchcinema.com"
                    title="touch"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/TOUCH.png"
                      alt="touch"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://cinemaxvn.com"
                    title="cinemax"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/cnx.jpg"
                      alt="cinemax"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://starlight.vn"
                    title="starlight"
                    target="_blank "
                  >
                    {" "}
                    <LazyLoadImage
                      src="../img/footer/STARLIGHT.png"
                      alt="starlight"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="row pb-2">
                <div className="col">
                  <a
                    href="https://www.dcine.vn"
                    title="dcine"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/dcine.png"
                      alt="dcine"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="http://lottecinemavn.com/LCHS/index.aspx"
                    title="lotte"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/lotte.png"
                      alt="lotte"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.payoo.vn"
                    title="payoo"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/payoo.jpg"
                      alt="payoo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://zalopay.vn"
                    title="zalo"
                    target="_blank "
                  >
                    {" "}
                    <LazyLoadImage
                      src="../img/footer/zalopay_icon.png"
                      alt="zalo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.agribank.com.vn"
                    title="agribank"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/AGRIBANK.png"
                      alt="Agribank"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a
                    href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                    title="vietcombank"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/VCB.png"
                      alt="Vietcombank"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.vietinbank.vn/web/home/vn/index.html"
                    title="viettinbank"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/VIETTINBANK.png"
                      alt="Viettinbank"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.indovinabank.com.vn"
                    title="IVB"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/IVB.png"
                      alt="IVB"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://webv3.123go.vn"
                    title="123go"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/123go.png"
                      alt="123go"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://laban.vn"
                    title="laban"
                    target="_blank "
                  >
                    <LazyLoadImage
                      src="../img/footer/laban.png"
                      alt="laban"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="pt-3 pt-md-0">SOCIAL</h4>
              <Link to="#" href="#" title="facebook">
                <i className="fab fa-facebook pl-0" />
              </Link>
              <Link to="#" href="#" title="instagram">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="#" href="#" title="twitter">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#" href="#" title="pinterest">
                <i className="fab fa-pinterest" />
              </Link>
            </div>
          </div>
          <div className="row info__bottom">
            <div className="col-md-8">
              <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                Hồ Chí Minh, Việt Nam.
              </p>
              <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
              <p>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
              <p>
                Email:{" "}
                <Link to="#" href="#">
                  support@tix.vn
                </Link>
              </p>
            </div>
            <div className="col-md-4 text-center mt-5">
              <Link
                to="#"
                href="http://online.gov.vn/Home/WebDetails/62782"
                target="_blank "
              >
                <LazyLoadImage
                  src="../img/footer/bocong thuong.png"
                  alt="bocongthuong"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
