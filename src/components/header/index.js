import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <Link to={'/'}>Brittany Carlton</Link>
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
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <Link to={'/'}>{'.me()'}</Link>
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <Link to={'/work'}>{'.work()'}</Link>
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <Link to={'/contact'}>{'.contact()'}</Link>
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography
                        variant={"h6"}
                        noWrap
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <Link to={'/resume'}>{'.resume()'}</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
