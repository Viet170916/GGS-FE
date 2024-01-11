export interface Message{
  isError?: boolean,
  content?: string
}
export function ErrorMessage( content: string ){
  return {
    content: content,
    isError: true,
  };
}
export function NormalMessage( content: string ){
  return {
    content: content,
    isError: false,
  };
}
export function WarningMessage( content: string ){
  return {
    content: content,
    isError: false,
    isWarning: true,
  };
}
