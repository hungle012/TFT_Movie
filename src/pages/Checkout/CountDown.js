import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import {history} from '../../App'

const CountDown = (props) => {
    const { Minute = 0, Seconds = 0 } = props;
    const [minutes, setMinutes] = useState(Minute);
    const [seconds, setSeconds] = useState(Seconds);
    useEffect(() => {
        let countDown = setInterval(() => {

            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(countDown);
                    Swal.fire({
                        icon: 'error',
                        title: 'Hết thời gian rồi ',
                        text: 'Bạn có muốn đặt lại vé không ?',
                        showDenyButton: true,
                        confirmButtonText: 'Tiếp tục',
                        denyButtonText: 'Trở về trang chủ',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload(false);
                        } else if (result.isDenied) {
                            history.push('/');
                        }
                    })
                }
            }

        }, 1000)
        return () => {
            clearInterval(countDown);
        };
    });

    return (
        <div>
            <h2>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
        </div>
    )
}

export default CountDown;