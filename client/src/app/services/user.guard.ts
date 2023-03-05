import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate()
  {
    
    var role = localStorage.getItem("userType");
    if( role == "user")
    {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
  
}
