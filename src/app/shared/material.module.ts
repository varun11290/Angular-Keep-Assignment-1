import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatExpansionModule,
  MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatExpansionModule,
    MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatExpansionModule,
    MatInputModule],
})
export class MaterialModule { }
