import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = ' priya World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}