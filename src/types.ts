export type Provider = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  availabilty: string;
  location: string;
  education: string;
  languages: string[];
  bio: string;
};
export type PartialProvider = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  location: string;
  availabilty: string;
};

export type BreadCrumbItem = {
  label: string;
  href?: string;
};
