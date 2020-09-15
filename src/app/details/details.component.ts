import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayParagraph = false;
  log: number[] = [];
  fifthLog: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.log.push(Date.now());
    if (this.log.length === 5) {
      this.fifthLog = this.log[4];
    }
    this.displayParagraph = !this.displayParagraph;
  }
}
