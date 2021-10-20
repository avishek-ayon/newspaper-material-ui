import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    // console.log(props);
    const { title, description, urlToImage } = props.article;
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                    }

                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={urlToImage}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
};

export default News;