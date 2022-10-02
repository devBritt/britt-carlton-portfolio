import { Grid, Typography } from "@mui/material";
import { Timeline } from "@mui/lab";

const Resume = () => {
    return (
        <Grid container id={'resume'}>
            <Grid
                item
                id={'skills'}
                xs={12}
                md={6}
            >
                <Typography
                    component={'h2'}
                    variant={'h2'}
                >
                    The Skills
                </Typography>
                <Grid container id={'skill-cards'}>
                {/* TODO: add skill cards */}
                {/* TODO: languages card */}
                {/* TODO: frontend card */}
                {/* TODO: backend card */}
                {/* TODO: tools card */}
                </Grid>
            </Grid>

            <Grid
                item
                id={'education'}
                xs={12}
                md={6}
            >
                <Typography
                    component={'h2'}
                    variant={'h2'}
                >
                    The Journey
                </Typography>
                <Timeline>
                    {/* TODO: add timeline nodes for education */}
                </Timeline>
            </Grid>
        </Grid>
    );
}

export default Resume;
