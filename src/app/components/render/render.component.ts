import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: '[app-render]',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
})
export class RenderComponent {
  @Input() blogContent?: any;
  production: boolean = environment.PRODUCTION;
}
