import { SET_HE_THONG_RAP_CHIEU, SET_LAY_THONG_TIN_CUM_RAP, SET_LAY_THONG_TIN_HE_THONG_RAP } from "../types/QuanLyRapType";
const stateDefault = {
    heThongRapChieu: [],
    thongTinCumRap: []

}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP_CHIEU: {
            state.heThongRapChieu = action.heThongRapChieu;
            return { ...state };
        }
        case SET_LAY_THONG_TIN_HE_THONG_RAP: {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state}
        }
        case SET_LAY_THONG_TIN_CUM_RAP: {
            state.thongTinCumRap = action.thongTinCumRap;
            return {...state}
        }
        default: return { ...state }
    }
}
