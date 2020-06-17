import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaWidth } from 'src/app/share/media-width.service';
import * as e from 'express';

declare var $:any
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,AfterViewInit {
media:string=null
  items:any[]=[
    {
      path:'',
      id:'r1',
      data:{title:"دسته بندی 1",icon:"stopwatch"},
      children:[
        {
          path:'',
          id:'d1',
          data:{title:"دسته 1",icon:""},
          img:'./assets/img/2.png',
          children:[
            {
              path:'',
              id:'d1c1',
              data:{title:"دسته A",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c1i0',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c1i1',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c1i2',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c1i3',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c1i4',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d1c2',
              data:{title:"دسته B",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c2i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c2i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c2i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c2i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c2i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d1c3',
              data:{title:"دسته C",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c3i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c3i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c3i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c3i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c3i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d1c4',
              data:{title:"دسته D",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c4i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c4i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c4i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c4i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c4i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d1c5',
              data:{title:"دسته E",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c5i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c5i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c5i13',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c5i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c5i6',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c5i7',
                  data:{title:"6دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c5i8',
                  data:{title:"7دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d1c6',
              data:{title:"دسته F",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c6i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c6i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c6i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c6i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d1c7',
              data:{title:"دسته G",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c7i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c7i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                }
               ]
            },
            {
              path:'',
              id:'d1c8',
              data:{title:"دسته H",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d1c8i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c8i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c8i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c8i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c8i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d1c8i6',
                  data:{title:"6دسته",icon:""},
                  children:[]
                },
               ]
            }
          ]
        },
        {
          path:'',
          id:'d2',
          data:{title:"دسته 2",icon:""},
          img:'./assets/img/3.png',
          children:[
            {
              path:'',
              id:'d2c1',
              data:{title:"دسته A",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d2c1i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c1i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c1i3',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d2c2',
              data:{title:"دسته B",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d2c2i1',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c2i2',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c2i3',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d2c3',
              data:{title:"دسته C",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d2c3i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c3i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c3i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c3i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c3i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d2c4',
              data:{title:"دسته E",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d2c4i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c4i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c4i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c4i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c4i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c4i6',
                  data:{title:"6دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c4i7',
                  data:{title:"7دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d2c5',
              data:{title:"دسته F",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d2c5i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c5i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c5i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c5i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d2c6',
              data:{title:"دسته H",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d2c6i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c6i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c6i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c6i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c6i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d2c6i6',
                  data:{title:"6دسته",icon:""},
                  children:[]
                },
               ]
            }
          ]
        },
        {
          path:'',
          id:'d3',
          data:{title:"دسته 3",icon:""},
          img:'./assets/img/4.png',
          children:[
            {
              path:'',
              id:'d3c1',
              data:{title:"دسته A",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d3c1i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d3c1i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d3c1i3',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d3c2',
              data:{title:"دسته B",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d3c2i1',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d3c2i2',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d3c2i3',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
              }
            ]
        },
        {
          path:'',
          id:'d4',
          data:{title:"دسته 4",icon:""},
          children:[
            {
              path:'',
              id:'d4c1',
              data:{title:"دسته A",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d4c1i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c1i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c1i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c1i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c1i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d4c2',
              data:{title:"دسته C",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d4c2i2',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c2i2',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c2i3',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d4c3',
              data:{title:"دسته D",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d4c3i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i10',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i2',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i3',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i4',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i5',
                  data:{title:"6 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i6',
                  data:{title:"7 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i7',
                  data:{title:"8 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i8',
                  data:{title:"9 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c3i9',
                  data:{title:"10 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d4c4',
              data:{title:"دسته E",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d4c4i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c4i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c4i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c4i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c4i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c4i6',
                  data:{title:"6دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c4i7',
                  data:{title:"7دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d4c5',
              data:{title:"دسته F",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d4c5i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c5i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c5i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c5i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
               ]
            },
            {
              path:'',
              id:'d4c6',
              data:{title:"دسته H",icon:""},
              children:[ 
                {
                  path:'',
                  id:'d4c6i1',
                  data:{title:"1 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c6i2',
                  data:{title:"2 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c6i3',
                  data:{title:"3 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c6i4',
                  data:{title:"4 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c6i5',
                  data:{title:"5 دسته",icon:""},
                  children:[]
                },
                {
                  path:'',
                  id:'d4c6i6',
                  data:{title:"6دسته",icon:""},
                  children:[]
                },
               ]
            }
          ]
        },
        {
          path:'',
          data:{title:"دسته 5",icon:""},
          children:[
            // {
            //   path:'',
            //   data:{title:"دسته A",icon:""},
            //   children:[ 
            //     {
            //       path:'',
            //       data:{title:"1 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"2 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"3 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"4 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"5 دسته",icon:""},
            //       children:[]
            //     },
            //    ]
            // },
            // {
            //   path:'',
            //   data:{title:"دسته C",icon:""},
            //   children:[ 
            //     {
            //       path:'',
            //       data:{title:"1 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"4 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"5 دسته",icon:""},
            //       children:[]
            //     },
            //    ]
            // },
          ]
        },
        {
          path:'',
          data:{title:"دسته 6",icon:""},
          children:[
            // {
            //   path:'',
            //   data:{title:"دسته A6",icon:""},
            //   children:[ 
            //     {
            //       path:'',
            //       data:{title:"1 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"2 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"3 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"4 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"5 دسته",icon:""},
            //       children:[]
            //     },
            //    ]
            // },
            // {
            //   path:'',
            //   data:{title:"دسته C6",icon:""},
            //   children:[ 
            //     {
            //       path:'',
            //       data:{title:"1 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"4 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"5 دسته",icon:""},
            //       children:[]
            //     },
            //    ]
            // },
          ]
        },
        {
          path:'',
          data:{title:"دسته 7",icon:""},
          children:[
            // {
            //   path:'',
            //   data:{title:"دسته A7",icon:""},
            //   children:[ 
            //     {
            //       path:'',
            //       data:{title:"1 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"2 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"3 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"4 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"5 دسته",icon:""},
            //       children:[]
            //     },
            //    ]
            // },
            // {
            //   path:'',
            //   data:{title:"دسته C7",icon:""},
            //   children:[ 
            //     {
            //       path:'',
            //       data:{title:"1 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"4 دسته",icon:""},
            //       children:[]
            //     },
            //     {
            //       path:'',
            //       data:{title:"5 دسته",icon:""},
            //       children:[]
            //     },
            //    ]
            // },
          ]
        },
        // {
        //   path:'',
        //   data:{title:"دسته 8",icon:""},  children:[
        //     {
        //       path:'',
        //       data:{title:"دسته A8",icon:""},
        //       children:[ 
        //         {
        //           path:'',
        //           data:{title:"1 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"2 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"3 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"4 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"5 دسته",icon:""},
        //           children:[]
        //         },
        //        ]
        //     },
        //     {
        //       path:'',
        //       data:{title:"دسته C8",icon:""},
        //       children:[ 
        //         {
        //           path:'',
        //           data:{title:"1 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"4 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"5 دسته",icon:""},
        //           children:[]
        //         },
        //        ]
        //     },
        //   ]
        // },
        // {
        //   path:'',
        //   data:{title:"دسته 9",icon:""},  children:[
        //     {
        //       path:'',
        //       data:{title:"دسته A9",icon:""},
        //       children:[ 
        //         {
        //           path:'',
        //           data:{title:"1 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"2 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"3 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"4 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"5 دسته",icon:""},
        //           children:[]
        //         },
        //        ]
        //     },
        //     {
        //       path:'',
        //       data:{title:"دسته C9",icon:""},
        //       children:[ 
        //         {
        //           path:'',
        //           data:{title:"1 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"4 دسته",icon:""},
        //           children:[]
        //         },
        //         {
        //           path:'',
        //           data:{title:"5 دسته",icon:""},
        //           children:[]
        //         },
        //        ]
        //     },
        //   ]
        // }
        
      ]
    },
    {
      path:'/a',
      data:{title:" (1)دسته بندی",icon:"utensils"},
      children:[]
    },
    {
      path:'',
      id:'r3',
      data:{title:"دسته بندی",icon:"canadian-maple-leaf"},
      children:[
        {
          path:'',
          id:'r3d1',
          data:{title:"دسته 1",icon:""},
          img:'./assets/img/2.png',
          children:[]
        },
        {
          path:'',
          id:'r3d2',
          data:{title:"دسته 2",icon:""},
          img:'./assets/img/3.png',
          children:[]
        },
        {
          path:'',
          id:'r3d3',
          data:{title:"دسته 3",icon:""},
          img:'./assets/img/4.png',
          children:[]
        }
      ]
    },
    {
      path:'',
      data:{title:"دسته بندی",icon:"stethoscope"},
      children:[]
    },
    {
      path:'',
      data:{title:"دسته بندی",icon:"js-square"},
      children:[]
    }
  ]
  constructor(private mediaServic:MediaWidth) { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    
    this.mediaServic.getMedia().subscribe(
      (data:string)=>{
        setTimeout(() => {
         this.media=data
        }, 20);        
      }
    )
    this.mediaServic.loadDevice()
  }
  lastLi:any
  viewItems(el,id,height,trX){
    // let pli = el.path.find(f => f == document.getElementById(id));
    let li =document.getElementById(id);   
     let parent = document.querySelectorAll('.'+li.classList[0])
     parent.forEach((item,i)=>{
       if(item!=li){
         try{
            setTimeout(() => { 
          item.setAttribute('style','height:'+height);
          }, 390);
          let classList =  item.getElementsByTagName('ul')[0].classList;
          classList.add('ul-remove-active')
          classList.remove('ul-active')
          item.getElementsByTagName('div')[0].classList.remove('li-active')
          item.getElementsByTagName('div')[0].querySelector('.chevron').setAttribute('style','transform:rotate(0deg) translateX(0px)');

         }
         catch(e){
           
         }
        
       }
     }) 
    if(parseInt(li.getAttribute('childlength'))==0) return
    let findClass=false
    let classList =  li.getElementsByTagName('ul')[0].classList;
  
     classList.forEach((item,i)=>{
       if(item == 'ul-active'){
         setTimeout(() => { 
           li.style.height=height
         }, 790);
        findClass=true
        classList.add('ul-disactive')
        classList.remove('ul-active')
        li.getElementsByTagName('div')[0].classList.remove('li-active')
         li.getElementsByTagName('div')[0].querySelector('.chevron').setAttribute('style','transform:rotate(0deg) translateX(0px)');
        return
       }
     })
     if(!findClass){
       li.style.height="auto"
       li.getElementsByTagName('div')[0].classList.add('li-active')
       li.getElementsByTagName('div')[0].querySelector('.chevron').setAttribute('style','transform:rotate(180deg) translateX('+trX+')');
      classList.remove('ul-disactive')
      classList.remove('ul-remove-active')
      classList.add('ul-active')
     }
    
     
    
    
  }
} 
