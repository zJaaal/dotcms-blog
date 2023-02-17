import { Component, Input } from '@angular/core';
import { UrlBuilderService } from 'src/app/services/urlBuilder/url-builder.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dot-image',
  templateUrl: './dot-image.component.html',
  styleUrls: ['./dot-image.component.css'],
})
export class DotImageComponent {
  // Add object
  // @Input() contentlet: any = {}
  @Input() src!: string;
  @Input() height?: number;
  @Input() width?: number = 500;
  @Input() format?: string;
  @Input() alt?: string;

  finalSRC: string = '';
  fallbackSrc: string = environment.IMAGE_FALLBACK_URL;

  constructor(private builder: UrlBuilderService) {}

  ngOnChanges() {
    //dont use this builder here
    this.builder = this.builder.baseUrl(environment.API_BASE + this.src);

    if (this.width) this.builder = this.builder.width(this.width);
    if (this.height) this.builder = this.builder.height(this.height);

    this.finalSRC = this.builder.buildImgURL(this.format);
  }

  onError() {
    this.finalSRC = this.builder
      .baseUrl(this.fallbackSrc)
      .raw(`${this.width}/110B36 ?text=dotCMS`)
      .buildURL();
  }
}
