import React from "react";
import {Typography, Card, CardContent} from "@mui/material";

const CardOfNews = (props) => {
    const data = new Date(props.news.time*1000);

    return (
        <Card sx={{backgroundColor: "#eaedee", mb:'3rem'}}>
                    <CardContent>
                        <Typography variant="h5">{props.news.title}</Typography>
                        <Typography>
                            URL:
                            <a href={props.news.url}>
                                {props.news.url}
                            </a>
                        </Typography>
                        <Typography sx={{mt: '1rem'}}>
                            rating: {props.news.score} points |
                            by {props.news.by} | {String(data.getHours()).padStart(2, '0')}:
                            {String(data.getMinutes()).padStart(2, '0')} {String(data.getDate()).padStart(2, '0')}
                            .{String(data.getMonth() + 1).padStart(2, '0')}
                            .{data.getFullYear()} | {props.numberOfComments} comments
                        </Typography>
                    </CardContent>
                </Card>
    )
}

export default CardOfNews;