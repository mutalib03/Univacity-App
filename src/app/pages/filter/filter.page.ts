import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SelectionModalComponent } from '../../components/selection-modal/selection-modal.component';
import { FilterState } from '../../models/models';
import { ProgramService } from '../../services/program.service';

import {
  arrowBackOutline,
  optionsOutline,
  funnelOutline,
  closeOutline,
  chevronDownOutline,
  checkmarkCircleOutline,
  schoolOutline,
  flagOutline,
  ribbonOutline,
  timeOutline,
  calendarOutline,
  globeOutline,
  shareSocialOutline,
  heartOutline,
  close, closeCircle, pin,
  checkmarkCircleSharp,
  arrowForwardOutline,

} from 'ionicons/icons';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonCard,
  IonApp,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonList,
  IonLabel,
  IonChip,
  IonTitle,
  IonInput,
  IonRange,
  IonItemDivider,
  IonFooter,

} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
  standalone: true,
  imports: [
    SelectionModalComponent,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonBadge,
    IonCard,
    IonApp,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonList,
    IonLabel,
    IonChip,
    IonTitle,
    CommonModule,
    IonInput,
    IonRange,
    IonItemDivider,
    IonFooter,
    FormsModule
  ],
  providers: [ModalController],
})
export class FilterPage implements OnInit {

  tuitionRange: { lower: number, upper: number } = { lower: 50000, upper: 120000 };

  selectedInstitutes: string[] = [];
  selectedEducationLevels: string[] = [];
  selectedCountries: string[] = [];
  selectedDisciplines: string[] = [];
  selectedLanguages: string[] = [];
  selectedAttendanceTypes: string[] = [];


  displayTexts: { [key: string]: string } = {
    institutes: 'None selected',
    educationLevels: 'None selected',
    countries: 'None selected',
    disciplines: 'None selected',
    languages: 'None selected',
    attendance: 'None selected'
  };

  constructor(
    private modalController: ModalController,
    private programService: ProgramService
  ) {
    addIcons({
      arrowBackOutline,
      optionsOutline,
      funnelOutline,
      closeOutline,
      chevronDownOutline,
      checkmarkCircleOutline,
      schoolOutline,
      flagOutline,
      ribbonOutline,
      timeOutline,
      calendarOutline,
      globeOutline,
      shareSocialOutline,
      heartOutline,
      close, closeCircle, pin,
      checkmarkCircleSharp,
      arrowForwardOutline
    });
  }

  ngOnInit() {

    this.loadCurrentFilterState();

    this.updateDisplayTexts();
  }


  private loadCurrentFilterState() {
    const currentState = this.programService.getCurrentFilterState();


    this.tuitionRange = currentState.tuitionRange;
    this.selectedInstitutes = [...currentState.institutes];
    this.selectedEducationLevels = [...currentState.educationLevels];
    this.selectedCountries = [...currentState.countries];
    this.selectedDisciplines = [...currentState.disciplines];
    this.selectedLanguages = [...currentState.languages];
    this.selectedAttendanceTypes = [...currentState.attendanceTypes];
  }

  dismiss(applyFilters: boolean = false) {
    if (applyFilters) {
      const filterState: FilterState = {
        tuitionRange: this.tuitionRange,
        institutes: this.selectedInstitutes,
        educationLevels: this.selectedEducationLevels,
        countries: this.selectedCountries,
        disciplines: this.selectedDisciplines,
        languages: this.selectedLanguages,
        attendanceTypes: this.selectedAttendanceTypes
      };

      this.modalController.dismiss(filterState);
    } else {
      this.modalController.dismiss();
    }
  }

  clearAll() {
    this.tuitionRange = { lower: 50000, upper: 120000 };
    this.selectedInstitutes = [];
    this.selectedEducationLevels = [];
    this.selectedCountries = [];
    this.selectedDisciplines = [];
    this.selectedLanguages = [];
    this.selectedAttendanceTypes = [];

    this.updateDisplayTexts();
  }
  async openSelectionModal(type: string) {

    let preselectedItems: string[] = [];

    switch (type) {
      case 'institutes':
        preselectedItems = this.selectedInstitutes;
        break;
      case 'educationLevels':
        preselectedItems = this.selectedEducationLevels;
        break;
      case 'countries':
        preselectedItems = this.selectedCountries;
        break;
      case 'disciplines':
        preselectedItems = this.selectedDisciplines;
        break;
      case 'languages':
        preselectedItems = this.selectedLanguages;
        break;
      case 'attendance':
        preselectedItems = this.selectedAttendanceTypes;
        break;
    }


    const modal = await this.modalController.create({
      component: SelectionModalComponent,
      componentProps: {
        type: type,
        preselectedItems: preselectedItems
      }
    });

    await modal.present();


    const { data } = await modal.onDidDismiss();
    if (data) {
      switch (data.type) {
        case 'institutes':
          this.selectedInstitutes = data.selectedItems;
          break;
        case 'educationLevels':
          this.selectedEducationLevels = data.selectedItems;
          break;
        case 'countries':
          this.selectedCountries = data.selectedItems;
          break;
        case 'disciplines':
          this.selectedDisciplines = data.selectedItems;
          break;
        case 'languages':
          this.selectedLanguages = data.selectedItems;
          break;
        case 'attendance':
          this.selectedAttendanceTypes = data.selectedItems;
          break;
      }


      this.updateDisplayTexts();
    }
  }


  private updateDisplayTexts(): void {
    this.displayTexts = {
      institutes: this.getDisplayText(this.selectedInstitutes),
      educationLevels: this.getDisplayText(this.selectedEducationLevels),
      countries: this.getDisplayText(this.selectedCountries),
      disciplines: this.getDisplayText(this.selectedDisciplines),
      languages: this.getDisplayText(this.selectedLanguages),
      attendance: this.getDisplayText(this.selectedAttendanceTypes)
    };
  }


  private getDisplayText(items: string[]): string {
    if (!items || items.length === 0) {
      return 'None selected';
    } else if (items.length <= 2) {
      return items.join(', ');
    } else {
      return `${items.length} selected`;
    }
  }
}