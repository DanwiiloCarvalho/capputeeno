export function sanitizeAndLowercase(inputValue: string): string {
    return inputValue.toLowerCase().normalize('NFD').replace(/[^a-zA-Z0-9\s]/g, "")
}