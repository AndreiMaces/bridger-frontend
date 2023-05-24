import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Vehicle } from '../../../_core/models/vehicle';
import { Merch } from '../../../_core/models/merch';
import {WindowRefService} from "../../../_core/services/window-ref.service";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() slides: Vehicle[] | Merch[];
  @Input() hasBottomCard: boolean;
  @Input() isLoading = true;
  window: Window;

  currentIndex = 0;
  timeoutId?: number;

  constructor(private windowRef: WindowRefService) {
    this.window = this.windowRef.nativeWindow;
  }

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy(): void {
    this.window.clearTimeout(this.timeoutId);
  }
  resetTimer(): void {
    if (this.timeoutId) {
      this.window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = this.window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl(): string {
    return `${this.slides?.at(this.currentIndex).avatar}`;
  }
}
