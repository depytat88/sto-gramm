import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
}
