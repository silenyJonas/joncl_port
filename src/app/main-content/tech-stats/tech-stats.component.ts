import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tech-stats',
  imports: [CommonModule],
  templateUrl: './tech-stats.component.html',
  styleUrl: './tech-stats.component.css'
})
export class TechStatsComponent {
  header : string = "Tech Stats";

  yearsActive: { number: string; description: string }[] = [
    { number: "3+", description: "Years Active" },
    { number: "8+", description: "Projects Completed" },
    { number: "5+", description: "Clients" },
  ];

}
