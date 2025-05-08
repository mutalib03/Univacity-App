
export interface Program {
    id: number;
    title: string;
    university: string;
    country: string;
    level: string;
    duration: string;
    attendance: string;
    language: string;
    tuition: string;
    isPartner: boolean;
    badgeMark: string;
    image: string;
    logo: string;
    flag: string;
    description: string;
    views: number;
    impressions: number;
    requirements: string[];
    structure: string;
    fees: {
      serviceFee: string;
      internationalStudentFee: string;
      housingFee: string;
      acceptanceFee: string;
      tuitionFee: string;
      applicationFee: string;
      livingFee: string;
    };
    extraInfo: Array<{
      title: string;
      subtitle?: string;
    }>;
    disciplines: string[];
  }
  
  export interface FilterState {
    institutes: string[];
    educationLevels: string[];
    countries: string[];
    disciplines: string[];
    languages: string[];
    attendanceTypes: string[];
    tuitionRange: { lower: number; upper: number };
  }