import {makeAutoObservable, runInAction} from "mobx";
import {getItem} from "./Axios";

class ObserverForPageOfNews {
    news = null;
    numberOfComments = null;
    Comments=[];

    constructor() {
        makeAutoObservable(this);
    }

    async getComments(comments) {
        let array = await Promise.all(comments.map((id) => this.getChildOfComments(id)));
        runInAction(() =>{
            this.Comments = array;
            this.numberOfComments = this.getCount(array);
        })
    }

    async getChildOfComments(id:number){
        let comment = await getItem(id);
        if(comment.kids !== undefined){
            comment.kids = comment.kids.map((id) => this.getChildOfComments(id))
            comment.kids = await Promise.all(comment.kids);
        }
        return comment;
    }

    getCount(array){
        let count = array.length
        array.forEach((el) => {
            if(el.kids !== undefined){
                count += this.getCount(el.kids)
            }
        })
        return count;
    }

    reset(){
        runInAction(() => {
            this.news = null;
            this.numberOfComments = null;
            this.Comments=[];
        })
    }

}

const obs = new ObserverForPageOfNews()

export default obs;