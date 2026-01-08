export {};

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    AButton: typeof import('antdv-next/es/button')['default'];
    GhostButton: typeof import('#/components/global/button')['GhostButton']
  }
}
