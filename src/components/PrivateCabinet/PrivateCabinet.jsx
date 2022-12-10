import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {Box, Button, Container} from "@mui/material";
import Header from "../Header";


const PrivateCabinet = () => {

    const { profile } = useSelector( state => state.user);
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['token']);

    if (!profile) {
        navigate('/');
    }

    console.log(profile.user.email)


    return (
        <div>
            <Header/>
            <Container>
                <Box>
                    <span><strong>Ваш</strong> E-mail</span>
                    <span>{profile.user.email}</span>
                </Box>
                <Box>
                    <span><strong>Ваши планирования</strong></span>
                    <Button>перейти</Button>
                </Box>
                {
                    profile.user.is_superuser === "admin"?
                        (<Box>
                            <span></span>
                            <Button>перейти</Button>
                        </Box>)
                        :
                        <></>
                }

            </Container>
        </div>
    )
}

export default PrivateCabinet;