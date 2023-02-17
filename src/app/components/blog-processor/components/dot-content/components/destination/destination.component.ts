import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/models/Destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent {
  @Input() destination!: Destination;
  imageSrc: string = '';
  ngOnInit() {
    this.imageSrc = '/dA/' + this.destination.imageContentAsset;
  }
}
