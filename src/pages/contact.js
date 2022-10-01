import { FormControl, Grid, InputLabel, Paper, TextField, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Grid
            container
            id={'contact'}
            aria-label={'contact page content'}
            spacing={3}
            justifyContent={'space-around'}
            alignItems={'center'}
        >
            <Grid
                item
                id={'contact-info'}
                aria-label={"Brittany's contact information"}
            >
                <Typography
                    component={'h2'}
                    variant={'h2'}
                >
                    Contact me at:
                </Typography>
                
                {/* TODO: add contact icons and corresponding details */}
                {/* TODO: GitHub */}
                {/* TODO: Slack */}
                {/* TODO: Email */}
                {/* TODO: Phone */}
            </Grid>

            <Grid item>
                <Typography
                    component={'h2'}
                    variant={'h2'}
                >
                    Shoot me a message:
                </Typography>

                <form id={'contact-form'} aria-label={'the form to send Brittany a message'}>
                    <Grid
                        container
                        spacing={0}
                        alignItems={'center'}
                    >
                        <Grid
                            item
                            xs={12}
                            m={6}
                        >
                            <FormControl>
                                <InputLabel htmlFor={'name-input'}>Full Name</InputLabel>
                                <TextField
                                    id="name-input"
                                    variant="filled"
                                    required
                                    // TODO: add value, onChange
                                />
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            m={6}
                        >
                            <FormControl>
                                <InputLabel htmlFor={'email-input'}>Email Address</InputLabel>
                                <TextField
                                    id="email-input"
                                    variant="filled"
                                    required
                                    // TODO: add value, onChange
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor={'msg-input'}>Go ahead, leave a message!</InputLabel>
                                <TextField
                                    id="msg-input"
                                    variant="filled"
                                    multiline
                                    minRows={5}
                                    maxRows={10}
                                    required
                                    // TODO: add value, onChange
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default Contact;
