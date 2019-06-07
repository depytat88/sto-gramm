import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-navigate-item',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticateComponent {
  public errorMessage: string;
  form: FormGroup = this.formBuilder.group({
    username: new FormControl('', [
    ]),
    password: new FormControl('', [
    ])
  });

  private usernameRight: string = 'xxx';
  private passwordRight: string = 'xxx';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  authenticate(form: FormGroup) {
    if (form.valid
      && this.form.controls['username'].value === this.usernameRight
      && this.form.controls['password'].value === this.passwordRight) {
      this.router.navigateByUrl("");
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
