import { GoogleLogout } from '@leecheuk/react-google-login'

function Logout() {

    const onSuccess = () => {
        console.log("Log out successfull!");
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