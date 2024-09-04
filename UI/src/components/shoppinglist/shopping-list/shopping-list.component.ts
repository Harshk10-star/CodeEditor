import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: []
})
export class ShoppingListComponent {
  items: string[] = [];

  onAddItem(item: string) {
    this.items.push(item);
  }

  onRemoveItem(index: number) {
    this.items.splice(index, 1);
  }
}
