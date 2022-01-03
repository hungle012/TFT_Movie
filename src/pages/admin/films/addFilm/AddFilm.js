import React, { useState } from 'react';
import {
    Form,
    Input,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../../redux/action/QuanLyPhimAction';
import { GROUPID } from '../../../../util/settings/config';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

export default function AddFilm() {
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
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
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            //Gọi api gửi các giá trị formdata về backend xử lý
            dispatch(themPhimUploadHinhAction(formData));
        }
    })
    const handChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
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
    const handleChangeFile = (e) => {
        //Lấy file ra từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            //Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);//Hình base 64
            }
            //Đem dữ liệu file lưu vào formik
            formik.setFieldValue('hinhAnh', file);
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
            <h3>Thêm mới phim </h3>
            <Form.Item label="Tên phim">
                <Input name="tenPhim" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.tenPhim && formik.errors.tenPhim &&
                <div className="alert alert-danger">{formik.errors.tenPhim}</div>}
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name="trailer" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.trailer && formik.errors.trailer &&
                <div className="alert alert-danger">{formik.errors.trailer}</div>}
            </Form.Item>
            <Form.Item label="Mô tả">
                <TextArea name="moTa" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.moTa && formik.errors.moTa &&
                <div className="alert alert-danger">{formik.errors.moTa}</div>}
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={"DD/MM/YYYY"} onChange={handChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Đang chiếu" >
                <Switch onChange={handleChangeSwitch('dangChieu')} />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
                <Switch onChange={handleChangeSwitch('sapChieu')} />
            </Form.Item>
            <Form.Item label="Hot">
                <Switch onChange={handleChangeSwitch('hot')} />
            </Form.Item>
            <Form.Item label="Đánh Giá">
                <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                <br />
                <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button type='submit' style={{ backgroundColor: 'rgb(125 211 252)' }} className='p-2 text-white'>Thêm Phim</button>
            </Form.Item>
        </Form>
    )
}
