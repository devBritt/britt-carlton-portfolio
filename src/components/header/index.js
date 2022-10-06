import { Grid, Link } from '@mui/material';
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
            px={3}
            py={2}
        >
            <Grid item xs>
                <Link
                    component={RouterLink}
                    variant={'h5'}
                    to={'/'}
                    underline={'none'}
                    letterSpacing={'.3rem'}
                >
                    Brittany Carlton
                </Link>
            </Grid>
            
            <Grid
                container
                item
                xs={'auto'}
                id={'nav'}
                aria-label={'navigation'}
                spacing={2}
            >
                <Grid item xs={'auto'}>
                    <Link
                        component={RouterLink}
                        variant={'h6'}
                        to={'/'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.me()'}
                    </Link>
                </Grid>
                <Grid item xs={'auto'}>
                    <Link
                        component={RouterLink}
                        variant={'h6'}
                        to={'/work'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.work()'}
                    </Link>
                </Grid>
                <Grid item xs={'auto'}>
                    <Link
                        component={RouterLink}
                        variant={'h6'}
                        to={'/contact'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.contact()'}
                    </Link>
                </Grid>
                <Grid item xs={'auto'}>
                    <Link
                        component={RouterLink}
                        variant={'h6'}
                        to={'/resume'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.resume()'}
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
