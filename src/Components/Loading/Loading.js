import React, { Fragment } from 'react'
import { useSelector } from "react-redux";

export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducers)

    return (
        <Fragment>
            {isLoading ?
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : ''
            }
        </Fragment>

    )
}
