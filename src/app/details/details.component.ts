import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayParagraph = false;
  log: Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.log.push(new Date());
    this.displayParagraph = !this.displayParagraph;
  }
}
