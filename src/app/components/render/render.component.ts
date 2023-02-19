import { Component, Input } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

@Component({
  selector: '[app-render]',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
})
export class RenderComponent {
  @Input() blogContent?: any;
  production: boolean = ENVIRONMENT.PRODUCTION;
}
