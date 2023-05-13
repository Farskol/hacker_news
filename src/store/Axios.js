import axios from "axios";

const baseAxios =axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/",
    timeout:  10000,
    headers: {
        'Content-Type': 'application/xml',
    }
});

export async function topStories (){
    try{
        const {data} = await baseAxios.get("topstories.json?print=pretty");
        return data;
    }catch (e){
        return null;
    }
}

export async function getItem(id){
    try{
        const {data} = await baseAxios.get(`item/${id}.json?print=pretty`);
        return data;
    }catch (e){
        return null;
    }
}
