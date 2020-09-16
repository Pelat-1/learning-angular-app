import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayParagraph = false;
  log: Date[] = [];

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.log.push(new Date());
    this.displayParagraph = !this.displayParagraph;
  }
}
