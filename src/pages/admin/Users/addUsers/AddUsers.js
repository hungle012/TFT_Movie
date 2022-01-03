import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button
} from 'antd';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { GROUPID } from '../../../../util/settings/config';
import { layThongTinLoaiNguoiDungAction, themNguoiDungAction } from '../../../../redux/action/QuanLyNguoiDungAction';

export default function AddUsers(props) {
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
            hoTen: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!').matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,'Tài khoản không đúng định dạng !').min(6,'Tài khoản tối thiểu 6 kí tự !').max(20,'Tài khoản tối đa 20 kí tự !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/,'Mật khẩu không đúng định dạng !'),
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng !'),
            soDt: Yup.string().required('SĐT không được bỏ trống !').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,'SĐT không đúng đinh dạng !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !').matches(/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,'Tên không đúng định dạng !'),
        }),
        onSubmit: (values) => {
            // console.log('values', values);
            values.maNhom = GROUPID;
            dispatch(themNguoiDungAction(values));
        }
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layThongTinLoaiNguoiDungAction());
    },[]) 
    const { maLoaiNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const handleChangeMaNguoiDung = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }
    const convertSelectMND = () => {
        return maLoaiNguoiDung?.map((mnd, index) => {
            return { label: mnd.tenLoai, value: mnd.maLoaiNguoiDung }
        })
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
            <h3>Thêm Người Dùng </h3>
            <Form.Item label="Tài Khoản">
                <Input name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.taiKhoan && formik.errors.taiKhoan &&
                <div className="alert alert-danger">{formik.errors.taiKhoan}</div>}
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.matKhau && formik.errors.matKhau &&
                <div className="alert alert-danger">{formik.errors.matKhau}</div>}
            </Form.Item>
            <Form.Item label="Email">
                <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email &&
                <div className="alert alert-danger">{formik.errors.email}</div>}
            </Form.Item>
            <Form.Item label="Số Điện Thoại">
                <Input name="soDt" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.soDt && formik.errors.soDt &&
                <div className="alert alert-danger">{formik.errors.soDt}</div>}
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.hoTen && formik.errors.hoTen &&
                <div className="alert alert-danger">{formik.errors.hoTen}</div>}
            </Form.Item>
            <Form.Item name="maLoaiNguoiDung" label="Mã loại người dùng">
                <Select placeholder="Chọn loại người dùng" options={convertSelectMND()} onChange={handleChangeMaNguoiDung} onBlur={formik.handleBlur} >
                </Select>
            </Form.Item>
            <Form.Item label="Tác vụ">
                <Button htmlType='submit'>Thêm Users</Button>
            </Form.Item>
        </Form>
    )
}
