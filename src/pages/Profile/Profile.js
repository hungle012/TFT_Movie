import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Tooltip from '@mui/material/Tooltip';
import { history } from '../../App'
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { doiMatKhauAction, layThongTinTaiKhoanNDAction } from '../../redux/action/QuanLyNguoiDungAction';
import _ from 'lodash';
import Swal from 'sweetalert2';

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

function Profile() {

    const dispatch = useDispatch();

    const { userLogin, thongTinTaiKhoanND } = useSelector(state => state.QuanLyNguoiDungReducer);

    useEffect(() => {
        const action = layThongTinTaiKhoanNDAction();
        dispatch(action)
    }, [])

    // console.log(thongTinTaiKhoanND);

    const [display, setDisplay] = useState('none');
    const [position, setPosition] = useState('0');
    const [rotate, setRotate] = useState('0');

    useEffect(() => {
        // const widthMH = window.screen.width;
        const widthMH = window.innerWidth;
        if (widthMH < 576) {
            setPosition('-50.5%');
            setDisplay('block')
        }
    }, [window.innerWidth])

    const formik = useFormik({
        initialValues: {
            taiKhoan: userLogin.taiKhoan,
            email: userLogin.email,
            soDt: (userLogin.soDT ? userLogin.soDT : '0972349488'),
            maNhom: userLogin.maNhom,
            maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
            hoTen: userLogin.hoTen,
            matKhau: '',
            matKhauCu: '',
            matKhau2: ''
        },
        validationSchema: Yup.object().shape({
            matKhauCu: Yup.string().required('M???t kh???u kh??ng ???????c b??? tr???ng !').trim(),
            matKhau: Yup.string().required('M???t kh???u kh??ng ???????c b??? tr???ng !').trim().min(6, 'M???t t???i thi???u 6 k?? t???').max(32, 'M???t kh???u t???i ??a 32 k?? t???'),
            matKhau2: Yup.string().oneOf([Yup.ref("matKhau")], "M???t kh???u kh??ng kh???p").required('M???t kh???u kh??ng ???????c b??? tr???ng !').trim(),
        }),
        onSubmit: (values) => {
            if (values.matKhauCu !== thongTinTaiKhoanND.matKhau) {
                Swal.fire({
                    icon: 'error',
                    title: 'M???t kh???u hi???n t???i kh??ng ch??nh x??c',
                });
            } else {
                const action = doiMatKhauAction({
                    taiKhoan: values.taiKhoan,
                    matKhau: values.matKhau,
                    email: values.email,
                    soDt: values.soDt,
                    maNhom: values.maNhom,
                    maLoaiNguoiDung: values.maLoaiNguoiDung,
                    hoTen: values.hoTen,
                });
                dispatch(action);
                setDisplay("none");
            }
            // console.log('values', values);
        }
    })

    const renderLichSuDatVe = () => {
        return thongTinTaiKhoanND.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);
            return <tr key={index}>
                <td>{ticket.tenPhim}</td>
                <td>{ticket.ngayDat.slice(0, 10)}</td>
                <td>
                    {seats.tenHeThongRap}
                    <br />
                    {seats.tenCumRap}
                </td>
                <td>
                    {ticket.danhSachGhe.map((ghe, index) => {
                        return <button disabled key={index}>
                            {ghe.tenGhe}
                        </button>
                    })}
                </td>
                <td>{ticket.maVe}</td>
            </tr>
        })
    }

    return (
        <div className="row profile__content">
            <div className="col-lg-2 col-md-3 col-sm-3 col-6 profile--user text-center px-0" style={{ left: position }}>
                <button className='openMenu' onClick={() => {
                    if (position === '0') {
                        setPosition('-50.5%');
                        setRotate('0');
                    } else {
                        setPosition('0');
                        setRotate('180');
                    }
                }}>
                    <i className="fas fa-fighter-jet" style={{ transform: `rotate(${rotate}deg)`, transition: 'all 0.5s' }}></i>
                </button>
                <div className="user--avatar m-auto">
                    <img src="https://i.pravatar.cc/150?img=5" alt="img" />
                </div>
                <div className="user--info mt-3">
                    <h5>{userLogin.taiKhoan}</h5>
                    <div className='d-flex align-items-center pl-2 pl-sm-1 pl-lg-3'>
                        <InfoTwoToneIcon></InfoTwoToneIcon>
                        <p>Th??ng tin chung</p>
                    </div>

                </div>
                <div className="user--nav nav flex-column nav-pills py-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => {
                        if (window.innerWidth < 756) {
                            if (position === '0') {
                                setPosition('-50.5%');
                                setRotate('0');
                            } else {
                                setPosition('0');
                                setRotate('180');
                            }
                        }

                    }}>
                        Th??ng tin c?? nh??n
                    </a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => {
                        if (window.innerWidth < 576) {
                            if (position === '0') {
                                setPosition('-50.5%');
                                setRotate('0');
                            } else {
                                setPosition('0');
                                setRotate('180');
                            }
                        }

                    }}>
                        L???ch s??? ?????t v??
                    </a>
                </div>

            </div>
            <div className="col-lg-2 col-md-3 col-sm-3"></div>
            <div className="col-lg-10 col-md-9 col-sm-9 col-12 profile--info">
                <div className="info--blur">
                    <div className="tab-content" style={{ height: '100%' }} id="v-pills-tabContent">
                        <div className="content--information tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h4>Th??ng tin c?? nh??n</h4>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <p>B???n c?? th??? xem to??n b??? th??ng tin ???? ????ng k?? v?? thay ?????i m???t kh???u t???i ????y!</p>
                                    <div className="content--field">
                                        <div className="field--item">
                                            <CssTextField
                                                label="T??i kho???n"
                                                id="taiKhoan"
                                                fullWidth
                                                variant="outlined"
                                                value={userLogin.taiKhoan ? userLogin.taiKhoan : ''}
                                            />
                                        </div>
                                        <div className="field--item">
                                            <CssTextField
                                                label="Email"
                                                id="email"
                                                fullWidth
                                                variant="outlined"
                                                value={userLogin.email ? userLogin.email : ''}
                                            />
                                        </div>
                                        <div className="field--item">
                                            <CssTextField
                                                label="H??? t??n"
                                                id="hoTen"
                                                fullWidth
                                                variant="outlined"
                                                value={userLogin.hoTen ? userLogin.hoTen : ''}
                                            />
                                        </div>
                                        <div className="field--item">
                                            <CssTextField
                                                label="S??? ??i???n tho???i"
                                                id="soDt"
                                                fullWidth
                                                variant="outlined"
                                                value={userLogin.soDT ? userLogin.soDT : '0972349488'}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 pt-0 pt-sm-2">
                                    <button className="btnPass" onClick={() => {
                                        if (window.innerWidth >= 576) {
                                            if (display === "none") {
                                                setDisplay("block")
                                            } else {
                                                setDisplay("none")
                                            }
                                        }
                                    }}>?????i m???t kh???u</button>
                                    <div className='changePass' style={{ display: `${display}` }} >
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="field--item">
                                                <CssTextField
                                                    label="M???t kh???u hi???n t???i"
                                                    id="matKhauCu"
                                                    fullWidth
                                                    type="password"
                                                    variant="outlined"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    helperText={(formik.touched.matKhauCu) && (formik.errors.matKhauCu) ? formik.errors.matKhauCu : ""}
                                                    error={(formik.touched.matKhauCu) && (formik.errors.matKhauCu) ? true : false}
                                                />
                                            </div>
                                            <div className="field--item">
                                                <CssTextField
                                                    label="M???t kh???u m???i"
                                                    id="matKhau"
                                                    fullWidth
                                                    type="password"
                                                    variant="outlined"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    helperText={(formik.touched.matKhau) && (formik.errors.matKhau) ? formik.errors.matKhau : ""}
                                                    error={(formik.touched.matKhau) && (formik.errors.matKhau) ? true : false}
                                                />
                                            </div>
                                            <div className="field--item">
                                                <CssTextField
                                                    label="Nh???p l???i m???t kh???u m???i"
                                                    id="matKhau2"
                                                    fullWidth
                                                    type="password"
                                                    variant="outlined"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    helperText={(formik.touched.matKhau2) && (formik.errors.matKhau2) ? formik.errors.matKhau2 : ""}
                                                    error={(formik.touched.matKhau2) && (formik.errors.matKhau2) ? true : false}
                                                />
                                            </div>
                                            <button className='btnPass' type='submit'>X??c nh???n</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content--history tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h4>Th??ng tin ?????t v??</h4>
                            <div className="history--table mt-3">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">T??n phim</th>
                                            <th scope="col">Ng??y mua</th>
                                            <th scope="col">R???p chi???u</th>
                                            <th scope="col">S??? gh???</th>
                                            <th scope="col">M?? v??</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderLichSuDatVe()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {

    return (
        <div className='profile container-fluid'>
            <div className="profile__header">
                <div className="header--nav">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="header--logo" to="/">
                            <img src="../img/logo.png" alt="anh_LOGO" className="mb-0" />
                        </NavLink>
                        <div className="header--tiltle">
                            <p>Th??ng tin t??i kho???n</p>
                        </div>
                        <div className="header--back">
                            <Tooltip title="Tho??t" placement="top">
                                <button onClick={() => {
                                    localStorage.removeItem(USER_LOGIN);
                                    localStorage.removeItem(TOKEN);
                                    history.push('/');
                                    window.location.reload();
                                }}>
                                    <ExitToAppIcon fontSize="large"></ExitToAppIcon>
                                </button>
                            </Tooltip>
                        </div>
                    </nav>
                </div>
            </div>
            <Profile {...props} />
        </div>
    )
}