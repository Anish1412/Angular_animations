import { Injectable } from '@angular/core';
import { Course } from '../Models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses:Course[] = [
    { title:'Angular Complete Course', description: 'Learn Angular Complete Course', status: 'active' },
    { title:'JavaScript Complete Course', description: 'Learn JavaScript Complete Course', status: 'active' },
    { title:'HTML and CSS Complete Course', description: 'Learn HTML and CSS Complete Course', status: 'active' },
  ];
  constructor() { }

  getCourses(){
    const courseObservable = new Observable((observer)=>{
      setTimeout(()=>{
        observer.next(this.courses);
      },2000);
    })
    return courseObservable;
  }
}
