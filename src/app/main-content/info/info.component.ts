import { Component } from '@angular/core';
import { InfoIconComponent } from '../../components/info/info-icon.component';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';

@Component({
  selector: 'app-info',
  imports: [InfoIconComponent, CommonModule, ProfileHeaderComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  name: string = 'Joncl';
  profileIconLink: string = 'assets/info-icons/profile.jpg';

  // Personal info list
  personalInfo: { title: string, iconPath: string }[] = [
    { title: 'English & Czech', iconPath: '' },
    { title: 'from: Czech', iconPath: '' },
    { title: '21yo', iconPath: '' }
  ];

  // List of info texts (skills or other purposes)
  infoTexts: { title: string, iconPath: string }[] = [
    { title: 'C#', iconPath: 'assets/info-icons/c-sharp.png' },
    { title: 'Python', iconPath: 'assets/info-icons/python.png' },
    { title: 'PHP', iconPath: 'assets/info-icons/php.png' },
    { title: 'TypeScript', iconPath: 'assets/info-icons/typescript.png' },

    { title: 'HTML', iconPath: 'assets/info-icons/html.png' },
    { title: 'CSS', iconPath: 'assets/info-icons/css.png' },
    { title: 'JavaScript', iconPath: 'assets/info-icons/js.png' },

    { title: 'ASP.NET', iconPath: 'assets/info-icons/aspnet.png' },
    { title: 'MySQL', iconPath: 'assets/info-icons/mysql.png' },
    { title: 'Postgre', iconPath: 'assets/info-icons/postgresql.png' },
    { title: 'MSSQL', iconPath: 'assets/info-icons/mssql.png' },

    { title: 'Angular', iconPath: 'assets/info-icons/angular.png' },
    { title: 'Autocad', iconPath: 'assets/info-icons/autocad.png' },
    { title: 'Inventor', iconPath: 'assets/info-icons/inventor.png' },

  ];

  // Split infoTexts into groups of 3
  groupedInfoTexts: any[][] = [];

  ngOnInit() {
    this.groupedInfoTexts = this.chunkArray(this.infoTexts, 4);
  }
  //LINK TO COUNTRY ICONS
  flagPath: string = 'assets/info-icons/czech-republic.png'; // Path to the flag icon

  chunkArray(arr: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
}
