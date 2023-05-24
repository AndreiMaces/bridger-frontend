import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchValue: FormControl = new FormControl<string>("");

  search(): void {
    console.log(this.searchValue.value);
  }
}
