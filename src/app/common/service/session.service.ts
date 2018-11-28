import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  
  public getSession(key: string): string{
    return window.sessionStorage.getItem(key);
  }

  public setSession(key: string, value: string): void{
    window.sessionStorage.setItem(key, value);
  }

  public removeSession(key: string): void{
    window.sessionStorage.removeItem(key);
  }

  public removeAllSession(): void{
    window.sessionStorage.clear();
  }

}
