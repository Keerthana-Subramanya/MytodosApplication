import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../Service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
// IsuserloggedIn:boolean = false;

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
//this.IsuserloggedIn=this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
