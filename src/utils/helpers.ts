export function generateRandomInt(min: number = 1, max: number = 9999) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateCssVariables(
  object: Record<string, string> | null | undefined
) {
  return Object.entries(object || {}).reduce((acc, [key, value]) => {
    acc[`--ba-${convertStringToKebap(key)}`] = value;
    return acc;
  }, {} as any);
}

export function convertStringToKebap(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export function cn(...args: any[]): string {
  const filtered = args?.filter((part) => typeof part === "string");
  return filtered?.toString() || "";
}
