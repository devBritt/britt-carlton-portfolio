import { Button, FormControl, Grid, FormHelperText, TextField, Typography, Stack, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import SendIcon from "@mui/icons-material/SendRounded";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DialpadRoundedIcon from '@mui/icons-material/DialpadRounded';

import { useState } from 'react';

const CustomTextField = styled((props) => (
    <TextField {...props} />
  ))(() => ({
    '& .MuiFilledInput-root': {
      borderBottom: '1px solid #ebedef',
      overflow: 'hidden',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      background: 'rgba(235, 237, 239, 0.1)'
    },
    '& .MuiInputBase-input': {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8
    }
  }));

const Contact = () => {
    // state for name-input
    const [nameInput, setNameInput] = useState('');

    // state for email-input
    const [emailInput, setEmailInput] = useState('');

    // state for msg-input
    const [msgInput, setMsgInput] = useState('');

    return (
        <Grid
            container
            id={'contact'}
            aria-label={'contact page content'}
            spacing={3}
        >
            {/* Contact info column */}
            <Grid
                item
                id={'contact-info'}
                aria-label={"Brittany's contact information"}
                xs={12}
                md={6}
            >
                <Typography
                    component={'h2'}
                    variant={'h3'}
                    gutterBottom
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
                    variant={'h3'}
                    gutterBottom
                >
                    Shoot me a message:
                </Typography>

                <form id={'contact-form'} aria-label={'the form to send Brittany a message'}>
                    <Grid
                        container
                        spacing={3}
                        alignItems={'center'}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            mx={0}
                            mb={0}
                        >
                            <FormControl fullWidth>
                                <CustomTextField
                                    id="name-input"
                                    variant="filled"
                                    placeholder="Jane Doe"
                                    required
                                    onChange={(e) => {
                                        setNameInput(e.target.value);
                                    }}
                                />
                                <FormHelperText>First and Last Name</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            mx={0}
                        >
                            <FormControl fullWidth>
                                <CustomTextField
                                    id="email-input"
                                    variant="filled"
                                    placeholder="myname@email.com"
                                    required
                                    onChange={(e) => {
                                        setEmailInput(e.target.value);
                                    }}
                                />
                                <FormHelperText>Email Address</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <CustomTextField
                                    id="msg-input"
                                    variant="filled"
                                    placeholder="This form is currently in development. If you'd like to get in touch, please use one of the options on the left. Thanks!"
                                    multiline
                                    minRows={5}
                                    maxRows={8}
                                    required
                                    onChange={(e) => {
                                        setMsgInput(e.target.value);
                                    }}
                                />
                                <FormHelperText>Your Message to Brittany</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={6} justifyContent={'flex-start'}>
                        <Button variant='contained' endIcon={<SendIcon /> }>Send </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default Contact;
