import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.authService.checkAuthenticated()) {
      return true;
    }

    this.router.navigateByUrl("/auth");

    return false;
  }
}
