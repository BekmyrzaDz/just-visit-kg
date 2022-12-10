import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const authorization = async (user) => {
    let response = null;
    await api.post("users/login/personal/", user)
        .then(res => {
            response = {
                    user_id: res.data.user_id,
                    access_token: res.data.access,
                    is_superuser: res.data.is_superuser,
                    email: res.data.email,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    refresh_token: res.data.refresh,
                    expires_day: res.data.expires_day,
                    avatar: null
                }
        })
        .catch(error => {
            console.log(error);
        })
    return response;
}
