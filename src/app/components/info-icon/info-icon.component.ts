import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.css']
})
export class InfoIconComponent {
  @Input() title: string = '';  // Přijímáme title z rodiče
  @Input() iconPath: string = '';   // Přijímáme link z rodiče
}
