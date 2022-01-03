import Swal from "sweetalert2";
import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP_CHIEU, SET_CHI_TIET_PHIM, SET_LAY_THONG_TIN_HE_THONG_RAP, SET_LAY_THONG_TIN_CUM_RAP } from "../types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layDanhSachHeThongRap();
            // console.log('result', result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content
                })
            }
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}
export const layThongTinChiTietPhimAction = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);
            // console.log('result', result);
            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}
export const layThongTinHeThongRapAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layThongTinHeThongRap();
            // console.log('result', result);
            dispatch({
                type:SET_LAY_THONG_TIN_HE_THONG_RAP,
                heThongRapChieu: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}
export const layThongTinCumRapAction = (maHeThongRap) => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layThongTinCumRap(maHeThongRap);
            // console.log('result', result);
            dispatch({
                type:SET_LAY_THONG_TIN_CUM_RAP,
                thongTinCumRap: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}
export const taoLichChieuAction = (values) => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.taoLichChieu(values);
            Swal.fire(
                'Thông Báo!',
                'Thêm Lịch Chiếu Thành Công',
                'success'
            )
        } catch (error) {
            console.log('errors', error);
        }
    };
}
