import { Component, Input } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

@Component({
  selector: 'app-dot-content',
  templateUrl: './dot-content.component.html',
})
export class DotContentComponent {
  @Input() data: any = {};
  production: boolean = ENVIRONMENT.PRODUCTION;
}
