import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayParagraph = false;
  log: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.log.push(Date.now());
    this.displayParagraph = !this.displayParagraph;
  }
}
