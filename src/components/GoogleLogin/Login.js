import { GoogleLogin } from "@leecheuk/react-google-login"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "../../redux/reducer";

function Login() {

    const dispatch = useDispatch();
    const {profile} = useSelector(state => state.store);

    const onSucces = async (res) => {
        console.log("LOGIN SUCCES! Current user: ", res);
        await axios.post(process.env.REACT_APP_BASE_URL + "users/google/", {
            access_token: res.tokenObj.access_token,
            id_token: res.tokenObj.id_token
        })
            .then(response => {
                console.log(response);
                dispatch(setProfile({user: {
                     access: res.key,
                     is_superuser: false,
                     status: "You successfully logged in",
                     refresh: res.key,
                     user_id: "",
                     user_type: "traveler",
                    }}))
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }

    return (
        <div id="singInButton" className="google-btn">
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText=" Войти через Google"
                onSuccess={onSucces}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                className="google-btn"
            />
        </div>
    )
}

export default Login;