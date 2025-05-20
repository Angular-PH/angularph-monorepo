import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, FooterComponent } from '@angularph-monorepo/ui';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <lib-navbar />
    <main class="container mx-auto">
      <router-outlet></router-outlet>
    </main>
    <lib-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'myapp';
}
