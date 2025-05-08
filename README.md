# University Program Search Application

A comprehensive mobile-friendly application built with Ionic and Angular that allows users to search for university programs, filter results by various criteria, and view detailed program information.

## Features

- **Program Search Page**: Browse university programs with search functionality
- **Advanced Filtering**: Filter programs by multiple criteria:
  - Universities/Institutes
  - Education Levels
  - Countries
  - Disciplines
  - Languages
  - Attendance Types
  - Tuition Range
- **Program Detail Page**: View comprehensive program information including:
  - Description
  - Requirements
  - Program structure
  - Fee details
  - Campus information
- **Responsive Design**: Optimized for mobile devices using Ionic components

## Technology Stack

- **Ionic Framework 7**: Latest version for mobile-optimized UI components
- **Angular 17**: With standalone components approach
- **TypeScript**: For type safety and improved developer experience
- **SCSS**: For custom styling

## Project Structure

The application follows a clean, modular structure with separation of concerns:

```
src/
├── app/
│   ├── pages/
│   │   ├── search/              # Search/listing page
│   │   │   ├── search.page.html
│   │   │   ├── search.page.scss
│   │   │   └── search.page.ts
│   │   ├── filter/              # Filter modal page
│   │   │   ├── filter.page.html
│   │   │   ├── filter.page.scss
│   │   │   └── filter.page.ts
│   │   └── detail/              # Program details page
│   │       ├── detail.page.html
│   │       ├── detail.page.scss
│   │       └── detail.page.ts
│   ├── components/
│   │   └── selection-modal/     # Selection modal for filters
│   │       ├── selection-modal.component.html
│   │       ├── selection-modal.component.scss
│   │       └── selection-modal.component.ts
│   ├── models/
│   │   └── models.ts            # Shared interfaces
│   ├── services/
│   │   └── program.service.ts   # Central service for program data
│   ├── mock-data/
│   │   ├── mock-data.ts         # Program data
│   │   └── selection-data.ts    # Selection data for filters
│   ├── app.routes.ts            # Routing configuration
│   └── app.component.ts         # Main app component
├── assets/
│   ├── images/                  # Images for universities, etc.
│   │   ├── universityImage.png
│   │   └── universityLogo.png
│   └── icon/                    # Icons and SVGs
│       ├── canadaFlag.svg
│       ├── brasilFlag.svg
│       ├── switzerlandFlag.svg
│       ├── usaFlag.svg
│       ├── CircleWavyCheck.svg
│       ├── filter.svg
│       ├── sort.svg
│       ├── GraduationCap.svg
│       ├── Translate.svg
│       ├── ShareNetwork.svg
│       └── ...
└── ...
```

## Core Components

### 1. Models and Interfaces

We use strongly-typed interfaces for all data structures:

- **Program**: Represents a university program with all details
- **FilterState**: Represents the current state of filters
- **SelectionItem**: Represents items in selection modals

### 2. Services

#### ProgramService

Central service that manages:
- Program data storage
- Filtering logic
- Search functionality
- State management using RxJS Observables

```typescript

getProgram(id: number): Program | undefined;
setSearchTerm(term: string): void;
applyFilters(filters: FilterState): void;
removeFilter(filter: string): void;
clearFilters(): void;
```

### 3. Pages

#### Search Page
- Displays program listings
- Search by keyword functionality
- Active filter chips display
- Navigation to program details

#### Filter Page
- Modal for applying multiple filters
- Tuition range slider
- Opens selection modals for multi-select filters
- Maintains filter state between sessions

#### Detail Page
- Displays comprehensive program information
- Expandable/collapsible sections
- Favorite and share functionality
- Navigation back to search results

### 4. Components

#### Selection Modal
- Reusable modal for selecting filter options
- Search within options functionality
- Multi-select with visual indicators
- Different configurations based on filter type

## Data Flow

The application follows a reactive data flow pattern:

1. **User Interaction**: User interacts with UI (search, filter, select)
2. **Service Updates**: Actions update state in ProgramService
3. **Reactive Updates**: Components subscribe to service Observables
4. **UI Updates**: Components render updated data automatically

## Features in Detail

### Search Functionality

- Program search by title, description, or disciplines
- Dynamic filtering as search term changes
- Combines with other filters for precise results

### Filter System

- Multi-level filtering with selection modals
- Visual indicators for active filters
- Filter chips for quick removal
- Persisted filter state between modal sessions

### Program Details

- Rich information display with structured sections
- Expandable content for better readability
- Comprehensive program metadata
- Action buttons for applying, favoriting, and sharing

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/university-program-search.git
   cd university-program-search
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ionic serve
   ```

4. The application will be available at `http://localhost:8100/`

## Design Decisions

### Code Organization

- **Separation of Concerns**: Clean separation between data, services, and UI components
- **Standalone Components**: Angular standalone components for better modularity
- **Mock Data Separation**: Mock data moved to separate files for cleaner service code
- **TypeScript Interfaces**: Strong typing for better development experience

### UI/UX Considerations

- **Mobile-First Design**: Optimized for mobile usage patterns
- **Visual Feedback**: Clear indicators for selected filters and active state
- **Progressive Disclosure**: Expandable sections to avoid information overload
- **Search Integration**: Combined search and filter experience for powerful discovery

### State Management

- **RxJS Observables**: Reactive state management without complex state libraries
- **Filter Persistence**: Maintains filter state between modal sessions
- **Clean Data Flow**: Unidirectional data flow from service to components

## Code Quality Guidelines

This project follows these code quality practices:

1. **Clean Code**:
   - Meaningful variable and method names
   - Single responsibility principle
   - DRY (Don't Repeat Yourself) principle

2. **Consistent Styling**:
   - Consistent indentation and formatting
   - Following Angular style guide

3. **Performance Considerations**:
   - OnPush change detection where appropriate
   - Proper subscription management
   - Memoization of expensive operations

4. **Maintainability**:
   - Modular architecture
   - Extensive commenting on complex logic
   - Separation of data and presentation

## Future Enhancements

Potential future improvements for the application:

- Unit and integration tests
- Backend API integration
- Animation transitions
- Expanded search capabilities
- Accessibility improvements
- User accounts and saved searches
- Program comparison feature
- sort functionality
- Adding a code formatter(prettier formatter)
