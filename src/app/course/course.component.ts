import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Course } from '../Models/course.model';
import { courseAnimation, triggeredState } from './animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  // ******* Emulated ShadowDOM ********
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
  animations:[triggeredState,courseAnimation]
})
export class CourseComponent {
  @Input() course ?: Course;
  @Output() updateStatus = new EventEmitter<string>();
  @Output() deleteCourse = new EventEmitter();
  @ViewChild('status') status ?: ElementRef;
  isCardSelected:boolean = false;

  editStatus(){
    this.updateStatus.emit(this.status?.nativeElement.value);
  }
  

  removeCourse(){
    this.deleteCourse.emit();
  }

  badgeColor(){
    return { 
      'bg-success' : this.course?.status === 'active',
      'bg-secondary' : this.course?.status === 'inactive',
      'bg-danger' : this.course?.status === 'draft',
    }
  }

  cardSelect(){
    this.isCardSelected = !this.isCardSelected;
  }



}
