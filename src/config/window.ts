function newWindow(): Window | null{
  if( typeof window != 'undefined' ){
    return window;
  }
  return null;
}
export const appGlobal = newWindow();
