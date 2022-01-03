import { useState } from "react";
import { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";

const CheckoutTemplate = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
    })

    const [state,setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    // console.log('state',state)
    useEffect(()=>{ 
        window.onload = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.onresize = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        // return () => {
        //     window.removeEventListener('onload');
        //     window.removeEventListener('onresize');
        // }
    },[window.innerWidth, window.innerHeight])
    let Component = props.Component;
    if(state.width <= 695 && props.mobileComponent) {
        Component = props.mobileComponent;
    }


    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />
    }


    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }} />
}

export default CheckoutTemplate;