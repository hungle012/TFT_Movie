import Axios from "axios";
import { CYBER_TOKEN, DOMAIN, TOKEN } from "../util/settings/config";

export class baseServices {
    //put json về phía backend
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:model,
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //JWT
        }) 
    }

    post = (url, model) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:model,
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //JWT
        }) 
    }


    get = (url) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + (localStorage.getItem(TOKEN)),'TokenCybersoft': CYBER_TOKEN} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}