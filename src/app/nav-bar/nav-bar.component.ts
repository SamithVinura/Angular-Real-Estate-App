import { Component, OnInit } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser !:any;
  constructor(private alertyfy:AlertyfyService) { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinUser =  localStorage.getItem('token')
    return this.loggedinUser
  }

  onLogout(){
    localStorage.removeItem('token')
    this.alertyfy.success('Successfully Logout')
  }

}
