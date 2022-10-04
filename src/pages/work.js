import { ImageList, ImageListItem } from '@mui/material';
import { projectList } from '../assets/js/projectsList';

const Work = () => {
    return (
        <ImageList
            cols={2}
            gap={20}
        >
            {projectList.map((project, index) => (
                <ImageListItem key={index}>
                    <img
                        src={`/images/${project.img}`}
                        alt={`${project.name} thumbnail`}
                        loading={'lazy'}
                        // TODO: add onClick to open modal with info
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Work;
