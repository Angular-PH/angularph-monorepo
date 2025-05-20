import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  name = input<string>();
  description = input<string>();
  thumbnail = input<string>();
  id = input<number>();
}
