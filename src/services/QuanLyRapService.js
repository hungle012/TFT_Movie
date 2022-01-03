import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseService";
export class QuanLyRapService extends baseServices{
    constructor() {
        super();
    }
    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
    layThongTinHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
    }
    layThongTinCumRap = (maHeThongRap) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
    taoLichChieu = (values) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`,values)
    }
} 
export const  quanLyRapService = new QuanLyRapService();