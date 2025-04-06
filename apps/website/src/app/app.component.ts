import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, FooterComponent } from '@angularph-monorepo/ui';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: ` 
   <navbar />
   <main class="container mx-auto"> 
    <router-outlet ></router-outlet>
   </main>  
   <footer></footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'myapp';
}