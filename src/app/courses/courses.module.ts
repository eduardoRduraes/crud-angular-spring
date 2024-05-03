import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './courses/courses.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {MatCardTitle} from "@angular/material/card";


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
  ]
})
export class CoursesModule { }
