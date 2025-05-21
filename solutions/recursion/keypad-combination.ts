/**
 * ### English ###
 *
 * We want to break a password that's being entered by a keypad. We have a
 * tool that lets us get an imprecise reading on the last code entered by
 * a person using a video footage, this imprecision leads to a suggested
 * code, but we are not sure this is the correct one. We know that this
 * suggested code could be at least one digit away on each of the digits
 * based on their location in the keypad (below). These variations can be
 * horizontal and vertical. For example, if one of the suggested digits
 * is 0, we must also consider 1 and 2. If one of the suggested digits is
 * 2, we must also consider 1, 3, 5 and 0.
 *
 * Write a function that, given a suggested code, returns a list of unique
 * possible variations based on the variations from the near digits in a
 * descending order.
 *
 * ### Spanish ###
 *
 * Queremos adivinar una clave que es ingresada mediante un teclado numérico
 * Tenemos una herramienta que nos permite obtener una lectura imprecisa
 * del último código ingresado por una persona usando una filmación, esta
 * imprecisión nos lleva a un código sugerido, pero no podemos asegurar
 * que éste sea el correcto. Sabemos que los dígitos de este código
 * sugerido pueden estar al menos a una tecla de distancia del tablero
 * (abajo). Estas variaciones pueden ser horizontales o verticales. Por
 * ejemplo, si uno de los dígitos sugeridos es el 0, también debemos
 * considerar 1 y 2. Si uno de los dígitos sugeridos es el 2, también
 * debemos considerar 1, 3, 5 y 0.
 *
 * Escribe una función que, dado un código sugerido, devuelva una lista
 * de variaciones posibles únicas basadas en las variaciones de sus
 * dígitos cercanos en orden descendiente.
 *
 *
 * ### Keypad / Teclado ###
 *
 *      +---+---+---+
 *      | 7 | 8 | 9 |
 *      +---+---+---+
 *      | 4 | 5 | 6 |
 *      +---+---+---+
 *      | 1 | 2 | 3 |
 *      +---+---+---+
 *      |   0   |
 *      +-------+
 *
 * ### Examples / Ejemplos ###
 *
 * getCodeVariations('8')
 * >> ['5', '7', '8', '9']
 *
 * getCodeVariations('2')
 * >> ['0', '1', '2', '3', '5']
 *
 * getCodeVariations('20')
 * >> [
 *   '00', '01', '02', '10', '11', '12', '20', '21',
 *   '22', '30', '31', '32', '50', '51', '52',
 * ]
 */

export function getCodeVariations(suggestedCode: string): string[] {
  //
}
