import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACION, SET_LAY_THONG_TIN_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, SET_MA_LOAI_NGUOI_DUNG, DANG_KY_ACTION, SET_THONG_TIN_TAI_KHOAN_ND, DOI_MAT_KHAU_ACTION } from "../types/QuanLyNguoiDungType"

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: [],
    chiTietNguoiDung: {},
    maLoaiNguoiDung: [],
    thongTinTaiKhoanND: {}
}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DANG_NHAP_ACION : {
            const {thongTinDangNhap} = action;
            // console.log(thongTinDangNhap);
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken)

            return {...state, userLogin:thongTinDangNhap}
        }
        case SET_DANH_SACH_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state}
        }
        case SET_LAY_THONG_TIN_NGUOI_DUNG: {
            state.chiTietNguoiDung = action.chiTietNguoiDung;
            return {...state}
        }
        case SET_MA_LOAI_NGUOI_DUNG: {
            state.maLoaiNguoiDung = action.maLoaiNguoiDung;
            return {...state}
        }
        case DANG_KY_ACTION: {
            const {thongTinDangKy} = action;

            return {...state}
        }
        case SET_THONG_TIN_TAI_KHOAN_ND: {
            state.thongTinTaiKhoanND = action.thongTinTaiKhoanND;

            return {...state}
        }
        case DOI_MAT_KHAU_ACTION: {
            return {...state}
        }

        default:
            return { ...state }
    }
}