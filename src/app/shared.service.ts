import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  shStudNo:number;
  shstudFname:string;
  shstudLname: string;  
  shProg:string;
  shYear:number;
  shNameObject:{StudNo:number,studFname:string,studLname:string,studProg:string,studYr:number}
  shCollection:Array<object> = [];


  constructor() { }

  addNewName(StudNo:number,studFname:string,studLname:string,studProg:string,studYr:number){
    this.shNameObject={
      StudNo:StudNo,
      studFname:studFname,
      studLname:studLname,
      studProg:studProg,
      studYr:studYr,      
    }
    this.shCollection.push(this.shNameObject);
  }
  getNames():Array<object>{
    return this.shCollection;
  }

}
