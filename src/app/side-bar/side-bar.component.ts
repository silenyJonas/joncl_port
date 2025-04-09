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
    { iconPath: 'assets/img/discord.png', link: 'https://discord.com' },
    { iconPath: 'assets/img/github.png', link: 'https://github.com' },
    { iconPath: 'assets/img/instagram.png', link: 'https://instagram.com' },
    { iconPath: 'assets/img/messenger.png', link: 'https://messenger.com' },
    { iconPath: 'assets/img/whatsapp.png', link: 'https://whatsapp.com' }
  ];
// nezobrazuji se obrazky i kdyz adresy jsou spravne
}
