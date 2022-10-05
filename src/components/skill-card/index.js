import { Card, CardContent, Typography } from '@mui/material';

const SkillCard = ({ cardInfo }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography component={'h3'} variant={'h4'}>
                    {cardInfo.title}
                </Typography>
                <Typography component={'subtitle1'} variant={'subtitle1'}>
                    {cardInfo.category}
                </Typography>
                {cardInfo.skills.map(skill => (
                    <Typography component={'p'} variant={'p'} key={skill}>
                        {skill}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

export default SkillCard;
