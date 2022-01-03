import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseServices } from "./baseService";

export class QuanLyDatVeService extends baseServices {
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    taoLichChieu = (thongTinLichChieu) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
    }
    /*thongTinDatVe = {
        "maLichChieu": 0,
        "danhSachVe": [
            {
                "maGhe": 0,
                "giaVe": 0
            }
        ]
    } */
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);

    }
    layLogoRap = (maPhim) => { // mã phim lấy từ url
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
} 
    
export const quanLyDatVeService = new QuanLyDatVeService();