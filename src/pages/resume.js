import { Link, Typography, Card, CardContent, Grid } from '@mui/material';
import SkillCard from '../components/skill-card';

const skills = [
    {
        title: 'The Cake',
        category: 'Languages & Databases',
        skills: [
            'HTML5',
            'CSS3',
            'JavaScript ES6+',
            'TypeScript',
            'GraphQL',
            'MongoDB',
            'MySQL',
        ]
    },
    {
        title: 'The Fork',
        category: 'Tools of the Trade',
        skills: [
            'Windows',
            'MacOS',
            'Windows Subsystem Linux',
            'VS Code',
            'Insomnia',
            'Adobe CC',
            'Affinity Designer',
            'Figma',
            'Adobe XD',
        ]
    },
    {
        title: 'The Frosting',
        category: 'Frameworks & Libraries',
        skills: [
            'Node JS',
            'Express JS',
            'React',
            'Apollo Client',
            'Sequelize',
            'Bootstrap',
            'Material UI'
        ]
    },
]

const Resume = () => {
    return (
        <>
            <Typography component={'h2'} variant={'h2'}>Skills</Typography>
            <Grid container spacing={3}>
                {skills.map(info => (
                    <Grid item xs={12} md={4} key={info.category}>
                        <SkillCard cardInfo={info} />
                    </Grid>
                ))}
            </Grid>
            <Link
                href={'https://docs.google.com/document/d/1HcE9UzY5vtzP_q9pKhPLg6GicucMuc-BaQdyN7jYMwM/edit?usp=sharing'}
                underline={'none'}
            >
                Download My Resume
            </Link>
        </>
    );
}

export default Resume;
