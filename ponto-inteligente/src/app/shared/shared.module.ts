import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './'

import { MatPaginatorIntl } from '@angular/material/paginator'
import { MascaraDirective } from './directives/mascara.directive';



@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
