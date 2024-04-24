import axios from "axios";
import Cookies from "universal-cookie";

export function refresh(){
        axios.post("http://localhost:8000/auth/refresh")
            .then(res => {
                const cookies = new Cookies()
                console.log(res.data)
                cookies.set('access_token', res.data.refresh_token)
            })
}