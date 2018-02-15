import { Component, OnInit } from '@angular/core';
import { Imovies } from './movies';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'app/movielist/movielist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id : number;
  player : any;

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService) { }

  ngOnInit() {

    this.id=this._route.snapshot.params["id"];
    this.player=this._employeeService.getmovies().find(c => this.newFunction(c));

  }


    private newFunction(c: Imovies): boolean {
        return c.id == this.id;
    }
}
