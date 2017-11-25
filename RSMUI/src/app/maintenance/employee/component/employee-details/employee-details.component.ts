import {Employee} from '../../../Employee';
import {EmployeeService} from '../../../employee.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input()
  employee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
  }

  saveEmployeeDetails() {
    this.employeeService
      .addEmployee(this.employee)
      .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.employee)}`));
  }

  updateEmployeeDetails() {

    this.employeeService
      .updateEmployee(this.employee)
      .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.employee)}`));
  }

}
