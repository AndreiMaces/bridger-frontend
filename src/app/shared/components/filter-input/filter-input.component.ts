import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

type GenericFunction<T> = (item: T) => void;

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent {
  @Input() placeholder: string;
  @Input() options: string[];
  @Input() icon: string;
  @Input() styleClass: string;
  @Input() function: GenericFunction<MatSelectChange>;
}
