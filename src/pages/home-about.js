import { Grid, Typography } from "@mui/material";

const About = () => {
    return (
        <article>
            <Grid
                container
                spacing={2}
                id={'about'}
                aria-label={'homepage and about Brittany Carlton'}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                <Grid
                    item
                    id={'developer-name'}
                    aria-label={"the developer's name"}
                >
                    <Typography
                        component={'h1'}
                        variant={'h1'}
                    >
                        Brittany Carlton
                    </Typography>
                </Grid>

                <Grid
                    item
                    id={'developer-roles'}
                    aria-label={"the developer's job roles"}
                >
                    <Typography
                        component={'h2'}
                        variant={'h4'}
                    >
                        Full Stack Developer
                    </Typography>
                </Grid>
            </Grid>
            
            <Typography
                component={'p'}
                variant={'body1'}
                align={'left'}
                id={'about-text'}
                aria-label={'about Brittany text'}
            >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </article>
    );
}

export default About;
