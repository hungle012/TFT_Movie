export class ThongTinLichChieu {
    thongTinPhim = new ThongTinPhim();
    danhSachGhe = [];
}

export class ThongTinPhim {
    diaChi: '';
    gioChieu: '';
    hinhAnh: '';
    maLichChieu: '';
    ngayChieu: '';
    tenCumRap: '';
    tenPhim: '';
    tenRap: '';
}

export class ThongTinLichChieuPhim {
    heThongRapChieu = [new heThongRapChieu()]
}

export class heThongRapChieu {
    cumRapChieu = new cumRapChieu();
    maHeThongRap = '';
    tenHeThongRap = '';
    logo = ''
}

export class cumRapChieu {
    lichChieuPhim = new lichChieuPhim();
    maCumRap: "";
    tenCumRap: "";
    hinhAnh: "";
    diaChi:""
}

export class lichChieuPhim {
    maLichChieu: "";
    maRap: "";
    tenRap: "";
    ngayChieuGioChieu: "";
    giaVe: '';
    thoiLuong: ''
}