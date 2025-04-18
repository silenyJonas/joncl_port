import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  socialLinks: { iconPath: string, link: string }[] = [
    { iconPath: 'assets/images/discord.png', link: 'https://discord.com' },
    { iconPath: 'assets/images/github.png', link: 'https://github.com' },
    { iconPath: 'assets/images/instagram.png', link: 'https://instagram.com' },
    { iconPath: 'assets/images/messenger.png', link: 'https://messenger.com' },
    { iconPath: 'assets/images/whatsapp.png', link: 'https://whatsapp.com' },
    { iconPath: 'assets/images/spotify.png', link: 'https://spotify.com' }
  ];
}
