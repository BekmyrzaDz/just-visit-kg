import { GoogleLogout } from '@leecheuk/react-google-login'
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "../../redux/reducer";

function Logout() {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.store);

    const onSuccess = () => {
        console.log("Log out successfull!");
        dispatch(setProfile(null))
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;