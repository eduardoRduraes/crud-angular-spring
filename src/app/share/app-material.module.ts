import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";


@NgModule({
  imports:[
    MatTableModule,
    MatCard,
    MatCardContent,
    MatToolbar,
    MatCardTitle
  ],
  exports: [
    MatTableModule,
    MatCard,
    MatCardContent,
    MatToolbar,
    MatCardTitle,
  ]
})
export class AppMaterialModule { }
