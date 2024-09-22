import { Component, HostBinding, OnInit } from '@angular/core';
import { Course } from '../Models/course.model';
import { CoursesService } from './courses.service';
import { AnimationEvent } from '@angular/animations';
import { courseAnimation, newCourseState, staggerListTriggerState } from '../course/animations';
import { routerTriggerState } from '../Shared/router-animation';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations:[courseAnimation,newCourseState,
    // routerTriggerState,
    staggerListTriggerState]
})
export class CoursesComponent implements OnInit {
  courses:Course[] = [];
  // displayedCourses:Course[] = [];  // Using Angular Animations Callback
  coursesLoaded:boolean = true;
  createNewCourse:boolean = false;
  @HostBinding('@routerState') routerState:boolean = true;
  constructor(private courseService:CoursesService) {}

  ngOnInit(): void {
      this.courseService.getCourses().subscribe((course:any)=>{
        this.courses = course;
        // this.displayedCourses.push(this.courses[0]); // Using Angular Animations Callback
        this.coursesLoaded = false;
      })
  }

  openCourse(){
    this.createNewCourse = true;
  }

  addCourse(event:Course){
    this.courses.unshift(event);
    this.createNewCourse = false;
  }

  updateStatus(data:string,index:number){
    this.courses[index].status = data;
  }

  deleteCourse(index:number){
    this.courses.splice(index,1);
  }

  cancelCourse(){
    this.createNewCourse = false;
  }

  // Angular Animation callbacks using start & done phasenames using AnimationEvent
  // onCourseAddDone(event:AnimationEvent,i:number){
  //   if(event.fromState !== 'void'){
  //     return;
  //   } 

  //   if(this.courses.length > i+1){
  //     this.displayedCourses.push(this.courses[i+1]);
  //   } else {
  //     this.displayedCourses = this.courses;
  //   }
  // }

}
