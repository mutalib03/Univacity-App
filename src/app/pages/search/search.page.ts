
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
import { ProgramService } from '../../services/program.service';
import { Program } from '../../models/models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

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
  IonTitle
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
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
  checkmarkCircleSharp 
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
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
    FormsModule
  ],
  providers: [ModalController],
})
export class SearchPage implements OnInit, OnDestroy {
  searchTerm: string = '';
  activeFilters: string[] = [];
  filterCount: number = 0;
  programs: any[] = [];
  
  private subscriptions: Subscription[] = [];

  constructor(
    private modalController: ModalController,
    private programService: ProgramService,
    private router: Router
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
      checkmarkCircleSharp  
    });
  }

  ngOnInit() {
    
    this.subscriptions.push(
      this.programService.programs$.subscribe(programs => {
        this.programs = programs;
      })
    );
    
 
    this.subscriptions.push(
      this.programService.activeFilters$.subscribe(filters => {
        this.activeFilters = filters;
        this.filterCount = filters.length;
      })
    );
    
   
    this.onSearchTermChange();
  }
  

  onSearchTermChange() {

    if (!this.searchTerm) {
      this.searchTerm = '';
    }

    this.programService.setSearchTerm(this.searchTerm);
  }

  ngOnDestroy() {

    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterPage,
    });

    await modal.present();
    

    const { data } = await modal.onDidDismiss();
    if (data) {
      
      this.programService.applyFilters(data);
    }
  }

  openSort() {

    console.log('Sort functionality to be implemented');
  }

  removeFilter(filter: string) {
    this.programService.removeFilter(filter);
  }
  
  viewProgramDetails(programId: number) {
    this.router.navigate(['/program', programId]);
  }
}