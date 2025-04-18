import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  dcText: string = 'shx4096';
  igText: string = 'jonashx_';
  fbText: string = 'Joncl';

  dcLink: string = 'https://www.discord.com';
  igLink: string = 'https://www.instagram.com';
  fbLink: string = 'https://www.facebook.com';
}
