import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [

      transition('void=>*', [
        style({ opacity: 0 }),
        animate(1000)
      ]),
      transition('*=>void', [
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  message: string = "";

  currentMessage: string = `<li @fade id="quotes"> ${this.message} </li>`;

  ngOnInit() {
    let messages = ["Introspection", "Inoculates", "Ignorance"];
    let index = 0;

    // setInterval(() => {
    //   index++;
    //   document.getElementById('quotes').textContent = messages[index % 3];
    // }, 1500);

    setInterval(() => {
      index++;
      this.message = messages[index % 3];
    }, 1000);
  }

  // intervalWordArrayMaker(messageArray) {
  //   let index = 0;
  //   setInterval(() => {
  //     index++;
  //     document.getElementById('quotes').textContent = messageArray[index % 3];
  //   }, 1000);
  // }



}
