import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';

// manages all URL endpoints the app will respond to
const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "playlist", component: PlaylistPageComponent },
    // All non-existent routes lead to HomePage
    { path: "**", component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
