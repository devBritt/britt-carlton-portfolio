import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const NavLink = styled((props) => (
    <Link
        {...props}
    />
))(({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover, &.Mui-focusVisible': {
        color: theme.palette.primary.light
    }
}));

const About = () => {
    return (
        <Stack
            align={'center'}
            alignItems={'center'}
        >
            <Typography
                component={'h1'}
                variant={'h1'}
                className={'linear-wipe'}
            >
                Brittany Carlton
            </Typography>
            <Typography
                component={'h2'}
                variant={'subtitle1'}
                mb={3}
                sx={{ fontSize: '1.75rem', color: '#b1bdc8' }}
            >
                Full-Stack Developer | Web Designer
            </Typography>
            <Typography
                component={'p'}
                variant={'body1'}
                id={'about-text'}
                aria-label={'about Brittany text'}
                px={5}
            >
                    Hi there and welcome! I'm a full-stack web developer and web designer who loves working on creative projects, learning, and solving problems. In November of 2022, I will complete the Case Western Reserve Coding Bootcamp and earn my certificate and full-stack web development. In 2020, I graduated summa cum laude from Franklin University and earned a Bachelor's in Interactive Media Design. Would you like to work with me? Head to my&nbsp;
                    <NavLink
                        component={RouterLink}
                        variant={'p'}
                        to={'/contact'}
                        underline={'none'}
                    >
                        contact
                    </NavLink>&nbsp;page!
            </Typography>
        </Stack>
    );
}

export default About;
