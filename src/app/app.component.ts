import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenAuthService } from './shared/services/token-auth.service';
import { AuthenticationStateService } from './shared/services/authentication-state.service';
import { JwtService } from './shared/services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'gestao';

  isLoggedin: boolean|null;

  constructor(
    public authenticationStateService: AuthenticationStateService,
    public router: Router,
    private tokenAuthService: TokenAuthService,
    private jwtService: JwtService
  ) {
    this.isLoggedin = null;
  }

  ngOnInit() {
    this.authenticationStateService.userAuthState.subscribe(res => {
        this.isLoggedin = res;
    });
  }

  logOut() {
    this.jwtService.logOut().subscribe(() => {
      this.authenticationStateService.setAuthState(false);
      this.tokenAuthService.destroyToken();
      this.router.navigate(['signin']);
    });
  }  
}
