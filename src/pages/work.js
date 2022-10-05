import { ImageList, ImageListItem, Typography, Button } from '@mui/material';
import { projectList } from '../utils/projectsList';

const Work = () => {
    return (
        <ImageList
            cols={2}
            gap={25}
            sx={{width: 8/10, height: 8/10}}
        >
            {projectList.map((project, index) => (
                <ImageListItem key={index}>
                    <Button>
                        <img
                            src={`/assets/images/${project.img}`}
                            alt={`${project.name} thumbnail`}
                            loading={'lazy'}
                        />
                        <Typography
                            component={'h2'}
                            variant={'h3'}
                        >
                            {project.name}
                        </Typography>
                    </Button>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Work;
