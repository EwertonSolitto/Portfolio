export default function languageChecker() {
  if(navigator.language.match('pt')) {
    return true
  } 
  return false
}