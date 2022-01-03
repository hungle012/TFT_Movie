import { quanlyPhimService } from '../../services/QuanLyPhimServices';
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from '../types/QuanLyPhimType';
import 'antd/dist/antd.css';
import { history } from '../../App';
import Swal from 'sweetalert2';
export const layDanhSachPhimDangChieuAction = (tenPhim = '') => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.layDanhSachPhim(tenPhim);
            // đưa lên reducer
            dispatch({
                type: SET_FILM_DANG_CHIEU,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const layDanhSachPhimSapChieuAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.LayDanhSachPhimSapChieu();
            // đưa lên reducer
            dispatch({
                type: SET_FILM_SAP_CHIEU,
                arrFilmSapChieu: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.themPhimUploadHinh(formData);
            // alert thông báo thêm thành công
            Swal.fire(
                'Thông Báo!',
                'Thêm Phim Thành Công',
                'success'
            )
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.layThongTinPhim(maPhim);
            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await quanlyPhimService.capNhatPhimUpload(formData);
            Swal.fire(
                'Thông Báo!',
                'Thêm Phim Thành Công',
                'success'
            )
            console.log('result', result.data.content);
            dispatch(layDanhSachPhimDangChieuAction());
            history.push('/admin/films');
        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}
export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanlyPhimService.xoaPhim(maPhim);
            console.log('result', result.data.content);
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(layDanhSachPhimDangChieuAction())
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}