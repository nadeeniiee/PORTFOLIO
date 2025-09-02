import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert(`✅ Message sent!\n\nName: ${this.contact.name}\nEmail: ${this.contact.email}\nMessage: ${this.contact.message}`);
      this.contact = { name: '', email: '', message: '' };
    } else {
      alert('⚠️ Please fill in all fields before submitting.');
    }
  }
}

