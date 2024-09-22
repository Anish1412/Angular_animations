import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('clikedState',[
      state('default',style({
        width:'50px',
        height:'150px',
        backgroundColor:'orange',
        cursor:'pointer'
      })),
      state('mousedown',style({
        width:'150px',
        height:'150px',
        backgroundColor:'red'
      })),
      state('clicked',style({
        width:'150px',
        height:'50px',
        backgroundColor:'blue',
        color:'white',
        cursor:'pointer'
      })),
      transition('default => clicked',animate('1s 200ms ease-in')),
      transition('clicked => default',animate('1s 200ms ease-in')),
      transition('mousedown => clicked',animate(300)),
      transition('default => mousedown',animate(300))
    ]),
    trigger('numberState',[
      state('unselect',style({
        border: '2px solid black',
        padding: '5px'
      })),
      state('select',style({
        border:'2px solid black',
        padding:'4px',
        backgroundColor: 'dodgerblue',
        color:'white'
      })),
      transition('unselect => select',[style({
        border:'2px solid black',
        padding: '5px'
      }),animate('200ms')])
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  isOpen:string = 'default';
  paragraphState:string = 'default';
  selectedNum ?: number;

  ngOnInit(): void {}

  changeState(){
    this.isOpen = 'default';
    setTimeout(()=>{
      this.isOpen = 'clicked';
    },3000);
  }

  onMouseDown(){
    this.isOpen = 'mousedown';
  }

  paragraphFunc(){
    this.paragraphState = 'default';
    setTimeout(()=>{
      this.paragraphState = 'clicked';
    },3000);
  }

  selectedNumber(event:Event){
    const number = event.target as HTMLInputElement;
    // console.log(typeof +(<HTMLInputElement>event.target).value);
    this.selectedNum = +number.value;
  }
}
