import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Background = styled(Box)`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg,rgb(15, 182, 227),rgb(140, 68, 212));
`;

const Component = styled(Box)`
    width: 400px;
    background: rgb(16, 179, 220);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(21, 34, 208, 0.37);
    overflow: hidden;
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '40px 0 0'
});

const Wrapper = styled(Box)`
    padding: 30px;
    display: flex;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background:rgb(5, 10, 149);
    color: #fff;
    height: 48px;
    border-radius: 8px;
    font-weight: bold;
    &:hover {
        background:rgb(5, 10, 149);
    }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color:rgb(0, 30, 79);
    height: 48px;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    &:hover {
        background: #f2f2f2;
    }
`;

const Text = styled(Typography)`
    color: #eee;
    font-size: 12px;
    text-align: center;
`;

const Error = styled(Typography)`
    font-size: 12px;
    color:rgb(32, 0, 211);
    line-height: 1;
    font-weight: 600;
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

   const imageURL='https://pngimg.com/uploads/welcome/welcome_PNG8.png';
    useEffect(() => {
        showError('');
    }, [login]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! Please try again later');
        }
    };

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! Please try again later');
        }
    };

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    };

    const textFieldStyles = {
        '& label.Mui-focused': {
            color: '#00008B', // dark blue label on focus
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#00008B', // underline on focus
        }
    };

    return (
        <Background>
            <Component>
                <Box>
                    <Image src={imageURL} alt="blog" />
                    {account === 'login' ? (
                        <Wrapper>
                            <TextField
                                variant="standard"
                                value={login.username}
                                onChange={onValueChange}
                                name="username"
                                label="Enter Username"
                                fullWidth
                                sx={textFieldStyles}
                            />
                            <TextField
                                variant="standard"
                                value={login.password}
                                onChange={onValueChange}
                                name="password"
                                label="Enter Password"
                                type="password"
                                fullWidth
                                sx={textFieldStyles}
                            />
                            {error && <Error>{error}</Error>}
                            <LoginButton variant="contained" onClick={loginUser}>
                                Login
                            </LoginButton>
                            <Text>OR</Text>
                            <SignupButton onClick={toggleSignup}>
                                Create an account
                            </SignupButton>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField
                                variant="standard"
                                onChange={onInputChange}
                                name="name"
                                label="Enter Name"
                                fullWidth
                                sx={textFieldStyles}
                            />
                            <TextField
                                variant="standard"
                                onChange={onInputChange}
                                name="username"
                                label="Enter Username"
                                fullWidth
                                sx={textFieldStyles}
                            />
                            <TextField
                                variant="standard"
                                onChange={onInputChange}
                                name="password"
                                label="Enter Password"
                                type="password"
                                fullWidth
                                sx={textFieldStyles}
                            />
                            <SignupButton onClick={signupUser}>
                                Signup
                            </SignupButton>
                            <Text>OR</Text>
                            <LoginButton variant="contained" onClick={toggleSignup}>
                                Already have an account
                            </LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Background>
    );
};

export default Login;

