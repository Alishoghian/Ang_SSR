import { Component, AfterViewInit } from '@angular/core';
import { MediaWidth } from './share/media-width.service';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  media:string
  sidbar:string=null
  constructor(private mediaServic:MediaWidth){}
  ngAfterViewInit(): void {
    this.mediaServic.getMedia().subscribe(
      data=>{
        setTimeout(() => {
        this.media=data  
          this.sidbar=null 
        }, 10);  
      }
    )
    this.mediaServic.loadDevice()
    let SELF = this
    window.onclick=function(e){
      let sidnav= document.getElementById('sidenave')
      let sideToggele = document.getElementById('sidnavToggle')
      if(SELF.sidbar == 'in'){
        let path = e.path.find(f => f ==sidnav)
        let toglee = e.path.find(f => f == sideToggele)
        if(!path && !toglee){
          SELF.sidbar='out'          
        }
      }
      
    }
    // setTimeout(() => {
    //   document.documentElement.style.setProperty('primary', '#07fff');
    //   console.log(document.documentElement.style);
      
    // }, 5000);
  }
  sideToggele(){
    this.sidbar == null || this.sidbar == 'out' ? this.sidbar='in' : this.sidbar='out'
  }
  
}
