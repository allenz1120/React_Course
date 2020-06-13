import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// //class properties syntax
// class OldSyntax {
//     constructor() {
//         this.name = 'Allen';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi, my name is ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// // const getGreeting = oldSytax.getGreeting;
// console.log(oldSyntax.getGreeting());

// class NewSyntax {
//     name = 'Jan'
//     getGreeting = () => {
//         return `Hi, my name is ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());



