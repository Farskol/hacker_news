import React from "react";
import {Link} from "react-router-dom";
import {Card, CardContent, Grid, Typography} from "@mui/material";

const PieceOfNews = (props) => {
    const data = new Date(props.news.time*1000);
    const link = `/item/${props.news.id}`;
    return (
                <Grid item xs={12}>
                    <Card sx={{
                        backgroundColor:"#eaedee"
                    }}>
                        <Link to={link}>
                            <CardContent>
                                <Typography variant="h5" >{props.numberOfNews}. {props.news.title}</Typography>
                                <Typography>
                                    rating: {props.news.score} points |
                                    by {props.news.by} | {String(data.getHours()).padStart(2,'0')}:
                                    {String(data.getMinutes()).padStart(2,'0')} {String(data.getDate()).padStart(2,'0')}
                                    .{String(data.getMonth()+1).padStart(2,'0')}
                                    .{data.getFullYear()}
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>
    );
}

export default PieceOfNews;