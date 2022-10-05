import { Link, Typography, Grid, Container } from '@mui/material';
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
            'SQL',
            'NoSQL',
            'GraphQL',
            'MongoDB',
            'MySQL',
        ]
    },
    {
        title: 'The Frosting',
        category: 'Frameworks & Libraries',
        skills: [
            'Node JS',
            'Express JS',
            'React',
            'Apollo',
            'Sequelize',
            'Mongoose',
            'Bootstrap',
            'Material UI',
            'JQuery'
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
]

const Resume = () => {
    return (
        <>
            <Typography component={'h2'} variant={'h2'} style={{ textAlign: 'center' }}>Skills</Typography>
            <Grid container spacing={3}>
                {skills.map(info => (
                    <Grid item xs={12} md={4} key={info.category}>
                        <SkillCard cardInfo={info} />
                    </Grid>
                ))}
            </Grid>
            <Container style={{ textAlign: 'center' }}>
                <Link
                    component={'a'}
                    variant={'h5'}
                    href={'https://docs.google.com/document/d/1J94ohB1FARKb71ZOUN4h_GHuE2Ym7zY3EXJaX4OJ7TA/edit?usp=sharing'}
                    underline={'none'}
                >
                    Download My Resume
                </Link>
            </Container>
        </>
    );
}

export default Resume;
