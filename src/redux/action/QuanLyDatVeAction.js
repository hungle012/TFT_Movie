import Swal from "sweetalert2";
import { history } from "../../App";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE, SET_LOGO_RAP } from "../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";



export const layChiTietPhongVeAction = (maLichChieu) => {

    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                });

            }
            // console.log('result', result);
        } catch (error) {
            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}

export const datVeAction = ((thongTinDatVe = new ThongTinDatVe()) => {

    return async dispatch => {

        try {

            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            // console.log(result.data.content);

            await dispatch(layChiTietPhongVeAction(ThongTinDatVe.maLichChieu));

            await dispatch({
                type: DAT_VE_HOAN_TAT
            })

            await dispatch(hideLoadingAction);

            await Swal.fire({
                icon: 'success',
                title: 'Đặt vé thành công',
                text: 'Thông tin vé sẽ được gửi qua tin nhắn Zalo và Email của bạn! Hoặc bạn có thể xem lại ở lịch sử đặt vé.',
                showConfirmButton: false,
                timer: 3000,
            });

            dispatch({
                type: CHUYEN_TAB
            });

        } catch (error) {
            console.log(error.response?.data);
            
            dispatch(hideLoadingAction);

            Swal.fire({
                icon: 'error',
                title: 'Đặt vé thất bại',
                text: 'Có vẻ có lỗi ở đây, bạn vui lòng thực hiện đặt vé lại lần nữa!',
                confirmButtonText: 'Tiếp tục',
                denyButtonText: 'Trở về trang chủ',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload(false);
                } else if (result.isDenied) {
                    history.push('/');
                }
            })
        }
    }
})

export const layLogoRapAction = (maPhim) => {

    return async (dispatch) => {

        try {
            const result = await quanLyDatVeService.layLogoRap(maPhim)

            if (result.data.statusCode === 200) {
                // console.log(result.data.content);
                dispatch({
                    type: SET_LOGO_RAP,
                    logoRap: result.data.content
                });

            }
            // console.log('result', result);
        } catch (error) {
            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}