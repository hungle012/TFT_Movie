import React from 'react'
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Movie(props) {
    const { LichChieu } = props;
    return (
        <div>
            <div className={LichChieu === "before" ? "movie__item" : "movie__itemSapChieu"}>
                <div className="movie__img">
                    <LazyLoadImage src={props.movie.hinhAnh} alt="film-1" className="img-fluid" onError={(e) => {e.target.onerror = null; e.target.src = "https://picsum.photos/255/379"
                }}/>
                    <div className="icon__play">
                        <a className="popup-youtube" href={props.movie.trailer} data-lity>
                            <i className="fa fa-play" />
                        </a>
                    </div>
                    <div className="danhGia" style={{ visibility: props.LichChieu === "before" ? "visible" : "hidden" }}>{props.movie.danhGia}
                        <i className="fa fa-star icon__start" />
                    </div>
                    <div className="ngayChieu" style={{ display: props.LichChieu === "before" ? "none" : "block" }}>{new Date(props.movie.ngayKhoiChieu).getDate()}/{new Date(props.movie.ngayKhoiChieu).getMonth() + 1}</div>
                    <div className="overlay" /></div>
                <div className="movie__info">
                    <p className="tenPhim">{props.movie.tenPhim}</p>
                    <span className="thoiLuong">120 phút</span>
                    <NavLink to={`/detail/${props.movie.maPhim}`}><div className="movie__btnMuaVe button__muaVe">Mua Vé <i className="fa fa-arrow-circle-down icon__down" />
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


export default Movie;
