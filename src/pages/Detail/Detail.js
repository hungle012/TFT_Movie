import React, { useEffect } from 'react';
import { Tabs, Rate } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhimAction } from '../../redux/action/QuanLyRapAction';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
export default function Detail(props) {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(layThongTinChiTietPhimAction(id));
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <section className="detailMovie">
                <div className="detail__banner" style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundRepeat: 'no-repeat' }} onError={(e) => {
                    e.target.onerror = null; e.target.src = "https://picsum.photos/255/379"
                }}></div>
                <div className="overlay__banner"></div>
                <div className="container detailMovie__info">
                    <div className="row">
                        <div className="col-6 col-md-3 detail__img">
                            <img src={`${filmDetail.hinhAnh}`} alt={`${filmDetail.tenPhim}`} className="img-fluid w-100" onError={(e) => {
                                e.target.onerror = null; e.target.src = "https://picsum.photos/255/379"
                            }} />
                            <div className="icon__play">
                                <a className="video" href={filmDetail.trailer} data-lity>
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 infoText my-auto">
                            <p className="date">{new Date(filmDetail.ngayKhoiChieu).toLocaleDateString()}</p>
                            <p><span>P</span>{`${filmDetail.tenPhim}`}</p>
                            <span>120 phút - 0 IMDb - 2D/Digital</span><br />
                            <button className="button__muaVe" onClick={() => {
                                    document
                                        .getElementById("calendar")
                                        .scrollIntoView({ behavior: "smooth" });
                                }}>
                                    Mua Vé
                            </button>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-pie-chart gt-50" data-percent={10}>
                                <div className="ppc-progress">
                                    <div className="ppc-progress-fill" style={{ transform: 'rotate(360deg)' }} />
                                </div>
                                <div className="ppc-percents">
                                    <div className="pcc-percents-wrapper">
                                        <span>{`${filmDetail.danhGia * 10}`}%</span>
                                    </div>
                                </div>
                                <div className="icon__star">
                                    <i><Rate allowHalf value={filmDetail.danhGia / 2} /></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="detailMovie_ShowTimes" id="calendar">
                <div className="container">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="showtime-tab" data-toggle="tab" href="#showtime" role="tab" aria-controls="home" aria-selected="true">Lịch Chiếu</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="infomation-tab" data-toggle="tab" href="#infomation" role="tab" aria-controls="infomation" aria-selected="false">Thông Tin</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="vote-tab" data-toggle="tab" href="#vote" role="tab" aria-controls="vote" aria-selected="false">Đánh Giá</a>
                        </li>
                    </ul>
                    <div className="tab-content detailShowtime__content" id="myTabContent" >
                        <div className="tab-pane fade show active  mt-5" id="showtime" role="tabpanel" aria-labelledby="showtime-tab" style={{ backgroundColor: 'white', height: '480px' }}>
                            <Tabs tabPosition={'left'}>
                                {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
                                    return <TabPane tab={<img src={heThongRap.logo} className="theater__LogoRap" width="50" alt="..." />} key={index}>
                                        {heThongRap.cumRapChieu?.slice(0, 5).map((cumRap, index) => {
                                            return <div className="theater__LichChieu" key={index}>
                                                <div className="row">
                                                    <div className="theater__rap" >
                                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg" width="50" height="50" alt="..." />
                                                        <div className="rap--info text-left pl-2">
                                                            <span className="rap--name">{cumRap.tenCumRap}</span><br />
                                                            <span className="rap--address">{cumRap.diaChi}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <span style={{ fontSize: "20px", color: "red", marginTop: '10px' }}>2D Digital</span>
                                                        <div className="movie--info col-lg-10 col-sm-12 pr-0">
                                                            {cumRap.lichChieuPhim?.slice(0, 10).map((lichChieu, index) => {
                                                                return <div className="theater__time" key={index}>
                                                                    <NavLink to={`/checkout/${lichChieu.maLichChieu}/${filmDetail.maPhim}`}>
                                                                        <div className="btn px-1">
                                                                            <span className="hightlight">{new Date(lichChieu.ngayChieuGioChieu).getHours()}:{new Date(lichChieu.ngayChieuGioChieu).getMinutes()}</span> ~ {new Date(lichChieu.ngayChieuGioChieu).getHours() + 2}:{new Date(lichChieu.ngayChieuGioChieu).getMinutes()}
                                                                        </div>
                                                                    </NavLink>
                                                                </div>
                                                            })}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        })}
                                    </TabPane>
                                })}
                            </Tabs>
                        </div>
                        <div className="tab-pane fade mt-5 content__Infomation" id="infomation" role="tabpanel" aria-labelledby="infomation-tab">
                            <div className="row" style={{ display: 'flex' }}>
                                <div className="col-md-6">
                                    <p style={{ display: 'flex' }}>Tên Phim : <span className="ml-5">{`${filmDetail.tenPhim}`}</span></p>
                                    <p>Bí Danh : <span className="ml-5">{`${filmDetail.biDanh}`}</span></p>
                                    <p>Ngày Khời Chiếu : <span className="ml-5">{new Date(filmDetail.ngayKhoiChieu).toLocaleDateString()}</span></p>
                                    <p>Thời Lượng : <span className="ml-5">120 phút</span></p>
                                    <p>Định Dạng : <span className="ml-5">2D/Digital</span></p>
                                </div>
                                <div className="col-md-6">
                                    <p className="description">{`${filmDetail.moTa}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade  mt-5 content__Vote" id="vote" role="tabpanel" aria-labelledby="vote-tab">
                            <div className="myVote" data-toggle="modal" data-target="#VoteModal">
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa fa-user avatar" />
                                    </div>
                                    <div className="col-8">
                                        <p className="text-secondary">Bạn nghĩ gì về phim này?</p>
                                    </div>
                                    <div className="col-3 d-none d-md-block">
                                        <p>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* {renderComment()} */}
                            <div className="modal fade" id="VoteModal" tabIndex={-1} aria-labelledby="VoteModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header" style={{ padding: "0px" }}>
                                            <h5 className="modal-title text-dark text-center " id="VoteModalLabel" >
                                                <p >
                                                    {/* <HoverRating /> */}
                                                </p>
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className=" modal-body m-1 h-100">
                                            <textarea placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..." className="w-100  text-dark" style={{ height: "100px" }} />
                                        </div>
                                        <div className=" modal-footer">
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Đăng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
