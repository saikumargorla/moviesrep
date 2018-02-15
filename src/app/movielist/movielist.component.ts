import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  name : string='abc';
  Release_date : string='13 dec';
  Rating : number=3;
  language : string='telugu';

  showDetails: boolean = false;
  
      toggleDetails(): void {
          this.showDetails = !this.showDetails;
      }
      id: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
