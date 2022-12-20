// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   }
// ];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthlayoutRoutingModule } from './authlayout/authlayout-routing.module';
import { AppinnerlayoutRoutingModule } from './appinnerlayout/appinner-routing.module';
import { ApphomelayoutRoutingModule } from './apphomelayout/apphome-routing.module';
import { PagenotfoundComponent } from './appinnerlayout/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '**', 
    redirectTo: '/pagenotfound',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthlayoutRoutingModule,
    AppinnerlayoutRoutingModule,
    ApphomelayoutRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }





