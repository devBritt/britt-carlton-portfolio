import { Grid, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const IconLink = styled((props) => (
    <Link
        {...props}
    />
))(({ theme }) => ({
    color: theme.palette.common.white,
    '&:hover, &.Mui-focusVisible': {
        color: theme.palette.info.main
    }
}));

const Footer = () => {
    return (
        <Grid
            container
            spacing={2}
            justifyContent={'space-between'}
            alignItems={'center'}
            id={'app-header'}
            aria-label={'header'}
            px={3}
            py={2}
        >
            <Grid item xs={8} id='footer-icons'>
                <Stack direction={'row'} spacing={3}>
                    <IconLink
                        href='mailto:brittanyrc95@gmail.com' 
                        variant='subtitle2' color={'common.white'}
                    >
                        <FontAwesomeIcon icon={faEnvelope} size={'2x'} />
                    </IconLink>
                    <IconLink
                        href='tel:+14405201590' 
                        variant='subtitle2' color={'common.white'}
                    >
                        <FontAwesomeIcon icon={faPhone} size={'2x'} />
                    </IconLink>
                    <IconLink
                        href='https://github.com/devBritt' 
                        variant='subtitle2' color={'common.white'}
                    >
                        <FontAwesomeIcon icon={faGithub} size={'2x'} />
                    </IconLink>
                    <IconLink
                        href='https://www.linkedin.com/in/brittany-carlton/' 
                        variant='subtitle2' color={'common.white'}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
                    </IconLink>
                </Stack>
            </Grid>
            <Grid item xs={4} id='copyright' align={'right'}>
                <Typography
                    component={'p'}
                    variant={'p'}
                    fontSize={'1rem'}
                >
                    © 2022 Brittany Carlton
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;
