import {SET_FILM_DANG_CHIEU,SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";
const stateDefault = {
    arrFilm: [
        {
            "maPhim": 9063,
            "tenPhim": "Doctor Strange 3",
            "biDanh": "doctor-strange-3",
            "trailer": "https://youtu.be/kNdM7b1Lm04",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/doctor-strange-3_gp01.jfif",
            "moTa": "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-11-29T23:58:54.343",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          }
    ],
    arrFilmSapChieu: [],
    filmDetail:{},
    thongTinPhim:{},
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) { 
        case SET_FILM_DANG_CHIEU: {
            state.arrFilm = action.arrFilm;
            return { ...state };
        }
        case SET_FILM_SAP_CHIEU: {  
            state.arrFilmSapChieu = action.arrFilmSapChieu;
            return { ...state };
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return {...state}
        }
        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }
        default: return { ...state }
    }
}