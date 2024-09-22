import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
   animations: [
    trigger('clickedBox',[
      state('openBox',style({
        width: '1300px',
        height: '300px',
        backgroundColor: 'green',
        color:'white'
      })),
      state('closeBox',style({
        width:'1300px',
        height:'100px',
        backgroundColor: 'black',
        color:'white'
      })),
      transition('openBox => closeBox',animate('1s')),
      transition('closeBox => openBox',animate('1s')),
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen:boolean = false;

  ngOnInit(): void {}

  changeState(){
    this.isOpen = !this.isOpen;
  }
}
