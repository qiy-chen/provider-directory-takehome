export function getProviderProfession(title: string): string {
  if (
    title.toLowerCase().includes("c.psych") ||
    title.toLowerCase().includes("dr.")
  ) {
    return "Psychologist";
  } else return "Registered Social Worker";
}

export function getFullTitle(name: string, title: string): string {
  const titles = title.split(", ").map((t) => t.trim());
  // Add Dr. at the front if applicable
  if (titles.includes("Dr.")) {
    if (!name.toLowerCase().startsWith("dr. ")) {
      name = "Dr. " + name;
    }
  }
  return (
    name +
    (titles.length > 0
      ? ", " + titles.filter((t) => t !== "Dr.").join(", ")
      : "")
  );
}
