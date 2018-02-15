import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class DetailsGuardService implements CanActivate{
    
    constructor(private _router:Router){

    }
    
    canActivate(route:ActivatedRouteSnapshot):boolean{
          let id=+route.url[1].path;
          if(isNaN(id)||id<1)
          {
              alert("movie is not there");
              this._router.navigate(['/movies']);
              return false;
          }
          return true;
      }
}