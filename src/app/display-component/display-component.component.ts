import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../display-service.service';




interface Employee {
  employeeId?: string;
  firstName?: string;
  lastName?: string;
  allocatedSeat?: string;
  email?:string
}
 
@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent {
  employeesList : Employee[] ; 
  constructor(private displayService : DisplayServiceService) { 


    this.displayService.getEmployeesList().subscribe( a=> {

     this.employeesList = a;
    })  }

 


    
  }
