
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonSearchbar,
  IonLabel,
  IonFooter,
  IonCheckbox
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline, 
  checkmarkOutline,
  checkmark,
  searchOutline,
  closeOutline,
  flagOutline
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SelectionItem,
  INSTITUTES_DATA,
  EDUCATION_LEVELS_DATA,
  COUNTRIES_DATA,
  DISCIPLINES_DATA,
  LANGUAGES_DATA,
  ATTENDANCE_DATA
} from '../../mock-data/selection-data';

@Component({
  selector: 'app-selection-modal',
  templateUrl: "./selection-modal.component.html",
  styleUrl: "./selection-modal.component.scss",
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
    IonTitle,
    IonList,
    IonItem,
    IonSearchbar,
    IonLabel,
    IonFooter,
    IonCheckbox
  ],
})
export class SelectionModalComponent implements OnInit {
  @Input() type: string = 'institutes';
  @Input() preselectedItems: string[] = [];

  title: string = 'Institutes';
  searchPlaceholder: string = 'institutes';
  searchTerm: string = '';
  showLogos: boolean = true;
  showProgramCount: boolean = true;

  selectedItems: string[] = [];
  allItems: SelectionItem[] = [];
  filteredItems: SelectionItem[] = [];

  constructor(private modalController: ModalController) {
    addIcons({
      arrowBackOutline, 
      checkmarkOutline,
      checkmark,
      searchOutline,
      closeOutline,
      flagOutline
    });
  }

  ngOnInit() {
    this.setupModalForType();
    this.loadDataForType();
    this.filteredItems = [...this.allItems];
    this.selectedItems = [...this.preselectedItems];
  }
  
  setupModalForType() {
    switch(this.type) {
      case 'institutes':
        this.title = 'Institutes';
        this.searchPlaceholder = 'institutes';
        this.showLogos = true;
        this.showProgramCount = true;
        break;
      case 'educationLevels':
        this.title = 'Education Level';
        this.searchPlaceholder = 'education levels';
        this.showLogos = false;
        this.showProgramCount = true;
        break;
      case 'countries':
        this.title = 'Country';
        this.searchPlaceholder = 'countries';
        this.showLogos = false;
        this.showProgramCount = true;
        break;
      case 'disciplines':
        this.title = 'Discipline';
        this.searchPlaceholder = 'disciplines';
        this.showLogos = false;
        this.showProgramCount = true;
        break;
      case 'languages':
        this.title = 'Study Language';
        this.searchPlaceholder = 'languages';
        this.showLogos = false;
        this.showProgramCount = true;
        break;
      case 'attendance':
        this.title = 'Attendance';
        this.searchPlaceholder = 'attendance types';
        this.showLogos = false;
        this.showProgramCount = true;
        break;
      default:
        this.title = 'Select Items';
        this.searchPlaceholder = 'items';
    }
  }

  loadDataForType() {
    switch(this.type) {
      case 'institutes':
        this.allItems = INSTITUTES_DATA;
        break;
      case 'educationLevels':
        this.allItems = EDUCATION_LEVELS_DATA;
        break;
      case 'countries':
        this.allItems = COUNTRIES_DATA;
        break;
      case 'disciplines':
        this.allItems = DISCIPLINES_DATA;
        break;
      case 'languages':
        this.allItems = LANGUAGES_DATA;
        break;
      case 'attendance':
        this.allItems = ATTENDANCE_DATA;
        break;
      default:
        this.allItems = [];
    }
  }

  filterItems() {
    if (!this.searchTerm.trim()) {
      this.filteredItems = [...this.allItems];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredItems = this.allItems.filter(item => 
        item.name.toLowerCase().includes(term) || 
        (item.country && item.country.toLowerCase().includes(term))
      );
    }
  }

  isItemSelected(itemName: string): boolean {
    return this.selectedItems.includes(itemName);
  }

  toggleSelection(itemName: string) {
    if (this.isItemSelected(itemName)) {
      this.selectedItems = this.selectedItems.filter(name => name !== itemName);
    } else {
      this.selectedItems.push(itemName);
    }
  }

  clearAll() {
    this.selectedItems = [];
  }

  applySelection() {
    this.modalController.dismiss({
      type: this.type,
      selectedItems: this.selectedItems
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }
}