import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() src: string;
  @Input() title: string;
  @Input() price: string;
  @Input() description: string;
  @Input() editUrl: string;
  @Input() alt: string;
}
