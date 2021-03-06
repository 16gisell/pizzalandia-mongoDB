import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { userInterface } from '../../../models/userInterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService) { }

  user: userInterface;

  ngOnInit() {
    this.user = this.authService.getCurrenUser();
  }

}
