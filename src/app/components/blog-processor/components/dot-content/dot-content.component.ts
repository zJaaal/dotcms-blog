import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dot-content',
  templateUrl: './dot-content.component.html',
  styleUrls: ['./dot-content.component.css'],
})
export class DotContentComponent {
  @Input() data: any = {};
  production: boolean = environment.PRODUCTION;
}
