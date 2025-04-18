import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  imports: [],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {
  rightsReserved: string = '2023 Joncl. All rights reserved.';
  sourceCode: string = 'Source Code: ';
  sourceCodeLink: string = '';
}
