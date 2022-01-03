import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button
} from 'antd';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { GROUPID } from '../../../../util/settings/config';
import { layThongTinNguoiDungAction, suaNguoiDungAction } from '../../../../redux/action/QuanLyNguoiDungAction';

export default function EditUsers(props) {
    const dispatch = useDispatch();
    const { chiTietNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    useEffect(() => {
        let { taiKhoan } = props.match.params;
        dispatch(layThongTinNguoiDungAction(taiKhoan));
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: chiTietNguoiDung.taiKhoan,
            matKhau: chiTietNguoiDung.matKhau,
            email: chiTietNguoiDung.email,
            soDt: chiTietNguoiDung.soDT,
            maNhom: chiTietNguoiDung.GROUPID,
            maLoaiNguoiDung: chiTietNguoiDung.maLoaiNguoiDung,
            hoTen: chiTietNguoiDung.hoTen
        },
        validationSchema: Yup.object().shape({
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/,'Mật khẩu không đúng định dạng !'),
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng !'),
            soDt: Yup.string().required('SĐT không được bỏ trống !').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,'SĐT không đúng đinh dạng !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !').matches(/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,'Tên không đúng định dạng !'),
        }),
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUPID;
            // gọi dự liệu gửi các giá trị từ formdata về backend xử lý
            dispatch(suaNguoiDungAction(values));
        }
    })
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
            <h3>Cập Nhật Người Dùng </h3>
            <Form.Item label="Tài Khoản">
                <Input name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.taiKhoan} disabled/>
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
                {formik.touched.matKhau && formik.errors.matKhau &&
                <div className="alert alert-danger">{formik.errors.matKhau}</div>}
            </Form.Item>
            <Form.Item label="Email">
                <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled/>
                {formik.touched.email && formik.errors.email &&
                <div className="alert alert-danger">{formik.errors.email}</div>}
            </Form.Item>
            <Form.Item label="Số Điện Thoại">
                <Input name="soDt" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.soDt} />
                {formik.touched.soDt && formik.errors.soDt &&
                <div className="alert alert-danger">{formik.errors.soDt}</div>}
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.hoTen} />
                {formik.touched.hoTen && formik.errors.hoTen &&
                <div className="alert alert-danger">{formik.errors.hoTen}</div>}
            </Form.Item>
            <Form.Item name="maLoaiNguoiDung" label="Mã loại người dùng">
                <Select placeholder="Chọn loại người dùng" onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} onBlur={formik.handleBlur} disabled >
                </Select>
            </Form.Item>
            <Form.Item label="Tác vụ">
                <Button htmlType='submit'>Edit Users</Button>
            </Form.Item>
        </Form>
    )
}
