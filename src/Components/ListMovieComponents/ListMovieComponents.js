import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { layDanhSachPhimDangChieuAction, layDanhSachPhimSapChieuAction } from "../../redux/action/QuanLyPhimAction";



const ListMovieComponents = (props) => {
    const setting = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
        ],
    };
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { arrFilmSapChieu } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimDangChieuAction());
        dispatch(layDanhSachPhimSapChieuAction());
    }, []);
    const renderListMovieDangChieu = () => {
        if (arrFilm && arrFilm.length > 0) {
            return arrFilm.map((item) => {
                return <Movie key={item.maPhim} movie={item} LichChieu={"before"} />
            })
        }
    };
    const renderListMovieSapChieu = () => {
        if (arrFilmSapChieu && arrFilmSapChieu.length > 0) {
            return arrFilmSapChieu.map((item) => {
                return <Movie key={item.maPhim} movie={item} LichChieu={"after"} />
            })
        }
    };  
    return (
        <div id="lichChieu">
            <section className="listMovie container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active button"
                            id="pills-dangChieu-tab"
                            data-toggle="pill"
                            href="#pills-dangChieu"
                            role="tab"
                            aria-controls="pills-dangChieu"
                            aria-selected="true" 
                        >
                            Phim đang chiếu
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link button"
                            id="pills-sapChieu-tab"
                            data-toggle="pill"
                            href="#pills-sapChieu"
                            role="tab"
                            aria-controls="pills-sapChieu"
                            aria-selected="false"
                        >
                            Phim sắp chiếu
                        </a>
                    </li>
                </ul>
                <div className="tab-content listMovie__content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active content__item"
                        id="pills-dangChieu"
                        role="tabpanel"
                        aria-labelledby="pills-dangChieu-tab"
                    >
                        <div className="content__dangChieu">
                            <Slider {...setting}>
                                {renderListMovieDangChieu()}
                            </Slider>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade content__item"
                        id="pills-sapChieu"
                        role="tabpanel"
                        aria-labelledby="pills-sapChieu-tab"
                    >
                        <div className="content__dangChieu">
                            {/* tab fiml sắp chiếu */}
                            <Slider {...setting}>
                                {renderListMovieSapChieu()}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ListMovieComponents;
