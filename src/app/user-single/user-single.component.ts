import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User'
@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.sass']
})
export class UserSingleComponent implements OnInit {
  @Input() item!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
