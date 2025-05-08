
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Program, FilterState } from '../models/models';
import { PROGRAMS } from '../mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private _programs: Program[] = PROGRAMS;
  private _filteredPrograms = new BehaviorSubject<Program[]>(this._programs);
  private _activeFilters = new BehaviorSubject<string[]>([]);
  private _searchTerm: string = '';
  
  private _filterState: FilterState = {
    institutes: [],
    educationLevels: [],
    countries: [],
    disciplines: [],
    languages: [],
    attendanceTypes: [],
    tuitionRange: { lower: 50000, upper: 120000 }
  };

  constructor() {
    this.updateFilteredPrograms();
  }

  get programs$(): Observable<Program[]> {
    return this._filteredPrograms.asObservable();
  }

  get programs(): Program[] {
    return this._programs;
  }

  get activeFilters$(): Observable<string[]> {
    return this._activeFilters.asObservable();
  }

  getProgram(id: number): Program | undefined {
    return this._programs.find(program => program.id === id);
  }

  setSearchTerm(term: string): void {
    this._searchTerm = term;
    this.updateFilteredPrograms();
  }

  getSearchTerm(): string {
    return this._searchTerm;
  }

  getCurrentFilterState(): FilterState {
    return {
      institutes: [...this._filterState.institutes],
      educationLevels: [...this._filterState.educationLevels],
      countries: [...this._filterState.countries],
      disciplines: [...this._filterState.disciplines],
      languages: [...this._filterState.languages],
      attendanceTypes: [...this._filterState.attendanceTypes],
      tuitionRange: { 
        lower: this._filterState.tuitionRange.lower, 
        upper: this._filterState.tuitionRange.upper 
      }
    };
  }

  applyFilters(filters: FilterState): void {
    this._filterState = filters;
    this.updateFilteredPrograms();
    this.updateActiveFilters();
  }

  removeFilter(filter: string): void {
    let updated = false;
    
    if (this._filterState.institutes.includes(filter)) {
      this._filterState.institutes = this._filterState.institutes.filter(f => f !== filter);
      updated = true;
    } else if (this._filterState.educationLevels.includes(filter)) {
      this._filterState.educationLevels = this._filterState.educationLevels.filter(f => f !== filter);
      updated = true;
    } else if (this._filterState.countries.includes(filter)) {
      this._filterState.countries = this._filterState.countries.filter(f => f !== filter);
      updated = true;
    } else if (this._filterState.disciplines.includes(filter)) {
      this._filterState.disciplines = this._filterState.disciplines.filter(f => f !== filter);
      updated = true;
    } else if (this._filterState.languages.includes(filter)) {
      this._filterState.languages = this._filterState.languages.filter(f => f !== filter);
      updated = true;
    } else if (this._filterState.attendanceTypes.includes(filter)) {
      this._filterState.attendanceTypes = this._filterState.attendanceTypes.filter(f => f !== filter);
      updated = true;
    }

    if (updated) {
      this.updateFilteredPrograms();
      this.updateActiveFilters();
    }
  }

  clearFilters(): void {
    this._filterState = {
      institutes: [],
      educationLevels: [],
      countries: [],
      disciplines: [],
      languages: [],
      attendanceTypes: [],
      tuitionRange: { lower: 50000, upper: 120000 }
    };
    
    this.updateFilteredPrograms();
    this.updateActiveFilters();
  }

  private updateFilteredPrograms(): void {
    let filteredPrograms = [...this._programs];
    
    if (this._searchTerm && this._searchTerm.trim() !== '') {
      const searchTermLower = this._searchTerm.toLowerCase();
      filteredPrograms = filteredPrograms.filter(program => (
        program.title.toLowerCase().includes(searchTermLower) ||
        program.description.toLowerCase().includes(searchTermLower) ||
        program.disciplines.some(discipline => discipline.toLowerCase().includes(searchTermLower))
      ));
    }

    if (this._filterState.institutes.length > 0) {
      filteredPrograms = filteredPrograms.filter(program => 
        this._filterState.institutes.includes(program.university));
    }

    if (this._filterState.educationLevels.length > 0) {
      filteredPrograms = filteredPrograms.filter(program => 
        this._filterState.educationLevels.includes(program.level));
    }

    if (this._filterState.countries.length > 0) {
      filteredPrograms = filteredPrograms.filter(program => 
        this._filterState.countries.includes(program.country));
    }

    if (this._filterState.disciplines.length > 0) {
      filteredPrograms = filteredPrograms.filter(program => 
        program.disciplines && program.disciplines.some(discipline => 
          this._filterState.disciplines.includes(discipline)));
    }

    if (this._filterState.languages.length > 0) {
      filteredPrograms = filteredPrograms.filter(program => {
        const programLanguage = program.language.split(' ')[0];
        return this._filterState.languages.some(lang => 
          program.language.includes(lang) || programLanguage === lang);
      });
    }

    if (this._filterState.attendanceTypes.length > 0) {
      filteredPrograms = filteredPrograms.filter(program => {
        return this._filterState.attendanceTypes.some(type => 
          program.attendance.toLowerCase() === type.toLowerCase());
      });
    }

    filteredPrograms = filteredPrograms.filter(program => {
      if (this._filterState.tuitionRange.lower === 50000 && this._filterState.tuitionRange.upper === 120000) {
        return true;
      }
      
      const tuitionMatch = program.tuition.match(/\d+(\.\d+)?/);
      if (tuitionMatch) {
        const tuitionValue = parseFloat(tuitionMatch[0]);
        const estimatedTuition = tuitionValue * 100;
        return estimatedTuition >= this._filterState.tuitionRange.lower && 
               estimatedTuition <= this._filterState.tuitionRange.upper;
      }
      return true;
    });

    this._filteredPrograms.next(filteredPrograms);
  }

  private updateActiveFilters(): void {
    const activeFilters: string[] = [
      ...this._filterState.institutes,
      ...this._filterState.educationLevels,
      ...this._filterState.countries,
      ...this._filterState.disciplines,
      ...this._filterState.languages,
      ...this._filterState.attendanceTypes
    ];
    
    this._activeFilters.next(activeFilters);
  }
}