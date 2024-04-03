export function generateSlug(text: string): string {
  return text
    .normalize('NFD')   // normaliza os caracteres acentuados em caracteres não acentuados
    .replace(/[\u0300-\u036f]/g, '')   // remove os caracteres acentuados
    .toLowerCase()
    .replace(/[^\w\s\-]/g, '')   // remove caracteres que não são letras, números, espaços ou hífens
    .replace(/\s+/g, '-')   // substitui espaços por hífens
    .replace(/\-\-+/g, '-')   // remove múltiplos hífens seguidos
    .trim()   // remove espaços do início e fim
}