import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './core/layouts/full-layout/full-layout.component';
import { PartialLayoutComponent } from './core/layouts/partial-layout/partial-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { VendorResolver } from './resolvers/vendor.resolver';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';



export const routes: Routes = [
    {
        path: '',
        component: PartialLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './main/home/home.module#HomeModule',
                pathMatch: 'full',
                data: {
                    title: 'Home'
                }
            },
            {
                path: 'details',
                loadChildren: './main/details/details.module#DetailsModule',
                data: {
                    title: 'Details'
                }
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
