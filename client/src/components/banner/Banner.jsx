import { styled, Box, Typography, GlobalStyles } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
  background-image: url('https://i.pinimg.com/736x/39/b1/32/39b132a7b8ebb9acacacb7d2cd6ee16e.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* Optional fallback color while image loads */
    background-color: #2a62d1;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    return (
        <>
            <GlobalStyles
                styles={{
                    html: { height: '100%' },
                    body: {
                        minHeight: '100vh',
                        margin: 0,
                        padding: 0,
                        background: 'linear-gradient(90deg,rgb(61, 3, 236),rgb(90, 0, 155))',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    },
                }}
            />
            <Image>
                <Heading>Welcome to CodeCraft Chronicles!</Heading>
            </Image>
        </>
    );
};

export default Banner;
