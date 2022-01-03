import React, { Fragment, useEffect } from 'react'
import { Route } from 'react-router'

const UserTemplate = (props) => {
    const {Component,...restProps} = props;

    useEffect(() => {
        window.scrollTo(0,0);
    })


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Component {...propsRoute}/>
        </Fragment>
    }}/>
}


export default UserTemplate;