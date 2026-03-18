import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = signal({
    name: '',
    email: '',
    discipline: '',
    brief: ''
  });

  submitForm() {
    console.log('Form submitted:', this.formData());
    // Here you would typically send the data to a backend service
    alert('Thank you! We will be in touch shortly.');
    this.resetForm();
  }

  resetForm() {
    this.formData.set({
      name: '',
      email: '',
      discipline: '',
      brief: ''
    });
  }
}
