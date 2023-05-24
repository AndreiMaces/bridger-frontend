import {Injectable} from '@angular/core';

function _window(): Window {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  get nativeWindow(): Window {
    return _window();
  }
}
