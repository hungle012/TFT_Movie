import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimUploadAction, layThongTinPhimAction } from '../../../../redux/action/QuanLyPhimAction';
import { GROUPID } from '../../../../util/settings/config';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

export default function EditFilm(props) {
    const [imgSrc, setImgSrc] = useState('');
    const { thongTinPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(layThongTinPhimAction(id));
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: thongTinPhim.hot,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null,
            maNhom: GROUPID
        },
        validationSchema: Yup.object().shape({
            tenPhim: Yup.string().required('Tên phim không được bỏ trống !').min(6, 'Tên phim tối thiểu 6 kí tự !').max(100, 'Tên phim tối đa 100 kí tự'),
            trailer: Yup.string().required('Trailer không được bỏ trống !').matches(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/, 'Trailer không đúng định dạng'),
            moTa: Yup.string().required('Mô tả không được bỏ trống !').min(10, 'Mô tả tối thiểu 10 kí tự !').max(600, 'Mô tả tối đa 600 kí tự !'),
            // bắt lỗi ngày khởi chiếu lớn hơn hoặc bằng ngày hiện tại

        }),
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUPID;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            // cập nhật film
            dispatch(capNhatPhimUploadAction(formData));
        }
    })
    const handChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    }
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }
    const handleChangeFile = async (e) => {
        //Lấy file ra từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
           //Đem dữ liệu file lưu vào formik
            await formik.setFieldValue('hinhAnh', file);
            //Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);//Hình base 64
            }
            
        }
    }

    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
        >
            <h3>Cập nhật phim </h3>
            <Form.Item label="Tên phim">
                <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                {formik.touched.tenPhim && formik.errors.tenPhim &&
                    <div className="alert alert-danger">{formik.errors.tenPhim}</div>}
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name="trailer" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.trailer} />
                {formik.touched.trailer && formik.errors.trailer &&
                    <div className="alert alert-danger">{formik.errors.trailer}</div>}
            </Form.Item>
            <Form.Item label="Mô tả">
                <TextArea name="moTa" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.moTa} />
                {formik.touched.moTa && formik.errors.moTa &&
                    <div className="alert alert-danger">{formik.errors.moTa}</div>}
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={"DD/MM/YYYY"} onChange={handChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
            </Form.Item>
            <Form.Item label="Đang chiếu" >
                <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
                <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
            </Form.Item>
            <Form.Item label="Hot">
                <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
            </Form.Item>
            <Form.Item label="Đánh Giá">
                <InputNumber onChange={handleChangeInputNumber('danhGia')} defaultValue={formik.values.danhGia} />
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                <br />
                <img width={150} height={150} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="..." />
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button type='submit' style={{ backgroundColor: 'rgb(125 211 252)' }} className='p-2 text-white'>Cập nhật</button>
            </Form.Item>
        </Form>
    )
}
