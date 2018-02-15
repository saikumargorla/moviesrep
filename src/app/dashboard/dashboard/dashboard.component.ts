import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies:any[];
  constructor() { }

  ngOnInit() {
    this.movies = this.getmovies();
    console.log(this.movies)
  }

  getmovies():any[]{
    return [ 
       
        { 
           "id" : "1", 
           "name" : "abc",
           "Release_date" : "12 dec",
           "Rating" : "3",
           "language" : "hindi"  
         }, 
         { 
           "id" : "2", 
           "name" : "fight",
           "Release_date" : "21 dec",
           "Rating" : "3.5",
           "language" : "telugu" 
         }, 
         { 
           "id" : "3", 
           "name" : "strugg",
           "Release_date" : "26 jan",
           "Rating" : "3",
           "language" : "english"
         }, 
         { 
           "id" : "4", 
           "name" : "elaela",
           "Release_date" : "19 dec",
           "Rating" : "3",
           "language" : "telugu"
         }, 
         { 
           "id" : "5", 
           "name" : "3glove",
           "Release_date" : "16 dec",
           "Rating" : "3",
           "language" : "hindi"
         }, 
           
         { 
           "id" : "1", 
           "name" : "abc",
           "Release_date" : "12 dec",
           "Rating" : "3",
           "language" : "hindi" 
         } 
       ] 
      
   
  }

}
