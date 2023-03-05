import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate()
  {
    var role = localStorage.getItem("userType");
    if( role == "admin")
    {
      return true;
    }
    this.route.navigate(['adminLog']);
    return false;
  }
  
}
