import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { routerSliderTriggerState, routerTriggerState } from '../Shared/router-animation';
import { CoursesService } from '../courses/courses.service';
import { Course } from '../Models/course.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // Passing parameters in resusable animations
  animations:[routerTriggerState({ opacity : 0, duration: '500ms'}),routerSliderTriggerState]
})
export class UsersComponent implements OnInit,OnDestroy {
  courses!:Course[];
  subscription!:Subscription;
  coursesLoaded:boolean = true;

  // ********* Router Animation **********
  @HostBinding('@routerState') routerState:boolean = true;
  constructor(private courseService:CoursesService){}

  ngOnInit(): void {
    this.subscription = this.courseService.getCourses().subscribe((res:any)=>{
        this.coursesLoaded = false;
        this.courses = res;
      },
      (error)=>{
        console.log(error);
      })
  }

  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }
}
