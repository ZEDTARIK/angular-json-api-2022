import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [
    {
      "id": 1,
      "fullName": "Zouhair ettarak",
      "email": "ettarak@gmail.com"
    },
    {
      "id": 2,
      "fullName": "loream",
      "email": "loream@live.fr"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
