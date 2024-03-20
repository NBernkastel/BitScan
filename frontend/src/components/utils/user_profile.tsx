import '../css/utils/copy_component.css'
import "../css/utils/user_profile.css"
// @ts-ignore
import profile_user from "../../images/profile-user.png"
import {useNavigate} from "react-router-dom";
function UserProfiler() {

     const navigate = useNavigate();

    return (
        <div className="UserProfiler">
            <img alt={"user_profile_image"} width={50} height={50} src={profile_user} onClick={ event => navigate('/user/')}/>
        </div>
    );
}

export default UserProfiler
