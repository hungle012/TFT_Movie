import React, { useEffect } from 'react';
import { Form, Button, Select } from 'antd';
import { useFormik } from 'formik';
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinCumRapAction, layThongTinHeThongRapAction, taoLichChieuAction } from '../../../../redux/action/QuanLyRapAction';

export default function Showtime(props) {
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: (values) => {
            console.log('values',values);
            dispatch(taoLichChieuAction(values));
        }
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layThongTinHeThongRapAction());
    },[]) 
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const {thongTinCumRap} = useSelector(state => state.QuanLyRapReducer);
    console.log(heThongRapChieu);
    const handleChangeHeThongRap = (value) => {
        dispatch(layThongTinCumRapAction(value));
    }

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap', value)
    }

    const onOk = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onChangeDate = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onchangeInputNumber = (value) => {
        formik.setFieldValue('giaVe', value)
    }

    const convertSelectHTR = () => {
        return heThongRapChieu?.map((htr, index) => {
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
        })
    }

    let movie = {};
    if (localStorage.getItem('filmParams')) {
        movie = JSON.parse(localStorage.getItem('filmParams'));
    }

    return (
        <div className="container">
            <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'nowrap ' }}>
                <div className="title">
                    <h3 className="text-2xl">Tạo lịch chiếu - {movie.tenPhim}</h3>
                    <img src={movie.hinhAnh} alt='...' width={300} height={300} />
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onSubmitCapture={formik.handleSubmit}
                    style={{ width: '85%', paddingTop: '50px' }}
                >
                    <Form.Item label="Hệ thống rạp">
                        <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                    </Form.Item>
                    <Form.Item label="Cụm rạp">
                        <Select options={thongTinCumRap?.map((cumRap, index) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))} placeholder="Chọn cụm rạp" onChange={handleChangeCumRap} />
                    </Form.Item>

                    <Form.Item label="Ngày chiếu giờ chiếu">
                        <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />
                    </Form.Item>

                    <Form.Item label="Giá vé">
                        <InputNumber min={75000} max={150000} onChange={onchangeInputNumber} />
                    </Form.Item>
                    <Form.Item label="Chức năng">
                        <Button htmlType="submit">Tạo lịch chiếu</Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
