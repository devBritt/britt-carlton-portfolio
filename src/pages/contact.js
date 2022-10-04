import { Button, FormControl, Grid, InputLabel, TextField, Typography, Stack, Link } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DialpadRoundedIcon from '@mui/icons-material/DialpadRounded';

const Contact = () => {
    return (
        <Grid
            container
            id={'contact'}
            aria-label={'contact page content'}
            spacing={3}
        >
            {/* Contact info column */}
            <Grid
                container
                item
                id={'contact-info'}
                aria-label={"Brittany's contact information"}
                xs={12}
                md={6}
            >
                <Typography
                    component={'h2'}
                    variant={'h2'}
                >
                    Contact me at:
                </Typography>
                
                <Stack spacing={3}>
                    <Stack direction={'row'} spacing={2}>
                        <EmailRoundedIcon></EmailRoundedIcon>
                        <Link href={'mailto:brittanyrc95@gmail.com'} underline={'none'}>brittanyrc95@gmail.com</Link>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <DialpadRoundedIcon></DialpadRoundedIcon>
                        <Link href={'tel:+14405201590'} underline={'none'}>440.520.1590</Link>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img height="32" width="32" src="https://unpkg.com/simple-icons@v7/icons/github.svg" />
                        <Link href={'https://github.com/devBritt'} underline={'none'}>/devBritt</Link>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img height="32" width="32" src="https://unpkg.com/simple-icons@v7/icons/linkedin.svg" />
                        <Link href={'https://www.linkedin.com/in/brittany-carlton/'} underline={'none'}>/brittany-carlton</Link>
                    </Stack>
                </Stack>
            </Grid>
            {/* Contact form column */}
            <Grid
                item
                id={'form-container'}
                xs={12}
                md={6}
            >
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
                            mx={0}
                            mb={0}
                        >
                            <FormControl fullWidth>
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
                            mx={0}
                        >
                            <FormControl fullWidth>
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
                            <FormControl fullWidth>
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
                    <Grid container item xs={12} m={6} justifyContent={'flex-start'}>
                        <Button variant='contained' endIcon={<SendIcon /> }>Send </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default Contact;
