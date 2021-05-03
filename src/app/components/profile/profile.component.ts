import { Component } from '@angular/core';
import { JwtService } from './../../shared/services/jwt.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  user: User|any;

  constructor(
    public jwtService: JwtService
  ) {
    this.user = null;
    this.jwtService.profile().subscribe((res:any) => {
      this.user = res;
    })
  }

}