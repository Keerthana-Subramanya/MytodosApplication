import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../Service/hardcoded-authentication.service';

@Component({
  selector: 'app-loggout',
  templateUrl: './loggout.component.html',
  styleUrls: ['./loggout.component.css']
})
export class LoggoutComponent implements OnInit {

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
   let loggingout=this.hardcodedAuthenticationService.loggout();
  }

}
