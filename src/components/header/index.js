import { Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <Grid
            container
            spacing={2}
            justifyContent={'space-between'}
            alignItems={'center'}
            id={'app-header'}
            aria-label={'header'}
        >
            <Grid item xs>
                <Typography
                    variant={"h6"}
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    }}
                >
                    <Link
                        component={RouterLink}
                        to={'/'}
                        underline={'none'}
                    >
                        Brittany Carlton
                    </Link>
                </Typography>
            </Grid>
            
            <Grid
                container
                item
                xs={'auto'}
                id={'nav'}
                aria-label={'navigation'}
            >
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        }}
                    >
                        <Link
                            component={RouterLink}
                            to={'/'}
                            underline={'none'}
                        >
                            {'.me()'}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        }}
                    >
                        <Link
                            component={RouterLink}
                            to={'/work'}
                            underline={'none'}
                        >
                            {'.work()'}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        }}
                    >
                        <Link
                            component={RouterLink}
                            to={'/contact'}
                            underline={'none'}
                        >
                            {'.contact()'}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        }}
                    >
                        <Link
                            component={RouterLink}
                            to={'/resume'}
                            underline={'none'}
                        >
                            {'.resume()'}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
