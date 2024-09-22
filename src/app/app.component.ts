import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  query, style, transition, trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerState', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            // transition
          }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'angular_animations';
  // courses:Course[] = [
  //   {
  //     title:'Angular Complete Course',
  //     isActive: false
  //   },
  //   {
  //     title:'Angular Ngrx Course',
  //     isActive: false
  //   },
  //   {
  //     title:'Angular Rxjs Course',
  //     isActive: false
  //   },
  // ]

  // changeActive(course:Course){
  //   course.isActive = !course.isActive;
  // }

  routerAnimationData(rOutlet:RouterOutlet) {
    const routerData = rOutlet.activatedRouteData['animation'];
    if (!routerData) {
      return 'HomePage';
    }
    return routerData;
  }

  // getPayments(){
  //   return 1;
  // }

  // getlatestpayments(){
  //   return 'Latest payments';
  // }

  ngOnInit(): void {
    const pro = new Promise((resolve) => {
      resolve('Hello World');
    });

    pro.then((data) => {
      alert(data);
    }).catch((error)=>{
      console.log(error);
    })
    // this.getPayments();
    // this.getlatestpayments();
  }
}
