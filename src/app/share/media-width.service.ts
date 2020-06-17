import { NgZone, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class MediaWidth{
    public mobile:boolean=false;
    public tablet:boolean=false;
    public desktop:boolean=false;
    public lgdesktop:boolean=false;
    public tv:boolean=false;
    screen=new Subject<string>()
    constructor(
        private zone: NgZone,) {
          window.onresize  = (e) =>
          {
            setTimeout(() => {
              this.zoneDevice()               
            }, 50);
              
          };
      }
      zoneDevice(){        
        this.zone.run(() => {
          let width=window.outerWidth
            if(!this.mobile &&  width<=575){
              this.mobile = true
              this.tablet=false;
              this.desktop=false;
              this.lgdesktop=false;
              this.tv=false
              this.screen.next('xs')
              
              
            }
            else if(!this.tablet &&  width>575 && width<=768){
              this.mobile=false;
              this.tablet = true;
              this.desktop=false;
              this.lgdesktop=false;
              this.tv=false
              this.screen.next('sm')
              
            }
            else if(!this.desktop &&  width>=769 && width<=991){
              this.mobile=false;
              this.tablet=false;
              this.desktop = true;
              this.lgdesktop=false;
              this.tv=false
              this.screen.next('md')
              
            }
            else if(!this.lgdesktop &&  width>=992 && width<=1200){
              this.mobile=false;
              this.tablet=false;
              this.desktop=false;
              this.lgdesktop =true
              this.tv=false
              this.screen.next('lg')
              
            }
            else if(!this.tv &&  width>=1200 ){
              this.mobile=false;
              this.tablet=false;
              this.desktop=false;
              this.lgdesktop=false
              this.tv = true
              this.screen.next('xl')
              
            }
            
        });
      }
      loadDevice(){
        let width=window.outerWidth
        this.mobile = false
        this.tablet=false;
        this.desktop=false;
        this.lgdesktop=false;
        this.tv=false
         
        if(!this.mobile &&  width<=575){
          this.mobile = true
          this.tablet=false;
          this.desktop=false;
          this.lgdesktop=false;
          this.tv=false
          this.screen.next('xs')
          
          
        }
        else if(!this.tablet &&  width>575 && width<=768){
          this.mobile=false;
          this.tablet = true;
          this.desktop=false;
          this.lgdesktop=false;
          this.tv=false
          this.screen.next('sm')
          
        }
        else if(!this.desktop &&  width>=769 && width<=991){
          this.mobile=false;
          this.tablet=false;
          this.desktop = true;
          this.lgdesktop=false;
          this.tv=false
          this.screen.next('md')
          
        }
        else if(!this.lgdesktop &&  width>=992 && width<=1200){
          this.mobile=false;
          this.tablet=false;
          this.desktop=false;
          this.lgdesktop =true
          this.tv=false
          this.screen.next('lg')
          
        }
        else if(!this.tv &&  width>=1200 ){
          this.mobile=false;
          this.tablet=false;
          this.desktop=false;
          this.lgdesktop=false
          this.tv = true
          this.screen.next('xl')
          
        }
      }
      getMedia():Observable<string>{
        return this.screen.asObservable()
      }
}