import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SharedService} from '../shared.service';
=======
>>>>>>> 1ec95cb2a2fba61478823dd13f52bcb2dd21d603

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
<<<<<<< HEAD
  studNo:number;
  studFname:string;
  studLname:string;
  studProg:string;
  studYr:number;
  nameCollection: Array<object>=[];

  constructor(private dataStore:SharedService) {

   }
  ngOnInit() {
    this.studNo = this.dataStore.shStudNo;
    this.studFname = this.dataStore.shstudFname;
    this.studLname = this.dataStore.shstudLname;
    this.studYr = this.dataStore.shYear;
    this.studProg = this.dataStore.shProg;
    this.nameCollection=this.dataStore.getNames();
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 1ec95cb2a2fba61478823dd13f52bcb2dd21d603
  }

}
