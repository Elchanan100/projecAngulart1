import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivService   {
  constructor() { }
  canActivate(): boolean {
    return true
  }
}
