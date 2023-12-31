import { GoogleLogin } from "@leecheuk/react-google-login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProfile } from "../../redux/reducer";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import styled from "./Login.module.scss";
import { style } from "@mui/system";

function Login() {
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["token"]);

  const onSucces = async (res) => {
    console.log("LOGIN SUCCES! Current user: ", res);
    await axios
      .post(process.env.REACT_APP_BASE_URL + "users/google/", {
        access_token: res.tokenObj.access_token,
      })
      .then((response) => {
        console.log(response);

        setCookie("token", response.data.access_token);
        dispatch(
          setProfile({
            user: {
              user_id: response.data.user["pk"],
              access_token: response.data.access_token,
              is_superuser: false,
              email: response.data.user.email,
              first_name: response.data.user.first_name,
              last_name: response.data.user.last_name,
              refresh_token: response.data.refresh_token,
              expires_day: jwtDecode(response.data.access_token).exp,
            },
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
  };

  return (
    <div id="singInButton" className={styled.google_btn}>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText=" Войти через Google"
        onSuccess={onSucces}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className={styled.google_btn}
      />
    </div>
  );
}

export default Login;
