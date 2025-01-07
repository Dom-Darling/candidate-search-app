export interface Candidate {
  id: number;
  avatar_url: string;
  name: string;
  username: string;
  location: string;
  email: string;
  github_profile: string;
  company: string;
}

export type CandidateStatus = 'accepted' | 'rejected' | 'pending';