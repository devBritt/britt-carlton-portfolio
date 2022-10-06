import { Grid, ImageListItem, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { projectList } from '../utils/projectsList';
import pokemonImg from '../assets/images/pokemon.png';
import ttImg from '../assets/images/tech-time.png';
import ntImg from '../assets/images/note-taker.png';
import awImg from '../assets/images/astrowatch.png';


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      display: 'none',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Work = () => {
    const getProjectImg = projectName => {
        if (projectName === 'Poké Teamwise') {
            return pokemonImg;
        } else if (projectName === 'Tech Time') {
            return ttImg;
        } else if (projectName === 'Note Taker') {
            return ntImg;
        } else if (projectName === 'Astrowatch') {
            return awImg;
        }
    }

    return (
        <Grid
            container
            spacing={3}
        >
            {projectList.map((project, index) => (
                <Grid item xs={12} md={6} key={index} height='100%'>
                    <ImageButton
                        focusRipple
                        key={project.name}
                    >
                        <img
                            src={`${getProjectImg(project.name)}`}
                            width='100%'
                            maxwidth={500}
                            height='auto'
                        />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image
                            width='100%'
                            maxwidth={500}
                            height='inherit'
                        >
                            <Typography
                                component="span"
                                variant="h2"
                                color="inherit"
                                sx={{
                                    fontSize: '2rem',
                                    letterSpacing: '0.1rem',
                                    position: 'relative',
                                    px: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                            {project.name}
                            <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                        </ImageButton>
                </Grid>
            ))}
        </Grid>
    );
}

export default Work;
