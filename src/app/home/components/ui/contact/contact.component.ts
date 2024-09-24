import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  async onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      try {
        await emailjs.send(
          environment.EMAIL_SERVICE_ID,
          environment.EMAIL_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          environment.EMAIL_USER_ID
        );
        alert('Message envoyé avec succès!');
        this.contactForm.reset();
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        alert('Une erreur est survenue, veuillez réessayer.');
      }
    }
  }
}