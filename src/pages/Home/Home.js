import React, { useEffect } from 'react';
import AppMovie from '../Home/AppMovie/AppMovie';
import ListMovieComponents from '../../Components/ListMovieComponents/ListMovieComponents';
import News from '../Home/News/News';
import ShowInTick from '../Home/ShowInTicket/ShowInTick';
import HomeCarousel from '../../templates/HomeTemplate/layout/HomeCarousel/HomeCarousel'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachHeThongRapAction } from '../../redux/action/QuanLyRapAction';
import SearchFilm from './SearchFilm/SearchFilm';
import { layDanhSachPhimDangChieuAction } from '../../redux/action/QuanLyPhimAction';

export default function Home(props) {
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const {arrFilm} = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachHeThongRapAction());     
        dispatch(layDanhSachPhimDangChieuAction())
    }, [])
    
    return (
        <div className="home">
            <HomeCarousel/>
            <SearchFilm data={arrFilm}/>
            <ListMovieComponents/>
            <ShowInTick heThongRapChieu={heThongRapChieu}/>
            <News/>
            <AppMovie/>
        </div>
    )
}
