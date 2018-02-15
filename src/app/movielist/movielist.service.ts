import { Injectable } from '@angular/core';
import { Imovies } from 'app/details/movies';

export class EmployeeService {
    getmovies(): Imovies[] {
        return [
           {id:1,name:'abc',Release_date:'12 dec',Rating:3 ,language:'hindi'} 
             
            
        ]
    }
}
