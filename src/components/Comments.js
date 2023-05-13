import React from "react";
import {Grid, Typography} from "@mui/material";
import Indent from "./Indent";

const Comments = (props) => {
    const data = new Date(props.comment.time*1000);

    return (
            <Grid container wrap="nowrap" spacing={2}>
                {createComment(props.count)}
                <Grid item xs zeroMinWidth>
                    <Typography variant="subtitle2" sx = {{mt:'1rem'}}>{props.comment.by} | {String(data.getHours()).padStart(2,'0')}:
                        {String(data.getMinutes()).padStart(2,'0')} {String(data.getDate()).padStart(2,'0')}
                        .{String(data.getMonth()+1).padStart(2,'0')}
                        .{data.getFullYear()}</Typography>
                    <Typography variant="inherit" sx = {{color:"#313133"}}>{decoder(props.comment.text)}</Typography>
                </Grid>
            </Grid>
    )
}

function createComment(count){
    let array = [];
    for(let i=0; i<count; i++){
        array.push((<Indent key={i}/>))
    }
    return array;
}

function decoder(html){
    let txt = new DOMParser().parseFromString(html, "text/html");
    return txt.documentElement.textContent;
}

export default Comments;