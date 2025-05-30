import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const GradientBackground = styled(Box)`
    min-height: 100vh;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 20px;
`;

const Wrapper = styled(Box)`
    max-width: 700px;
    padding: 20px;
`;

const Title = styled(Typography)`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.4;
    color: white;
`;

const Text = styled(Typography)`
    color: #e1bee7;
    margin-top: 20px;
`;

const Contact = () => {
    return (
        <GradientBackground>
            <Wrapper>
                <Title>
                    For any feedback or suggestions you can get in touch with me on LinkedIn or Gmail:
                </Title>    
                <Text variant="h6">
                    Reach out to me on
                    <Link 
                        href="https://www.linkedin.com/in/disha-s-a60b70248/" 
                        color="inherit" 
                        target="_blank" 
                        sx={{ mx: 1 }}
                    >
                        <LinkedIn />
                    </Link>
                    or send me an Email 
                    <Link 
                        href="mailto:codeforinterview@gmail.com?Subject=This is a subject" 
                        target="_blank" 
                        color="inherit"
                        sx={{ mx: 1 }}
                    >
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </GradientBackground>
    );
};

export default Contact;
