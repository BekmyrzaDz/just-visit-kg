import regImg from "../../assets/images/Register_Main_Img.svg"
import {Box, Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import axios from "axios";
import * as yup from "yup";
import Login from "../GoogleLogin/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setProfile} from "../../redux/reducer";
import {Link, useNavigate} from "react-router-dom"
import "../../App.css"


const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .required('First name is required'),
    lastName: yup
        .string('Enter your second name')
        .required('Second name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
    checkPassword: yup
        .string('Repeat password above')
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('This field is required')
});


const Registration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {profile} = useSelector(state => state.store);

    useEffect(() => {
        if (profile) navigate('/');
    }, [profile])

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            checkPassword: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            await axios.post(process.env.REACT_APP_BASE_URL + "users/register/traveler/", {
                first_name: values.firstName,
                last_name: values.lastName,
                password: values.password,
                email: values.email,
                phone: values.phone,
            })
                .then(async (res) => {
                    await axios.post(process.env.REACT_APP_BASE_URL + "users/login/personal/", {
                        email: values.email,
                        password: values.password,
                    }).then(response => {
                        console.log(response);
                        dispatch(setProfile({
                            user: {
                                user_id: response.data.user_id,
                                access_token: response.data.access,
                                is_superuser: res.data.is_superuser,
                                email: response.data.email,
                                first_name: response.data.first_name,
                                last_name: response.data.last_name,
                                refresh_token: response.refresh,
                                expires_day: response.expires_day
                            }
                        }));
                        console.log(profile);
                    })
                })
                .catch(err => {
                    console.log(err.response.data);
                });
        },
    });


    return (
        <div style={{
            display: "flex",
        }}>
            <Box sx={{
                width: "50%"
            }}>
                <Link to="/">
                    <img style={{
                        width: "100%"
                    }} src={regImg} alt="JustVisit.kg"/>
                </Link>
            </Box>
            <Box sx={{
                width: "50%",
                justifyContent: "center",
                padding: "30px 60px"
            }}>
                <Box>
                    <h1 style={{
                        color: "#FFFFFF",
                        fontSize: "50px",
                        fontStretch: "ultra-condensed",
                        textAlign: "center",
                        margin: "0"
                    }}>
                        Информационный портал для путешествия по Кыргызстану
                    </h1>
                    <form
                        style={{
                            padding: "0 62px"
                        }}
                        onSubmit={formik.handleSubmit}
                        className="form"
                    >
                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name *"
                            type="text"
                            placeholder=" "
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            className="input"
                            sx={{
                                marginBottom: "20px",
                                borderRadius: "10px",
                                color: "#BAB5B1",
                            }}
                        />
                        <TextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Last Name *"
                            type="text"
                            placeholder=" "
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            className="input"
                            sx={{
                                marginBottom: "20px",
                                borderRadius: "10px",

                            }}
                        />
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="text"
                            placeholder=" "
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            className="input"
                            sx={{
                                marginBottom: "20px",
                                borderRadius: "10px",

                            }}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email *"
                            type="email"
                            placeholder="exaple@gmail.con"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            className="input"
                            sx={{
                                marginBottom: "60px",
                                borderRadius: "10px",
                            }}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password *"
                            type="password"
                            placeholder=" "
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            className="input"
                            sx={{
                                marginBottom: "20px",
                                borderRadius: "10px",
                            }}
                        />
                        <TextField
                            fullWidth
                            id="checkPassword"
                            name="checkPassword"
                            label="Check Password *"
                            type="password"
                            placeholder=" "
                            value={formik.values.checkPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.checkPassword && Boolean(formik.errors.checkPassword)}
                            helperText={formik.touched.checkPassword && formik.errors.checkPassword}
                            className="input"
                            sx={{
                                marginBottom: "20px",
                                borderRadius: "10px",
                            }}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            sx={{
                                background: "#D8AD83",
                                color: "#000000",
                                padding: "10px 16px",
                                marginBottom: "20px",
                                borderRadius: "10px",
                                textTransform: "none",
                            }}
                        >
                            Войти
                        </Button>
                        <Login/>
                    </form>
                </Box>
            </Box>
        </div>
    )
}

export default Registration;
