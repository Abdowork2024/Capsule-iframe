export function removeNonASCII(input: string): string {
  if (!input) return "";
  return input.replace(/[^\x00-\x7F]/g, "*");
}
