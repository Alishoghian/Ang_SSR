import { Routes } from '@angular/router';



export const Route: Routes = [
    {
        path:'',
        loadChildren:()=>import('./pages/first-module/first-module.module').then(m=>m.FirstModuleModule),
        data:{title:"دسته بندی",icon:""},
        // children:
    },
  
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '',
  
    },
  
  ];