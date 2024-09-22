import { Component, OnInit } from '@angular/core';
import { cardTriggeredState } from './animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations:[cardTriggeredState]
})
export class CardComponent implements OnInit {
  isCardVisible:boolean = true;
  isShowParagraph:boolean = true;
  constructor(){}

  ngOnInit(): void {}

  toShowCard(){
    this.isCardVisible = !this.isCardVisible;
  }

  showParaGraph(){
    this.isShowParagraph = !this.isShowParagraph;
  }
}
