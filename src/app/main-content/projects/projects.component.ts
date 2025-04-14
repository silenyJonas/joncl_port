import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // kdyz se najede mysi tak se projekt rozbali dolu a ukaze se popis projektu
  //bude tam  treba i link na github repo nebo treba pouzita technologie
  projects: { title: string, backgroundPath: string, description: string , githubLink: string, githubLogo: string }[] = [
    { title: 'Desktop app', backgroundPath: 'assets/projects-bg/mc.png', description: '', githubLink: 'xxx', githubLogo: 'assets/images/github-projects.png' },
    { title: 'Desktop app', backgroundPath: 'assets/projects-bg/db_tool.png', description: '', githubLink: 'xxx', githubLogo: 'assets/images/github-projects.png' },
    { title: 'Website', backgroundPath: 'assets/projects-bg/web-bg.png', description: '', githubLink: '', githubLogo: 'assets/images/github-projects.png' },
    { title: 'Eshop', backgroundPath: 'assets/projects-bg/web-bg.png', description: '', githubLink: '', githubLogo: 'assets/images/github-projects.png' },
  ];
}
