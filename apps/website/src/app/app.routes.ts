import { Route, Routes } from '@angular/router';

export const routes: Routes = [{
    path : '',
    pathMatch :'full',
    loadComponent: () => {
        return import('./pages/home/home.component').then((m) => m.HomeComponent)
    }
},
{
    path : 'aboutus',
    pathMatch :'full',
    loadComponent: () => {
        return import('./pages/about-us/about-us.component').then((m) => m.AboutusComponent)
    }
},
{
    path : 'blogs',
    pathMatch :'full',
    loadComponent: () => {
        return import('./pages/blogs/blogs.component').then((m) => m.BlogsComponent)
    }
},
{
    path : 'events',
    pathMatch :'full',
    loadComponent: () => {
        return import('./pages/events/events.component').then((m) => m.EventsComponent)
    }
},
{
    path : 'contactus',
    pathMatch :'full',
    loadComponent: () => {
        return import('./pages/contact-us/contact-us.component').then((m) => m.ContactusComponent)
    }
},
{
    path : 'ourteam',
    pathMatch :'full',
    loadComponent: () => {
        return import('./pages/our-team/our-team.component').then((m) => m.OurteamComponent)
    }
} ];