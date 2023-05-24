import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapsed = false;
  canBeTransparent = true;
  isTransparent = false;
  @Output() toggleCollapsed = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const route = this.router.url;
      this.canBeTransparent = route ? route !== '/contact' : false;
      this.isTransparent = window.scrollY === 0 && this.canBeTransparent;
    });
  }

  toggleNavbar(): void {
    this.collapsed = !this.collapsed;
    this.toggleCollapsed.emit(this.collapsed);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparent = window.scrollY === 0 && this.canBeTransparent;
  }
}
