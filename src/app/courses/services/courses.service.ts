import { Injectable } from '@angular/core';
import {Courses} from "../model/courses";
import {HttpClient} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private API:string = "/assets/mock-db.json";
  constructor(private readonly httpClient:HttpClient) { }

  list():Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(this.API)
      .pipe(
        take(1),
        tap(courses => console.log(courses))
      );
  }
}
