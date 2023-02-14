import { Component, Input } from '@angular/core';
import { UrlBuilderService } from 'src/app/services/urlBuilder/url-builder.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dot-image',
  templateUrl: './dot-image.component.html',
  styleUrls: ['./dot-image.component.css'],
})
export class DotImageComponent {
  @Input() src!: string;
  @Input() height?: number;
  @Input() width?: number;
  @Input() format?: string;
  @Input() alt?: string;
  @Input() imgStyles?: Record<string, string>;

  baseURL!: UrlBuilderService;
  finalSRC: string = '';

  constructor(private builder: UrlBuilderService) {}

  ngOnChanges() {
    this.baseURL = this.builder.setBaseUrl(environment.API_BASE + this.src);

    if (this.width) this.baseURL = this.baseURL.width(this.width);
    if (this.height) this.baseURL = this.baseURL.height(this.height);

    this.finalSRC = this.baseURL.buildImgURL(this.format);
  }
}
