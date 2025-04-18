import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-collaboration',
  imports: [CommonModule],
  templateUrl: './collaboration.component.html',
  styleUrl: './collaboration.component.css'
})
export class CollaborationComponent {
  workflow: {title: string, description: string}[] = [
    {title:"Kick-off Meeting", description: "The initial meeting with the client where we clarify project goals, expectations, and technical requirements. We set up a roadmap, agree on the communication process, and choose appropriate project management tools."},
    {title:"Development", description:"The active development phase where I turn the design into a real application. I work in iterations, sending regular progress demos, and consult with the client on each crucial step to ensure alignment with the project's vision."},
    {title:"Testing & Review", description:"Before deployment, I thoroughly test everything – from functionality to responsiveness and performance. I gather feedback, fix any issues, and fine-tune the details to ensure the final product is of the highest quality."},
    {title:"Deployment", description:"Once approved, I deploy the project to the production environment – such as web hosting or cloud. I ensure everything runs smoothly and provide basic documentation for maintenance and future development."},
  ]
  selectedDescription: string = this.workflow[0].description;
  selectedIndex: number = 0;
  

  showDescription(index: number): void {
    this.selectedIndex = index;
    this.selectedDescription = this.workflow[index].description;
  }
  
}
