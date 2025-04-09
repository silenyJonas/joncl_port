import { Component } from '@angular/core';
import { InfoIconComponent } from '../../components/info-icon/info-icon.component';
import { CommonModule } from '@angular/common';  // Přidáno pro CommonModule
@Component({
  selector: 'app-info',  // To je jméno elementu, který použiješ v HTML
  imports: [InfoIconComponent, CommonModule],  // Opravený import pro komponentu
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']  // Opravený název pro styl
})
export class InfoComponent {
  infoTexts: { title: string, iconPath: string }[] = [
    { title: 'C#', iconPath: 'assets/info-icons/c-sharp.png' },
    { title: 'Python', iconPath: 'assets/info-icons/python.png' },
    { title: 'PHP', iconPath: 'assets/info-icons/php.png' },
    { title: 'HTML', iconPath: 'assets/info-icons/html.png' },
    { title: 'CSS', iconPath: 'assets/info-icons/css.png' },
    { title: 'JavaScript', iconPath: 'assets/info-icons/js.png' },
    { title: 'TypeScript', iconPath: 'assets/info-icons/typescript.png' },
    { title: 'MSSQL', iconPath: 'assets/info-icons/mssql.png' },
    { title: 'MySQL', iconPath: 'assets/info-icons/mysql.png' },
    { title: 'PostgreSQL', iconPath: 'assets/info-icons/postgresql.png' },
    { title: 'Autocad', iconPath: 'assets/info-icons/autocad.png' },
    { title: 'Inventor', iconPath: 'assets/info-icons/inventor.png' },
  ];
}
