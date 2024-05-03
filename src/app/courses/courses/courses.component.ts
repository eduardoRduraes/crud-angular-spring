import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {Courses} from "../model/courses";
import {CoursesService} from "../services/courses.service";
import {catchError, Observable, of} from "rxjs";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  courses$:Observable<Courses[]>;
  displayedColumns = ['name','category'];
  constructor(private readonly coursesServices:CoursesService) {
     this.courses$ = this.coursesServices.list()
       .pipe(
         catchError(error =>{
           return of([])
         })
       );
  }
  ngOnInit(): void {
  }

}
