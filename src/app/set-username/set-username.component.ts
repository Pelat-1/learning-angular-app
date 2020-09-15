import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-username',
  templateUrl: './set-username.component.html',
  styleUrls: ['./set-username.component.css']
})
export class SetUsernameComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername(): void {
    this.username = '';
  }
}
