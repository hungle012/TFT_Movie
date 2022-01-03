import { TextField, Button, IconButton, InputLabel, FormControl, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { dangKyAction } from '../../../../redux/action/QuanLyNguoiDungAction';
import { useDispatch } from 'react-redux';


const CssTextField = styled(TextField)({
    "& label": {
        color: "#2196f4"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#2196f4",
            borderWidth: 5
        },
        "&:hover fieldset": {
            borderColor: "#2196f4"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#2196f4",
            borderWidth: 5
        }
    }
});

const CssSelect = styled(FormControl)({
    'label': {
        color: '#2196f4',
    },
    '& .MuiOutlinedInput-root': {
        "& fieldset": {
            borderColor: "#2196f4",
            borderWidth: 5
        },
        "&:hover fieldset": {
            borderColor: "#2196f4"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#2196f4",
            borderWidth: 5
        }
    }
});


export default function Register(props) {
    const [group, setGroup] = useState('GP01');

    const selectGroup = (event) => {
        setGroup(event.target.value);
    };

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !').trim(),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').trim().min(6, 'Mật tối thiểu 6 ký tự').max(32, 'Mật khẩu tối đa 32 ký tự'),
            email: Yup.string().required('Email không được bỏ trống !').trim().email('Email không đúng định dạng'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống !').trim().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,'Số điện thoại không đúng định dạng'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !').trim(),
        }),
        onSubmit: (values) => {
            const action = dangKyAction(values);
            dispatch(action)
            // console.log('values', values);
        }
    })

    return (
        <div className="register">
            <div className="register__content col-12 col-sm-7 mx-auto px-5">
                <Link to="/" >
                    <IconButton className="register__close nav-link" aria-label="delete" color="error" size="large">
                        <CancelIcon fontSize="large" />
                    </IconButton>
                </Link>
                <div className="register__logo">
                    <img src="./img/logo.png" alt="" />
                </div>
                <div className="register__form">
                    <p className="text-center">Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="register__field row">
                            <div className="field--col col-12 col-sm-6">
                                <div className="field--row">
                                    <CssTextField
                                        label="Tài khoản"
                                        id="taiKhoan"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.touched.taiKhoan) && (formik.errors.taiKhoan) ? formik.errors.taiKhoan : ""}
                                        error={(formik.touched.taiKhoan) && (formik.errors.taiKhoan) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Email"
                                        id="email"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.touched.email) && (formik.errors.email) ? formik.errors.email : ""}
                                        error={(formik.touched.email) && (formik.errors.email) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Họ tên"
                                        id="hoTen"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.touched.hoTen) && (formik.errors.hoTen) ? formik.errors.hoTen : ""}
                                        error={(formik.touched.hoTen) && (formik.errors.hoTen) ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="field--col col-12 col-sm-6">
                                <div className="field--row">
                                    <CssTextField
                                        label="Mật khẩu"
                                        id="matKhau"
                                        type="password"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.touched.matKhau) && (formik.errors.matKhau) ? formik.errors.matKhau : ""}
                                        error={(formik.touched.matKhau) && (formik.errors.matKhau) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Số điện thoại"
                                        id="soDt"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.touched.soDt) && (formik.errors.soDt) ? formik.errors.soDt : ""}
                                        error={(formik.touched.soDt) && (formik.errors.soDt) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssSelect
                                        fullWidth
                                    >
                                        <InputLabel id="maNhomLabel">Mã nhóm</InputLabel>
                                        <Select
                                            labelId="maNhomLabel"
                                            id="maNhom"
                                            value={group}
                                            label="Mã nhóm"
                                            onChange={selectGroup}
                                        >
                                            <MenuItem value={"GP01"}>GP01</MenuItem>
                                            <MenuItem value={"GP02"}>GP02</MenuItem>
                                            <MenuItem value={"GP03"}>GP03</MenuItem>
                                            <MenuItem value={"GP04"}>GP04</MenuItem>
                                        </Select>
                                         <FormHelperText>{(formik.touched.maNhom) && (formik.errors.maNhom) ? formik.errors.maNhom : ""}</FormHelperText>
                                    </CssSelect>
                                </div>



                            </div>
                        </div>
                        <div className="register__button">
                            <Link to="/login"  className="button--login">
                                <Button variant="contained">ĐĂNG NHẬP</Button>
                            </Link>
                            <Button type="submit" variant="contained">ĐĂNG KÝ</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
