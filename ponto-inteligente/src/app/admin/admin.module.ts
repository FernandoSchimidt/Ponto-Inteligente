import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { FlexLayoutModule } from '@angular/flex-layout'

import {
  CadastroComponent,
  ListagemComponent,
  AtualizacaoComponent,
  AdminComponent
} from './components';



@NgModule({
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AdminComponent,
    AtualizacaoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
