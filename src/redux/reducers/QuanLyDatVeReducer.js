import { ThongTinLichChieu, ThongTinLichChieuPhim } from "../../_core/models/ThongTinPhongVe";
import { CHUYEN_TAB, CHUYEN_TAB_ACTIVE, DAT_GHE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE, SET_LOGO_RAP } from "../types/QuanLyDatVeType"


const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangChon: [],
    danhSachGheNguoiKhacDat:[],
    tabActive: "1",
    widthCustom: '75%', 
    logoRap: new ThongTinLichChieuPhim()
    
}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };
        }

        case DAT_GHE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangChon];

            let index = danhSachGheCapNhat.findIndex(gheDangChon => gheDangChon.maGhe === action.gheDuocChon.maGhe);
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }

            return { ...state, danhSachGheDangChon: danhSachGheCapNhat }
        }

        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangChon = [];
            return {...state}
        }

        case CHUYEN_TAB: {
            state.tabActive = "2";
            state.widthCustom = "100%";
            return {...state}
        }

        case SET_LOGO_RAP: {
            state.logoRap = action.logoRap;
            return { ...state };
        }

        case CHUYEN_TAB_ACTIVE: {
            state.tabActive = action.number;
            state.widthCustom = "75%";
            return { ...state };
        }
        

        default:
            return { ...state }
    }
}