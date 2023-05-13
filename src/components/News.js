import React from "react";
import {observer} from "mobx-react-lite";
import {Grid, Container, LinearProgress} from "@mui/material";
import Pagination from "@mui/material/Pagination";

import PieceOfNews from "./PieceOfNews";
import obs from "../store/Observer";
import {topStories} from "../store/Axios";


const News = observer(() => {
    topStories().then((data) => {
        if(obs.news.length === 0) {
            obs.news = data.sort((a, b) => b - a)
            obs.changePage(1)
        }
    })

    let numberOfNews = ((obs.page-1)*100)+1;

    return (
        <Container sx = {{mt:'1rem'}}>
            {obs.newsOnPage.length === 0 && <LinearProgress sx = {{mt:'10rem', mb:'3rem'}}/>}
            <Grid container spacing={1}>
                {obs.newsOnPage.length !== 0 && obs.newsOnPage.map((news) => (
                    <PieceOfNews
                        key={news.id}
                        news={news}
                        numberOfNews={numberOfNews++}
                    />
                ))}
            </Grid>
            {<Pagination
                count={5}
                color="primary"
                onChange={(event, page) => obs.changePage(page)}
                sx = {{mt:'2rem'}}
            />}
        </Container>
    );
})

export default News;