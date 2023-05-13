import React from "react";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {runInAction} from "mobx";
import {Container, LinearProgress} from "@mui/material";

import obs from "../store/ObserverForPageOfNews"
import {getItem} from "../store/Axios";
import CardOfNews from "./CardOfNews";
import Comments from "./Comments";

const PageOfNews = observer(() => {
    const {id} = useParams();
    if(obs.news !== null){
        if (id !== obs.news.id.toString()) {
            obs.reset();
        }
    }
    getItem(id).then((data) => {
        if(obs.news === null){
            runInAction(() => {
                obs.news = data;
            })
            if(obs.news.kids !== undefined){
                obs.getComments(obs.news.kids);
            }else{
                runInAction(() => {
                    obs.numberOfComments = 0;
                })
            }
        }
    })

    return (
        <>
            <Container sx = {{mt:'2rem'}}>
                {obs.numberOfComments == null && <LinearProgress sx={{mt: '10rem', mb: '3rem'}}/>}
                {obs.numberOfComments !== null && <CardOfNews
                    news={obs.news}
                    numberOfComments={obs.numberOfComments}
                />}
                {createComments(obs.Comments,[],0)}
            </Container>
        </>
    )
})

function createComments(comments,array,count){
    comments.forEach((comment) => {
        array.push((<Comments
            comment={comment}
            count={count}
            key={comment.id}
        />))
        if(comment.kids !== undefined){
            array = createComments(comment.kids,array,count+1)
        }
    })
    return array;
}

export default PageOfNews;