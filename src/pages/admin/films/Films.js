import React, { Fragment, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Tooltip } from 'antd';
import { Input } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhimDangChieuAction, xoaPhimAction } from '../../../redux/action/QuanLyPhimAction';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import Swal from 'sweetalert2';
const { Search } = Input;


export default function Films(props) { 
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimDangChieuAction());
    }, [])
    const onSearch = value => {
        // console.log(value);
        // gọi api lấy danh sách phim
        dispatch(layDanhSachPhimDangChieuAction(value));
    }
    // table
    const columns = [
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            render: (text, movie, index) => {
                return <Fragment>
                    <img src={movie.hinhAnh} alt={movie.tenPhim} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                </Fragment>
            },
            width: '15%'
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, movie) => {
                return <Fragment>
                    {movie.moTa.length > 50 ? movie.moTa.substr(0, 50) + ' ...' : movie.moTa}
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
        {
            title: 'Hành động',
            dataIndex: 'maPhim',
            render: (text, movie) => {
                return <Fragment>
                    <NavLink key={1} className="mr-2" style={{ fontSize: '20px' }} to={`/admin/films/editFilm/${movie.maPhim}`}><Tooltip title="Edit Film" color='blue'><EditOutlined style={{ color: 'blue' }} /></Tooltip></NavLink>
                    <span style={{ cursor: 'pointer', fontSize: '20px', marginRight: '0.5rem' }} key={2} onClick={() => {
                        //Gọi action xoá
                        if (Swal.fire('Thông Báo!',
                            'Xóa Phim Thành Công',
                            'error')) {
                            dispatch(xoaPhimAction(movie.maPhim));
                        }
                    }}><Tooltip title="Xóa Film" color="red"><DeleteOutlined style={{ color: 'red' }} /></Tooltip></span>
                    <NavLink key={3} className="mr-2" style={{ fontSize: '20px' }} to={`/admin/films/showtime/${movie.maPhim}/${movie.tenPhim}`} onClick={() => {
                        localStorage.setItem('filmParams', JSON.stringify(movie));
                    }}><Tooltip title="Thêm Lịch Chiếu" color="green"><CalendarOutlined style={{ color: 'green' }} /></Tooltip> </NavLink>
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
    ];
    const data = arrFilm;
    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <h3>Quản Lý Phim</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button className='mb-3' onClick={() => {
                    history.push('/admin/films/addFilm');
                }}>Thêm Phim</Button>
                <Search className='pb-3' style={{ width: '20%' }} placeholder="Tìm Kiếm Phim" onSearch={onSearch} enterButton />
            </div>
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
        </div>
    )

}
