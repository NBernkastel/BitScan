import "../css/user/utils.css"
import {useState} from "react";

function Utils() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="UserUtils">
            <span className={"UserUtilsTitle"}>Utils</span>
            <div className={"UserUtilsBody"}>
                <div className={"UserUtilsLine"}>
                    <label className="UserUtilscheckbox-container">
                        Subscribe for price updates
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={toggleCheckbox}
                        />
                        <span className="UserUtilscheckmark"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Utils
