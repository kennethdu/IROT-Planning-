import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      
      transition('void=>*', [
        style({opacity: 0}),
        animate(2000)
      ]),
      transition('*=>void', [
        animate(2000, style({opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  
  constructor() {
   }

  ngOnInit() {
  }

}
