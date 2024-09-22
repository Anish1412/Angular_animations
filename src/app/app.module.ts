import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './animations/animations.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { VoidAnimationComponent } from './void-animation/void-animation.component';
import { NewCourseComponent } from './new-course/new-course.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { AnimationBuilderComponent } from './animation-builder/animation-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    HeaderComponent,
    UsersComponent,
    CoursesComponent,
    AnimationsComponent,
    OpenCloseComponent,
    VoidAnimationComponent,
    NewCourseComponent,
    SpinnerComponent,
    CardComponent,
    AnimationBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
