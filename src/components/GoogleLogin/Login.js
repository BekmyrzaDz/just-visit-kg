import { GoogleLogin } from "@leecheuk/react-google-login"
import styled from "styled-components";


const GoogleBtnComponent = styled(GoogleLogin)(() => ({

}))

function Login() {

    const onSucces = (res) => {
        console.log("LOGIN SUCCES! Current user: ", res);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }

    return (
        <div id="singInButton" className="google-btn">
            <GoogleBtnComponent
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