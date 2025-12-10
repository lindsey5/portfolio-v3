interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  images: string[];
  githubLink: string;
  websiteLink?: string;
}

interface Skill {
  name: string;
  icon: string;
}

interface Certificate {
  title: string;
  description: string;
  images: string[];
}