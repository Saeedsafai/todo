import { observable,action } from 'mobx';


class Store{
    @observable time
    constructor(){
        this.time = new Date();
        this.interval = setInterval(() => {
            this.time = new Date()
        },100)
    }
    @action
    
    pauseClock(){
        clearInterval(this.interval)
    }
    @action
    staetClock(){
        this.interval = setInterval(() => {
            this.time = new Date()
        },100)
    }
}
const store = new Store()
export default store