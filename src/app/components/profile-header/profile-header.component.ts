import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-header',
  imports: [CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  @Input() name: string = '';  
  @Input() profileIconLink: string = '';   

  @Input() personalInfo: { title: string; iconPath: string }[] = [];
  
}
