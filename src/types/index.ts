export interface Video {
  id: string;
  title: string;
  type: string;
  youtubeUrl: string;
  notesUrl: string;
  codingQuestionUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  starred?: boolean;
}

export interface CoursesData {
  courses: Course[];
}

export interface VideoData {
  courseId: string;
  videos: Video[];
}

export interface AnnouncementItem {
  id: string;
  type: "quote" | "announcement";
  content: string;
  author?: string;
  isActive: boolean;
}

export interface AnnouncementsData {
  items: AnnouncementItem[];
}

export interface Contributor {
  id: string;
  name: string;
  avatar: string;
  prs: number;
  issues: number;
  commits: number;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}

export interface ContributorsData {
  contributors: Contributor[];
}
