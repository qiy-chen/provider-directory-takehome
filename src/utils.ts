export function getProviderProfession(title: string): string {
  if (title.toLowerCase().includes("c.psych")) {
    return "Psychologist";
  } else return "Registered Social Worker";
}

export function getFullTitle(name: string, title: string): string {
  return name + (title && ", ") + title;
}
