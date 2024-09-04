import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: []
})
export class ItemFormComponent {
  newItem: string = '';

  @Output() addItem = new EventEmitter<string>();

  onAddItem() {
    if (this.newItem.trim()) {
      this.addItem.emit(this.newItem);
      this.newItem = '';
    }
  }
}
