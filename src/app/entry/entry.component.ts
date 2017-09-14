import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SharedService} from '../shared.service';
=======
>>>>>>> 1ec95cb2a2fba61478823dd13f52bcb2dd21d603

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

<<<<<<< HEAD
onSubmit(nameForm){
      console.log(nameForm);
      this.dataStore.addNewName(nameForm.value.studNo, nameForm.value.studFname, nameForm.value.studLname,
        nameForm.value.studProg, nameForm.value.studYr);
      nameForm.reset();
    }

  constructor(private dataStore:SharedService) {
    
   }
=======
  constructor() { }
>>>>>>> 1ec95cb2a2fba61478823dd13f52bcb2dd21d603

  ngOnInit() {
  }

}
