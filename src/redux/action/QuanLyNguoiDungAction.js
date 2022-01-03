import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_KY_ACTION, DANG_NHAP_ACION, DOI_MAT_KHAU_ACTION, SET_DANH_SACH_NGUOI_DUNG, SET_LAY_THONG_TIN_NGUOI_DUNG, SET_MA_LOAI_NGUOI_DUNG, SET_THONG_TIN_TAI_KHOAN_ND } from "../types/QuanLyNguoiDungType";
import { history } from '../../App'
import Swal from "sweetalert2";


export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACION,
                    thongTinDangNhap: result.data.content
                });
                await Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // chuyển hướng đăng nhập về trang trước đó
                history.goBack();
            }
            // console.log('result', result);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại',
                text: 'Tên tài khoản hoặc mật khẩu không đúng',
                showConfirmButton: false,
                timer: 1500,
            })
            console.log('error', error.response?.data.content);
        }
    }
}

export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa);
            // đưa lên reducer
            dispatch({
                type: SET_DANH_SACH_NGUOI_DUNG,
                thongTinNguoiDung: result.data.content
            })
        } catch (error) {
            console.log('errors', error.response?.data.content);
        }
    };
}
export const layThongTinNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
            dispatch({
                type: SET_LAY_THONG_TIN_NGUOI_DUNG,
                chiTietNguoiDung: result.data.content
            })
        } catch (error) {
            console.log('errors', error.response?.data.content);
        }
    };
}

export const layThongTinLoaiNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
            dispatch({
                type: SET_MA_LOAI_NGUOI_DUNG,
                maLoaiNguoiDung: result.data.content
            })
        } catch (error) {
            console.log('errors', error.response?.data.content);
        }
    };
}

export const themNguoiDungAction = (values) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.themNguoiDung(values);
            Swal.fire(
                'Thông Báo!',
                'Thêm User Thành Công',
                'success'
            )
        } catch (error) {
            console.log('errors', error.response?.data.content);
        }
    };
}
export const suaNguoiDungAction = (values) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(values);
            Swal.fire(
                'Thông Báo!',
                'Sửa User Thành Công',
                'success'
            )
            dispatch(layDanhSachNguoiDungAction());
            history.push('/admin/users')
        } catch (error) {
            console.log('errors', error.response?.data.content);
        }
    };
}
export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
            //Sau khi xoá load lại danh sách người dùng mới;
            dispatch(layDanhSachNguoiDungAction())
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Người dùng này đã đặt vé xem phim không thể xóa!',
            })
        }
    };
}

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
            console.log(thongTinDangKy)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content
                });
                await Swal.fire({
                    icon: 'success',
                    title: 'Đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // chuyển hướng đăng nhập về trang trước đó
                history.goBack();
            }
            // console.log('result', result);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng ký thất bại',
                text: 'Tên tài khoản hoặc email bị trùng',
                showConfirmButton: false,
                timer: 1500,
            })
            console.log('error', error.response?.data.content);
        }
    }
}

export const layThongTinTaiKhoanNDAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinTaiKhoanND();

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_TAI_KHOAN_ND,
                    thongTinTaiKhoanND: result.data.content
                });
            }
        } catch (error) {
            console.log('error', error.response?.data.content);
        }
    };
}
export const doiMatKhauAction = (thongTinThayDoi) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.doiMatKhau(thongTinThayDoi);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DOI_MAT_KHAU_ACTION,
                    thongTinThayDoi: result.data.content
                });
                await Swal.fire({
                    icon: 'success',
                    title: 'Đổi mật khẩu thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            // console.log('result', result);
        } catch (error) {
            console.log('error', error);
        }
    }
}