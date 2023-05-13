import {makeAutoObservable, runInAction} from "mobx";
import {getItem} from "./Axios";

class Observer {

    page = 1;
    news = [];
    newsOnPage = [];

    constructor() {
        makeAutoObservable(this);
    }

    async changePage(page:number) {
        this.newsOnPage = [];
        let array = [];
        for (let i = (page-1)*100; i<100*page; i++){
            array.push(getItem(this.news[i]))
        }
            Promise.all(array).then((value) => {
                runInAction(() => {
                    this.page = page;
                    this.newsOnPage = value;
                })
            })
    }

}

const obs = new Observer()

export default obs;