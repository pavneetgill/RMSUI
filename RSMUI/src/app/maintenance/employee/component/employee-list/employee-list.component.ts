import { Employee } from '../../Employee';
import { EmployeeService } from '../../../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers : [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
 employees: Employee[];
 // employees;
  selectedEmployee: Employee;
  constructor(private employeeService: EmployeeService) {
//   this.employees = this.employeeService.getEmployees();
  }
    loadEmployees() {
        // Get all comments
         this.employeeService.getEmployees()
                           .subscribe(
                               employees => this.employees = employees, // Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
  ngOnInit() {
      this.loadEmployees();

  }
   onSelect(employee: Employee) { this.selectedEmployee = employee; }

}
