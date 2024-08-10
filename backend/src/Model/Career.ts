export interface Career {
    id: string; // Unique identifier for the career
    title: string;
    description: string;
    requiredSkills: string[];
    preferredEducationLevel: string;
    averageSalary: number;
    growthRate: number; // Projected growth rate for the career (Maybe we can implement it not sure!)
}
