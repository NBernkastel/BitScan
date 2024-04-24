import {useParams} from "react-router-dom";
import "../pages/css/log.css"
import {MouseEvent, useState} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

function LogPage() {

    const {SignType} = useParams()

    const [UserIn, SetUserIn] = useState({"username": "", "password": ""})
    const [UserUp, SetUserUp] = useState({"username": "", "email": "", "password": ""})

    function reg_user(e: MouseEvent) {
        e.preventDefault();
        axios.post("http://localhost:8000/auth/register", UserUp)
            .then(res => {
            })
    }

    function login_user(e: MouseEvent) {
        e.preventDefault();
        axios.post("http://localhost:8000/auth/token", new URLSearchParams(UserIn), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => {
                const cookies = new Cookies();
                cookies.set('refreshToken', res.data.refresh_token)
                cookies.set('access_token', res.data.refresh_token)
            })
    }

    return (
        <div className="Log">
            <div className="LogCard">
                {SignType === "up" && <div className="LogName">SIGN UP</div>}
                {SignType === "in" && <div className="LogName">SIGN IN</div>}
                {SignType === "up" &&
                    <input className={"LogUsername"}
                           placeholder={"Username"}
                           value={UserUp.username}
                           onChange={e =>
                               SetUserUp(prev => {
                                   return {...prev, username: e.target.value}
                               })}/>}
                {SignType === "in"
                    && <input className={"LogUsername"}
                              placeholder={"Username or email"}
                              value={UserIn.username}
                              onChange={e =>
                                  SetUserIn(prev => {
                                      return {...prev, username: e.target.value}
                                  })}/>}
                {SignType === "up" && <div className={"LogEmail"}>
                    <input
                        className={"LogEmailInput"}
                        placeholder={"Email"}
                        value={UserUp.email}
                        onChange={e =>
                            SetUserUp(prev => {
                                return {...prev, email: e.target.value}
                            })}/>
                    <button className={"EmailSendButton"}>Send code</button>
                </div>}
                <input
                    className={"LogPassword"}
                    placeholder={"Password"}
                    value={UserIn.password}
                    onChange={e =>
                        SetUserIn(prev => {
                            return {...prev, password: e.target.value}
                        })}/>
                {SignType === "up" &&
                    <input
                        className={"LogRepeatPassword"}
                        placeholder={"Repeat Password"}
                        value={UserUp.password}
                        onChange={e =>
                            SetUserUp(prev => {
                                return {...prev, password: e.target.value}
                            })}/>}
                {SignType === "up" && <button type="submit" className={"LogSubmit"} onClick={e => reg_user(e)}>submit</button>}
                {SignType === "in" &&
                    <button type="submit" className={"LogSubmit"} onClick={e => login_user(e)}>submit</button>}
            </div>
        </div>

    );
}

export default LogPage
