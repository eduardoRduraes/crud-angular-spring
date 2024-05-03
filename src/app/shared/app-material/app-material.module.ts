import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  imports:[
    MatTableModule,
    MatCard,
    MatCardContent,
    MatToolbar,
    MatCardTitle,
    MatDialogModule
  ],
  exports: [
    MatTableModule,
    MatCard,
    MatCardContent,
    MatToolbar,
    MatCardTitle,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }
