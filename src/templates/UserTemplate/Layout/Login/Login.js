import { Checkbox, FormControlLabel, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../../../redux/action/QuanLyNguoiDungAction';


const TextFieldCustom = styled(TextField)({
    '& input + fieldset': {
        borderColor: '#2196f4',
        borderWidth: 5,
    },
    '& input:valid:hover + fieldset': {
        borderColor: '#2196f4',
        borderWidth: 5,
    },
    '& input:invalid:hover + fieldset': {
        borderColor: '#2196f4',
        borderWidth: 5,
    },
    '& input:valid:focus + fieldset': {
        borderWidth: 5,
        borderColor: '#2196f4',
    },
    '& input:invalid:focus + fieldset': {
        borderWidth: 5,
        borderColor: '#2196f4'
    },
    '& label': {
        color: '#2196f4',
    },
    '& label.Mui-focused ': {
        color: '#2196f4',
    }
});
const CssTextField = styled(TextField)({
    "& label": {
        color: "#2196f4"
    },
    "& label.Mui-focused": {
        color: "gr#2196f4een"
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

export default function Login() {

    const dispatch = useDispatch();

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    // console.log("user", userLogin);

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !').trim(),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').trim().min(4, 'Mật tối thiểu 4 ký tự').max(32, 'Mật khẩu tối đa 32 ký tự'),

        }),
        onSubmit: (values) => {
            const action = dangNhapAction(values);
            dispatch(action)
            // console.log('values', values);
        }
    })

    return (
        <div className="login">
            <div className="login__content mx-auto px-5">
                <Link to="/" >
                    <IconButton className="login__close nav-link" aria-label="delete" color="error" size="large">
                        <CancelIcon fontSize="large" />
                    </IconButton>
                </Link>
                <div className="login__logo">
                    <Link to="/">
                        <img src="./img/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="login__form pt-4">
                    <p className="text-center">Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="login__acc login__field">
                            <TextFieldCustom
                                label="Tài khoản"
                                id="taiKhoan"
                                name="taiKhoan"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={(formik.touched.taiKhoan) && (formik.errors.taiKhoan) ? formik.errors.taiKhoan : ""}
                                error={(formik.touched.taiKhoan) && (formik.errors.taiKhoan) ? true : false}
                            />
                        </div>
                        <div className="login__pass login__field">
                            <CssTextField
                                label="Mật khẩu"
                                id="matKhau"
                                name="matKhau"
                                type="password"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={(formik.touched.matKhau) && (formik.errors.matKhau) ? formik.errors.matKhau : ""}
                                error={(formik.touched.matKhau) && (formik.errors.matKhau) ? true : false}
                            />
                        </div>
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                        <div className="login__button">
                            <Button type="submit" variant="contained">ĐĂNG NHẬP</Button>
                            <Link to="/register" className="button--register">
                                <Button variant="contained">ĐĂNG KÝ</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}
