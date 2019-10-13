import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name;
  email;
  password;
  address;
  city;
  constructor(private us: UsersService) {}

  ngOnInit() {}
 addData() {
   if(this.password.length<10){
     alert("Password must be atleast 10 characters long")
   }
   else{
    this.us.register(this.name,this.address,this.city,this.password,this.email);
    alert('Registeration Complete');
  }
  console.log(this.password.length)
   //console.log(this.name)
 }

// employees: any[]=[
//   {
//     "fname": "Yash",
//     "lname": "Sharma",
//     "age":21
//   },
//   {
//     "fname": "abcd",
//     "lname": "efgh",
//     "age": 21
//   }
// ]

}
