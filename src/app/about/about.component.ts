import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  education = {
    elementary: "Ednas School Of Alaminos",
    highschool: "University Of Baguio",
    college: "University of Baguio"
  };
}
