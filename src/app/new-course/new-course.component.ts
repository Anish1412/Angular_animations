import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../Models/course.model';
import { buttonTriggeredState, courseFormTriggeredState } from './animation';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
  animations:[buttonTriggeredState,courseFormTriggeredState]
})
export class NewCourseComponent implements OnInit {
  @Output() addNewCourse = new EventEmitter<Course>();
  @Output() courseCancel = new EventEmitter<void>();
  newCourse!:FormGroup;
  statuses:string[] = ['active','in-active','draft'];
  constructor() {}
  
  ngOnInit(): void {
    this.newCourse = new FormGroup({
      title : new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required]),
      status : new FormControl(null,[Validators.required])
  })
  }

  addCourse(){
    this.addNewCourse.emit(this.newCourse.value);
  }

  onCourseCancel(){
    this.courseCancel.emit();
  }
}
