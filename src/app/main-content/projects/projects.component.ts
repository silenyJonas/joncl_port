import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: { title: string, backgroundPath: string, description: string, githubLink: string, githubLogo: string }[] = [];
  projectsHeader: string = '';
  constructor(public languageService: LanguageService) {}
  ngOnInit(): void {
    this.languageService.isEnglish$.subscribe((isEnglish) => {
      this.setProjects(isEnglish);
    });
  }
  private setProjects(isEnglish: boolean): void {
    if (isEnglish) {
      this.projectsHeader = 'Reference projects';
      this.projects = [
        {
          title: 'File Manager',
          backgroundPath: 'assets/projects-bg/mc.png',
          description: 'Source Code',
          githubLink: 'https://github.com/silenyJonas/midnight_commander_op',
          githubLogo: 'assets/images/github-projects.png',
        },
        {
          title: 'Database Api Tool',
          backgroundPath: 'assets/projects-bg/db_tool.png',
          description: 'Source Code',
          githubLink: 'https://github.com/silenyJonas/database_api',
          githubLogo: 'assets/images/github-projects.png',
        },
        {
          title: 'School Website',
          backgroundPath: 'assets/projects-bg/web-bg.png',
          description: 'Web Page',
          githubLink: 'https://web-dump-1052.github.io/ref_website_1/',
          githubLogo: 'assets/images/internet.png',
        }
      ];
    } else {
      this.projectsHeader = 'Ukázkové projekty';
      this.projects = [
        {
          title: 'File Manager',
          backgroundPath: 'assets/projects-bg/mc.png',
          description: 'Zdrojový Kód',
          githubLink: 'https://github.com/silenyJonas/midnight_commander_op',
          githubLogo: 'assets/images/github-projects.png',
        },
        {
          title: 'Databázový Nástroj por API',
          backgroundPath: 'assets/projects-bg/db_tool.png',
          description: 'Zdrojový Kód',
          githubLink: 'https://github.com/silenyJonas/database_api',
          githubLogo: 'assets/images/github-projects.png',
        },
        {
          title: 'Webová Stránka Školy',
          backgroundPath: 'assets/projects-bg/web-bg.png',
          description: 'Webová stránka',
          githubLink: 'https://web-dump-1052.github.io/ref_website_1/',
          githubLogo: 'assets/images/internet.png',
        }
      ];
    }
  }
}