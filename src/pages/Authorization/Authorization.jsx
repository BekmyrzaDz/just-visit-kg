import * as yup from 'yup';
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";
import Login from "../../components/GoogleLogin/Login";
import axios from "axios";
import logo from "../../assets/images/Main-Logo.svg"


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Authorization = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // await axios.post("http://just-visit.herokuapp.com/users/register/traveler/", {
            //     first_name:"Али",
            //     last_name:"Алиев",
            //     password:"Limon_123_321",
            //     email:"ali.aliev.27.11.02@gmail.com",
            //     phone:"+996552271102"
            // });
            await axios.post("http://just-visit.herokuapp.com/login/personal/", {
                email: values.email,
                password: values.password,
            }).then(res => {
                console.log(res);
            })
        },
    });
    return (
        <div className="auth">
            <h3 className="title">JustVisit.kg</h3>
            <div>
                <img src={logo} alt="JustVisit.kg"/>
            </div>
            <form onSubmit={formik.handleSubmit} className="form">
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="exaple@gmail.con"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    className="input"
                    sx={{
                        marginBottom: "20px",
                        borderRadius: "10px",
                    }}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="examp@gmail.com"
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
        </div>
    )
}
//'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
export default Authorization;

