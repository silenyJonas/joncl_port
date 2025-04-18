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
  projects: { title: string, backgroundPath: string, description: string , githubLink: string, githubLogo: string,  }[] = [
    { title: 'Desktop app', backgroundPath: 'assets/projects-bg/mc.png', description: 'Source Code', githubLink: 'https://github.com/silenyJonas/midnight_commander_op', githubLogo: 'assets/images/github-projects.png' },
    { title: 'Desktop app', backgroundPath: 'assets/projects-bg/db_tool.png', description: 'Source Code', githubLink: 'https://github.com/silenyJonas/database_api', githubLogo: 'assets/images/github-projects.png' },
    { title: 'Website', backgroundPath: 'assets/projects-bg/web-bg.png', description: 'Web Page', githubLink: 'https://www.naucseto.com', githubLogo: 'assets/images/internet.png' },
  ];
}
