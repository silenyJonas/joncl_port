import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-collaboration',
  imports: [CommonModule],
  templateUrl: './collaboration.component.html',
  styleUrl: './collaboration.component.css'
})
export class CollaborationComponent {
//jakoby proces toho projektu bude ze bude kolecko neco napsane a pak prerusovana cara dolu a takhle nejaka barva podobne jak to bylo na strankach naucseto
  workflow: {title: string, description: string}[] = [
    {title:"Kick-off Meeting", description: "Introduction, defining project goals and requirements"},
    {title:"Development", description:"Building the application based on agreed specifications and regular progress updates"},
    {title:"Testing & Review", description:"Verifying functionality, fixing bugs, finalizing the application"},
    {title:"Deployment", description:"Launching the application on the web, ensuring it works properly"},
  ]
}
