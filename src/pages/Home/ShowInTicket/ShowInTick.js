import React, { Fragment } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

export default function ShowInTick(props) {
  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((heThongRap, index) => {
      return <TabPane tab={<img src={heThongRap.logo} className="theater__LogoRap" width="50" alt="..." />} key={index}>
        <Tabs tabPosition={'left'}>
          {heThongRap.lstCumRap?.map((cumRap, index) => {
            return <TabPane tab={
              <div className="theater__rap" >
                <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg" width="50" height="50" alt="..." />
                <div className="rap--info text-left pl-2">
                  <span className="rap--name">{cumRap.tenCumRap}</span><br />
                  <span className="rap--address">{cumRap.diaChi}</span>
                  <p style={{ color: 'red' }}><b>[Chi Tiết]</b></p>
                </div>
              </div>
            } key={index}>
              {/* load phim tương ứng */}
              {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                return <Fragment key={index}>
                  <div className="theater__movie">
                    <div className="row">
                      <div className="col-2 p-0 pl-3 pl-xl-4">
                        <img width={70} height={80} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => {
                          e.target.onerror = null; e.target.src = "https://picsum.photos/70/80"
                        }} />
                      </div>
                      <div className="movie--info col-lg-10 pr-0">
                        <p className="movie--infoName">{phim.tenPhim}</p>
                        <p>120 phút - TIX 9.1 - IMDb 0</p>
                        <span style={{ fontSize: "20px", color: "red" }}>2D Digital</span>
                        <div className="theater__time">
                          {phim.lstLichChieuTheoPhim?.slice(0, 8).map((lichChieu, index) => {
                            return <NavLink key={index} to={`/checkout/${lichChieu.maLichChieu}/${phim.maPhim}`}>
                              <div className="btn px-1">
                                <span className="hightlight">{new Date(lichChieu.ngayChieuGioChieu).getHours()}:{new Date(lichChieu.ngayChieuGioChieu).getMinutes()}</span> ~ {new Date(lichChieu.ngayChieuGioChieu).getHours() + 2}:{new Date(lichChieu.ngayChieuGioChieu).getMinutes()}
                              </div>
                            </NavLink>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              })}
            </TabPane>
          })}
        </Tabs>
      </TabPane>
    })
  }
  return (
    <div id="cumRap">
      <section className="theater container py-5">
        <div className="theater_content my-5 py-4 bg-white" >
          <Tabs tabPosition={'left'}>
            {renderHeThongRap()}
          </Tabs>
        </div>
      </section>
    </div>

  )
}
