import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtBrMatPaginatorIntl } from './'

import { MatPaginatorIntl } from '@angular/material/paginator'
import { MascaraDirective } from './directives/mascara.directive';



@NgModule({
  declarations: [MascaraDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
