import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaWidth } from 'src/app/share/media-width.service';
import { ReplaySubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
export class MayCard{
  imgUrl:string;
  name:string;
  view:number;
  des:string;
  heart:boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  startItem:number=0
  endItem:number=8
  pageSize:number=0
  pageLenght:number[]=[]
  pageIndex:number=1
  loading:boolean=false;
  items=new ReplaySubject<MayCard[]>()
  constructor(
    private media:MediaWidth,
    // private http:HttpClient
  ) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() : void{
    this.media.getMedia().subscribe(
      data=>{
        let pageSize=0
        if(data == 'sm' || data == 'xs'){
          pageSize=4
        }
        if(data == 'md' ){
          pageSize=6
        }
        else{
          pageSize=8
        } 
        if(this.pageSize!=pageSize)
        this.counter(pageSize)
      }
    )
    this.media.loadDevice()
  }
  counter(lenghth:number) {
    this.pageSize=lenghth
    this.pageLenght=new Array( Math.ceil( 18 / lenghth ))
    this.loading=true
    let items:MayCard[]=[]
    for(let i= 1; i<=lenghth;i++){
      let img = this.startItem+i
      if(img<20)
      items.push({
        name:'نمونه کارد من ',
        des:'این یک نمونه کارد می باشد...!',
        heart:i%2==0 ? false:true,
        imgUrl:'./assets/img/p/'+img+'.jpg',
        view:Math.floor(1000 + Math.random()*10000)
      })
    }
    this.items.next(items)
    setTimeout(() => {
    this.loading=false
    }, 2000);

  }
  getPaging(){
    return new Array( Math.ceil( 18 / this.pageSize ))
  }
  paging(num){
    if((this.pageSize * num ) == this.endItem) return;
    setTimeout(() => {
    this.loading = true
    this.startItem=(this.pageSize * num )- this.pageSize
    this.endItem = this.pageSize * num 
    this.pageIndex = num
    this.counter(this.pageSize)
      
    }, 10);
  }
}
 