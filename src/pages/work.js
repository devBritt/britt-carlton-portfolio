import { ImageList, ImageListItem, Typography } from '@mui/material';
import { projectList } from '../assets/js/projectsList';

const Work = () => {
    return (
        <section>
            {projectList ? (
                <ImageList
                    sx={{ width: 450, height: 800 }}
                    cols={3}
                    rowHeight={200}
                >
                    {projectList && projectList.map((project, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`/images/${project.img}`}
                                alt={`${project.name} thumbnail`}
                                loading={'lazy'}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            ) : (
                <Typography
                    component={'h2'}
                    variant={'h2'}
                >
                    Nothing to see here, yet... Check back soon!
                </Typography>
            )}
        </section>
    );
}

export default Work;
