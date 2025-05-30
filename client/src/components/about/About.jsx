import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub,Email, LinkedIn } from '@mui/icons-material';

const MainContainer = styled(Box)`
    min-height: 100vh;
    background: linear-gradient(to right, #6a11cb, #2575fc); /* Full page gradient */
    color: white;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: white;
`;

const About = () => {
    return (
        <MainContainer>
            <Wrapper>
                <Typography variant="h3">I am Disha.S</Typography>
                <Text variant="h5">
                    I have developed this project so that users can create and view blogs that can help them with DSA, Computer fundamentals,web development,aptitude and to make their resume strong.<br /><br/>
                    The intention is to provide a platform where users can learn and grow together by sharing their experiences.Users can learn from each others mistakes and share helpful tips to other users for internship and placement preparation.<br/><br/>
                    I have developed this project using React and MUI for frontend and Node.js, Express.js and MongoDB for backend development.<br/><br/>
                    I have used JWT for authentication and authorization and bcrypt for hashing passwords in this project.<br/><br/>
                    I have used RESTful APIs for performing CRUD operations of the blogs.<br/><br/>
                    You can view my other projects on GitHub: 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/dishas123" color="inherit" target="_blank">
                            <GitHub />
                        </Link>
                    </Box>
                </Text>
               
            </Wrapper>
        </MainContainer>
    );
};

export default About;
