import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AnimationsComponent } from './animations/animations.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { VoidAnimationComponent } from './void-animation/void-animation.component';
import { CardComponent } from './card/card.component';
import { AnimationBuilderComponent } from './animation-builder/animation-builder.component';

const routes: Routes = [
  { path:'', component:CoursesComponent, data: { animation: 'HomePage' }},
  { path:'users', component:UsersComponent, data: { animation: 'Userpage'}},
  { path:'reactiveForm', component:ReactiveFormComponent},
  { path:'animations', component:AnimationsComponent},
  { path:'open-close', component:OpenCloseComponent },
  { path:'void', component:VoidAnimationComponent },
  { path:'card', component:CardComponent },
  { path: 'animationbuilder', component: AnimationBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
