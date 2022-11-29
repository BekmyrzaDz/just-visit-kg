import { GoogleLogout } from '@leecheuk/react-google-login'
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "../../redux/reducer";
import {useCookies} from "react-cookie";

function Logout() {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.store);
    const [cookie, setCookie] = useCookies(['token']);

    const onSuccess = () => {
        console.log("Log out successfull!");
        dispatch(setProfile(null))
        setCookie('token', null);
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