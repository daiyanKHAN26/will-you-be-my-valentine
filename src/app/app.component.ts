import { Component } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common'; // Import NgIf and NgStyle

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgStyle], // Explicitly import NgIf and NgStyle
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Will you be my Valentine? ❤️';
  yesButtonSize = 20;
  noButtonSize = 20;
  clickCount = 0;
  resetState = false;
  dynamicButtonText = 'No';

  phrases = [
    "Are you sure?",
    "Think again?",
    "Still no?",
    "Come on!",
    "Reconsider?",
    "Don't do this!",
    "Last chance!",
    "Change your mind?",
    "Final decision?",
    "Really?"
  ];

  handleRightButtonClick() {
    if (this.clickCount < 11) {
      this.yesButtonSize += 15;
      this.noButtonSize -= 0.5;
      this.dynamicButtonText = this.phrases[this.clickCount] || "No";
      this.clickCount++;
    } else {
      if (this.clickCount === 11) {
        this.title = "damn.💔";
        this.resetPage();
      }
    }
  }

  resetPage() {
    this.resetState = true;
    if (this.title == "Will you be my Valentine? ❤️") {
      this.title = "Roses are red,<br>This website was easy.<br>Made it for you -<br>thought it'd be cheesy.<br>❤️";
    }
  }

  restart() {
    this.title = "Will you be my Valentine? ❤️";
    this.yesButtonSize = 20;
    this.noButtonSize = 20;
    this.clickCount = 0;
    this.dynamicButtonText = "No";
    this.resetState = false;
  }
}
