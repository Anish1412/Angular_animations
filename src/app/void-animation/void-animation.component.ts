import { Component, OnInit } from '@angular/core';
import { conditionAnimation, listAnimation, shrinkAnimation } from './void-animation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations:[conditionAnimation,shrinkAnimation,listAnimation]
})
export class VoidAnimationComponent implements OnInit {
  showElement:boolean = false;
  width:number = 1300;
  animate:boolean = false;
  listItems:number[] = [];
  constructor() {}

  ngOnInit(): void {}

  changeState(){
    this.showElement = !this.showElement;
  }

  shrinkWidth(){
    this.width = this.width - 50;
  }

  animateMe(){
    this.animate = !this.animate;
  }

  addListItems(){
    this.listItems.push(Math.random());
  }

}
