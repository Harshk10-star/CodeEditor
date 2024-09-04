// code-editor.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from './shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemFormModule } from '../../item-form/item-form.module';

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemFormModule
  ],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }