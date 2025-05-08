
export interface SelectionItem {
    name: string;
    country?: string;
    logo?: string;
    programCount: string;
  }
  
  export const INSTITUTES_DATA: SelectionItem[] = [
    { 
      name: 'University of Graz', 
      country: 'Canada', 
      logo: '../../assets/images/universityLogo.png',
      programCount: '629'
    },
    { 
      name: 'University of Liverpool', 
      country: 'Canada', 
      logo: '../../assets/images/universityLogo.png',
      programCount: '629'
    },
    { 
      name: 'University of Rio de Janeiro', 
      country: 'Brasil', 
      logo: '../../assets/images/universityLogo.png',
      programCount: '542'
    },
    { 
      name: 'ETH Zurich', 
      country: 'Switzerland', 
      logo: '../../assets/images/universityLogo.png',
      programCount: '495'
    },
    { 
      name: 'Harvard University', 
      country: 'United States', 
      logo: '../../assets/images/universityLogo.png',
      programCount: '851'
    }
  ];
  
  export const EDUCATION_LEVELS_DATA: SelectionItem[] = [
    { name: 'Masters', programCount: '2154' },
    { name: 'Bachelor\'s Degree', programCount: '1247' },
    { name: 'Doctoral Degree', programCount: '763' },
    { name: 'Associate Degree', programCount: '452' },
    { name: 'Certificate Program', programCount: '835' }
  ];
  
  export const COUNTRIES_DATA: SelectionItem[] = [
    { name: 'United States', programCount: '3152' },
    { name: 'Canada', programCount: '1634' },
    { name: 'Brasil', programCount: '1275' },
    { name: 'Switzerland', programCount: '583' }
  ];
  
  export const DISCIPLINES_DATA: SelectionItem[] = [
    { name: 'Computer Science', programCount: '1847' },
    { name: 'Engineering', programCount: '2134' },
    { name: 'Business', programCount: '1985' },
    { name: 'Arts & Humanities', programCount: '1543' },
    { name: 'Medicine & Health', programCount: '1324' },
    { name: 'Social Sciences', programCount: '1218' },
    { name: 'Law', programCount: '874' },
    { name: 'Mathematics', programCount: '751' },
    { name: 'Natural Sciences', programCount: '962' },
    { name: 'Education', programCount: '692' }
  ];
  
  export const LANGUAGES_DATA: SelectionItem[] = [
    { name: 'English Language', programCount: '6253' },
    { name: 'French', programCount: '1284' },
    { name: 'German', programCount: '983' },
    { name: 'Spanish', programCount: '742' }
  ];
  
  export const ATTENDANCE_DATA: SelectionItem[] = [
    { name: 'Fulltime', programCount: '4837' },
    { name: 'Part-time', programCount: '2943' },
    { name: 'Online', programCount: '1875' },
    { name: 'On Campus', programCount: '1263' }
  ];