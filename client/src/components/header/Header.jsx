
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background:rgb(115, 56, 252);
    color: black;
`;


const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        margin: 0 30px;         /* Increase horizontal spacing */
        color: #fff;
        text-decoration: none;
        font-weight: 500;       /* Optional: make it bolder */
        font-size: 18px;        /* Optional: increase font size */
    }
`;


const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;