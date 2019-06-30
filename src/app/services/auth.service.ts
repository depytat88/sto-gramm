import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  checkAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
