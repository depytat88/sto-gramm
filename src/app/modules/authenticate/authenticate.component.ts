import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-navigate-item',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticateComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  private usernameRight: string = 'xxx';
  private passwordRight: string = 'xxx';

  constructor(private router: Router) {
  }

  authenticate(form: NgForm) {
    if (form.valid
      && form.controls['username'].value === this.usernameRight
      && form.controls['password'].value === this.passwordRight) {
      this.router.navigateByUrl("");
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
