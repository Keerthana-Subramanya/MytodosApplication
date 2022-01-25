import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../Service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='keerthana'
  password='kummi'
  errormessage='invalid crdentials'
  invalidlogin=false
  constructor(private router:Router,public  hardcodedAuthenticationService:HardcodedAuthenticationService) {
    
   }

  ngOnInit(): void {
  }
handlelogin()
{

  if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
  {
  this.router.navigate(['welcome',this.username])
  
 this. invalidlogin=false
  }

 
  else
  {
  this.invalidlogin=true
}
}
}
