import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../../_core/models/vehicle';
import { Merch } from '../../../_core/models/merch';
import { WindowRefService } from '../../../_core/services/window-ref.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() fullscreen = false;
  @Input() styleClass = '';
  @Input() src = '';
  @Input() title = '';
  @Input() footer = '';
  @Input() slides: Vehicle[] | Merch[];
  @Input() hasBottomCard = true;
  @Input() hasButtonLink = false;
  @Input() isLoading = false;
  innerWidth: number;

  constructor(private windowRef: WindowRefService) {}

  ngOnInit(): void {
    this.innerWidth = this.windowRef.nativeWindow.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = this.windowRef.nativeWindow.innerWidth;
  }
}
