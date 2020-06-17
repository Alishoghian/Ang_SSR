import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
    providedIn: 'root'
  })
  export class Translating {
    private $translate:BehaviorSubject<string>=new BehaviorSubject<string>('fa')
    translate=this.$translate.asObservable()
    
    constructor(private injector:Injector) {
        var translate= injector.get(TranslateService) //TranslateService
        translate.onLangChange.subscribe((data:any)=>{
                if(data.lang =="fa")
                    this.$translate.next("rtl")
                 if(data.lang =="en") 
                    this.$translate.next("ltr")  
            
          });
      }
  }