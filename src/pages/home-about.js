import { Stack, Typography } from "@mui/material";

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Stack>
    );
}

export default About;
