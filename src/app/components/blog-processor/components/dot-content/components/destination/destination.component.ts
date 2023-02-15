import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent {
  @Input() destination: any = {};
  imageSrc: string = '';
  ngOnInit() {
    this.imageSrc = '/dA/' + this.destination.imageContentAsset;
  }
}
