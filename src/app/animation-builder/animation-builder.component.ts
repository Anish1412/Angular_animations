import { AnimationBuilder, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-builder',
  templateUrl: './animation-builder.component.html',
  styleUrls: ['./animation-builder.component.css'],
})
export class AnimationBuilderComponent implements OnInit {
  value:string = 'Anish';
  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnInit(): void {}

  animate(element: HTMLElement) {
    const animation = this.animationBuilder.build([
      style({
        backgroundColor: 'blue',
        width: '90px',
      }),
      animate(
        500,
        style({
          backgroundColor: 'red',
          width: '300px',
        })
      ),
      animate(500),
    ]);
    const player = animation.create(element);
    player.play();
  }
}
