import { Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = styled((props) => (
    <Link
        {...props}
    />
))(({ theme }) => ({
    color: theme.palette.common.white,
    '&:hover, &.Mui-focusVisible': {
        color: theme.palette.success.main
    }
}));

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
                <NavLink
                    component={RouterLink}
                    variant={'h5'}
                    to={'/'}
                    underline={'none'}
                    letterSpacing={'.3rem'}
                >
                    Brittany Carlton
                </NavLink>
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
                    <NavLink
                        component={RouterLink}
                        variant={'h6'}
                        to={'/'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.me()'}
                    </NavLink>
                </Grid>
                <Grid item xs={'auto'}>
                    <NavLink
                        component={RouterLink}
                        variant={'h6'}
                        to={'/work'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.work()'}
                    </NavLink>
                </Grid>
                <Grid item xs={'auto'}>
                    <NavLink
                        component={RouterLink}
                        variant={'h6'}
                        to={'/contact'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.contact()'}
                    </NavLink>
                </Grid>
                <Grid item xs={'auto'}>
                    <NavLink
                        component={RouterLink}
                        variant={'h6'}
                        to={'/resume'}
                        underline={'none'}
                        letterSpacing={'.3rem'}
                    >
                        {'.resume()'}
                    </NavLink>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
