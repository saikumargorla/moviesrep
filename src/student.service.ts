import { Injectable } from '@angular/core';
import { Istudent } from '../dashboard/students';

@Injectable()
export class StudentService {

  getsStudents(): Istudent[] {
    return sStudents;
  }
  getgStudents(): Istudent[] {
    return gStudents;
  }

  getgStudent(id:number){
    return gStudents.find(gstudent => gstudent.id === id);
  }

  getsStudent(id: number) {
    return sStudents.find(sstudent => sstudent.id === id);
  }

  savegform(student)
  {
    gStudents.push(student);
  }

  savesform(student){
    sStudents.push(student);
  }
  constructor() { }

}

let sStudents = [
  {
    "id":6,
    "name": "Ashish",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 89
  },
  {
    "id": 7,
    "name": "Nihal",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 90
  },
  {
    "id": 8,
    "name": "Sai kumar",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 74
  },
  {
    "id": 9,
    "name": "Skumar2",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 45
  },
  {
    "id": 10,
    "name": "Skumar3",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 67
  },
  {
    "id": 11,
    "name": "Dandi",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 95
  },
  {
    "id": 12,
    "name": "Anvesh",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 67
  },
  {
    "id": 13,
    "name": "Chaitanya",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 95
  },
  {
    "id": 14,
    "name": "Vinay",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 95
  },
  {
    "id": 15,
    "name": "Sam",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 5
  },
  {
    "id": 16,
    "name": "Bob",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 54
  },
  {
    "id": 17,
    "name": "Foxtrot",
    "branch": "CSE",
    "college": "sreenidhi",
    "date": Date.now(),
    "percentage": 29
  }
];

let gStudents = [
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
  
];