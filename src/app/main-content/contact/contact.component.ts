import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    const subject = encodeURIComponent(`Zpráva z portfolia od ${this.formData.name}`);
    const body = encodeURIComponent(
      `Jméno: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
    );

    window.location.href = `mailto:joncl.dev@gmail.com?subject=${subject}&body=${body}`;
  }
}
