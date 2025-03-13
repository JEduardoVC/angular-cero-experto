import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookeService: CookieService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCoockie();
  }

  checkCoockie = (): boolean => {
    try{
      const token = this.cookeService.check('token_service');
      if(!token){
        this.router.navigate(["/", 'auth']);
      }      
      return token;
    } catch(e){
      console.error("Algo suceddio al verificar la session", e);
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
