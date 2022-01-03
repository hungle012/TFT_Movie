import { baseServices } from "./baseService";
import { GROUPID } from '../util/settings/config';
import { values } from "lodash";
export class QuanLyNguoiDungService extends baseServices {
    constructor() {
        super();
    }
    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'', matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }
    layDanhSachNguoiDung = (tuKhoa = '') => {
        if (tuKhoa !== '') {
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)

        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    layDanhSachLoaiNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }
    layThongTinNguoiDung = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
    }
    themNguoiDung = (values) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,values);
    }
    capNhatThongTinNguoiDung = (values) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values);
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    }
    layThongTinTaiKhoanND = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    doiMatKhau = (thongTinThayDoi) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinThayDoi)
    }

}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();