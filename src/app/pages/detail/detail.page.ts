

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from '../../services/program.service';
import { Program } from '../../models/models';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonFooter,
  IonItem,
  IonList,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  heartOutline,
  heart,
  shareOutline,
  eyeOutline,
  arrowForwardOutline,
  chevronDown,
  chevronUp,
  checkmarkOutline,
  informationCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonFooter,
    IonItem,
    IonList,
    IonLabel
  ]
})
export class DetailPage implements OnInit {

  expandedSections = {
    description: false,
    requirements: false,
    structure: false
  };


  isFavorited = false;


  program: Program | undefined;


  fullDescriptionText = '';
  shortDescriptionText = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private programService: ProgramService
  ) {
    addIcons({
      arrowBackOutline,
      heartOutline,
      heart,
      shareOutline,
      eyeOutline,
      arrowForwardOutline,
      chevronDown,
      chevronUp,
      checkmarkOutline,
      informationCircleOutline
    });
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);

      this.program = this.programService.getProgram(id);

      if (this.program) {

        this.fullDescriptionText = this.program.description;


        this.shortDescriptionText = this.truncateText(this.fullDescriptionText, 150);
      } else {

        console.error('Program not found with ID:', id);
        this.router.navigate(['/home']);
      }
    }

    const savedFavorites = localStorage.getItem('favoritePrograms');
    if (savedFavorites && this.program) {
      const favorites = JSON.parse(savedFavorites);
      this.isFavorited = favorites.includes(this.program.id);
    }
  }

  backButtonClick() {
    this.goBack();
  }

  favoriteButtonClick() {
    if (!this.program) return;

    this.isFavorited = !this.isFavorited;


    let favorites: number[] = [];
    const savedFavorites = localStorage.getItem('favoritePrograms');

    if (savedFavorites) {
      favorites = JSON.parse(savedFavorites);
    }

    if (this.isFavorited) {

      if (!favorites.includes(this.program.id)) {
        favorites.push(this.program.id);
      }
    } else {
      favorites = favorites.filter((id: any) => id !== this.program?.id);
    }

    localStorage.setItem('favoritePrograms', JSON.stringify(favorites));
  }

  shareButtonClick() {
    if (!this.program) return;

    if (navigator.share) {
      navigator.share({
        title: this.program.title,
        text: `Check out this program: ${this.program.title} at ${this.program.university}`,
        url: window.location.href,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {

      const url = window.location.href;
      navigator.clipboard.writeText(url)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  applyNow() {
    console.log('Apply now clicked');
    alert('This would navigate to an application form in a real app.');
  }


  toggleSection(section: string) {
    if (section in this.expandedSections) {
      this.expandedSections[section as keyof typeof this.expandedSections] =
        !this.expandedSections[section as keyof typeof this.expandedSections];
    }
  }


  truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }


  getSectionText(section: string): string {
    if (!this.program) return '';

    if (section === 'description') {
      return this.expandedSections.description ? this.fullDescriptionText : this.shortDescriptionText;
    } else if (section === 'structure') {
      return this.expandedSections.structure ? this.program.structure : this.truncateText(this.program.structure, 150);
    }
    return '';
  }

  getDisplayedRequirements(): string[] {
    if (!this.program) return [];

    if (this.expandedSections.requirements) {
      return this.program.requirements;
    }

    return this.program.requirements.slice(0, 2);
  }


  areRequirementsTruncated(): boolean {
    if (!this.program) return false;
    return this.program.requirements.length > 2;
  }
}