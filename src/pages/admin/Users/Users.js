import React, { Fragment, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Tooltip } from 'antd';
import { Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import Swal from 'sweetalert2';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../redux/action/QuanLyNguoiDungAction';
const { Search } = Input;


export default function Users(props) {
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, [])
    const onSearch = value => {
        // gọi api lấy danh sách phim
        dispatch(layDanhSachNguoiDungAction(value));
    }
    // table
    const columns = [
        // {
        //     title: 'STT',
        //     dataIndex: 'index',
        //     width: '5%'         
        // },
        {
            title: 'Tài Khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => a.taiKhoan - b.taiKhoan,
            sortDirections: ['descend', 'ascend'],
            width: '10%'
        },
        {
            title: 'Mật Khẩu',
            dataIndex: 'matKhau',
            width: '10%'
        },
        {
            title: 'Họ Tên',
            dataIndex: 'hoTen',
            width: '15%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '15%'
        },
        {
            title: 'SĐT',
            dataIndex: 'soDt',
            width: '10%'
        },
        {
            title: 'Thao Tác',
            dataIndex: 'taiKhoan',
            render: (text, users) => {
                return <Fragment>
                    <NavLink key={1} className="mr-2" style={{ fontSize: '20px'}} to={`/admin/users/editUser/${users.taiKhoan}`} ><Tooltip title="Edit User" color='blue'><EditOutlined style={{ color: 'blue' }} /></Tooltip></NavLink>
                    <span style={{ cursor: 'pointer', fontSize: '20px', marginRight: '0.5rem' }} key={2} onClick={() => {
                        //Gọi action xoá
                        if (Swal.fire('Thông Báo!',
                            'Xóa Phim Thành Công',
                            'success')) {
                            // dispatch action xóa
                            dispatch(xoaNguoiDungAction(users.taiKhoan)) 
                        }
                    }}><Tooltip title="Xóa User" color='red'><DeleteOutlined style={{ color: 'red' }} /></Tooltip> </span>
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
    ];
    const data = thongTinNguoiDung;
    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <h3>Quản Người Dùng</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button className='mb-3' onClick={() => {
                    history.push('/admin/users/addUser');
                }}>Thêm Người Dùng</Button>
                <Search className='pb-3' style={{ width: '20%' }} placeholder="Tìm Kiếm Tài Khoản" onSearch={onSearch} enterButton />
            </div>
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"taiKhoan"} />
        </div>
    )

}
