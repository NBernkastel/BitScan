import {useParams} from "react-router-dom";
import "../pages/css/log.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useVisitorData} from "@fingerprintjs/fingerprintjs-pro-react";


function LogPage() {

    const {SignType} = useParams()

    const [UserIn, SetUserIn] = useState({"login": "", "password": "", "finger_print": ""})
    const [UserUp, SetUserUp] = useState({"username": "", "email": "", "password": ""})
    const {isLoading, error, data, getData} = useVisitorData(
        {extendedResult: true},
        {immediate: true}
    )

    function reg_user() {
        axios.post("http://localhost:8000/auth/register", UserUp)
            .then(res => {
            })
    }

    function login_user() {
        getData({ignoreCache: true}).then(r => {
            SetUserIn(prev => {
                return {...prev, finger_print: r.visitorId}
            })
        }).then(() => {
            axios.post("http://localhost:8000/auth/login", UserIn).then(r => {})
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
                              value={UserIn.login}
                              onChange={e =>
                                  SetUserIn(prev => {
                                      return {...prev, login: e.target.value}
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
                {SignType === "up" && <button className={"LogSubmit"} onClick={reg_user}>submit</button>}
                {SignType === "in" && <button className={"LogSubmit"} onClick={login_user}>submit</button>}
            </div>
        </div>

    );
}

export default LogPage
