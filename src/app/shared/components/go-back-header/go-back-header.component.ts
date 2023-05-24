import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back-header',
  templateUrl: './go-back-header.component.html',
  styleUrls: ['./go-back-header.component.scss'],
})
export class GoBackHeaderComponent {
  @Input() title = 'Add new element';
  @Input() second = 'Back to elements list';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
