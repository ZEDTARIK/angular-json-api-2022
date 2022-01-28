import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYear: new FormControl(),
        proficiency: new FormControl()
      }),
    });
  }

  // setValue = sert à modifier tous les champs , obliger d'ajouter fields
  // pathValue = permet de modifier une partie de votre champs 
  onLoadData() : void {
    this.employeeForm.patchValue({
      fullName: "Zouhair zettarak",
      email: "ettarak@gmail.com",
      skills: {
        skillName: "C#",
        experienceInYear: 2,
        proficiency: "Beginner"
      }

    });
  }

}
