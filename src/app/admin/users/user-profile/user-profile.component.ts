import { Component } from '@angular/core';
import {LabelType} from "../../../_core/enums/LabelType";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
labelType = LabelType;
}
