import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  public users:any=[]
  constructor() { }

  ngOnInit(): void {
    this.users = [
      { name: "david", age: 32, profession: "developer",gender:"m" },
      { name: "vishal", age: 22, profession: "phpdeveloper" ,gender:"m" },
      { name: "arjun", age: 33, profession: "javadeveloper",gender:"m" },
      { name: "pooja", age: 32, profession: "pythondeveloper" ,gender:"f" },
      { name: "amirtha", age: 33, profession: "javadeveloper" ,gender:"f" },
      { name: "vivek", age: 33, profession: "javadeveloper"  }

    ]
  }
  

}
