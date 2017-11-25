import { Employee } from './Employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EmployeeService {

  private employees;

   private employeesUrl = 'http://localhost:8090/employees';

  constructor(private http: Http) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(this.employeesUrl)
    .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addEmployee (body: Object): Observable<Employee[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.employeesUrl, body, options) // ...using post request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

      updateEmployee (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.employeesUrl}/${body['empId']}`, body, options) // ...using put request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }
    // Delete a comment
    removeEmployee (id: string): Observable<Comment[]> {
        return this.http.delete(`${this.employeesUrl}/${id}`) // ...using put request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }




}

