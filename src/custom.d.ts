// custom.d.ts
declare global {
  interface Window {
    kommunicate: never; // Replace 'any' with the appropriate type if known
  }
}
