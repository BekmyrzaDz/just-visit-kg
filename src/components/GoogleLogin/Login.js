import { GoogleLogin } from "@leecheuk/react-google-login"

function Login() {

    const onSucces = (res) => {
        console.log("LOGIN SUCCES! Current user: ", res);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }

    return (
        <div id="singInButton">
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText=" Войти через Google"
                onSuccess={onSucces}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;