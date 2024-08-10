export interface CareerRecommendation {
    userId: string; // ID of the user to whom this recommendation is given
    careerId: string; // ID of the recommended career
    matchPercentage: number; // Percentage representing how well the career matches the user profile
    reasons: string[]; // List of reasons for this recommendation
}
