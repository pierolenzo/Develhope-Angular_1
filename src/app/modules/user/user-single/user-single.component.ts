import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../../../models/User'
@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.sass']
})
export class UserSingleComponent implements OnInit {
  @Input() item!: User;
  @Output() removedItemEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  removedItem(value: number) {
    this.removedItemEvent.emit(value);
    console.log(value);
  }

}
