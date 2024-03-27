/**
 * Formats a number with abbreviations for thousands, millions, and billions.
 *
 * @param {number} number - The number to be formatted.
 * @return {string} The formatted number with abbreviations.
 *
 * @example
 * // Returns '1.3K'
 * formatNumber(1260);
 *
 * @example
 * // Returns '1.5M'
 * formatNumber(1500000);
 */
export function formatNumber(number) {
    if (number === 0) return '0';
    const abbreviations = ['', 'K', 'M', 'B'];
    const index = Math.floor(Math.log10(Math.abs(number)) / 3);
    let formattedNumber = (Math.abs(number) / Math.pow(1000, index)).toFixed(1);
    if (Math.abs(number) < 1000) {
        formattedNumber = Math.round(Math.abs(number)).toString();
    } else if (formattedNumber.includes('.')) {
        const [integerPart] = formattedNumber.split('.');
        formattedNumber = integerPart.length === 3 ? integerPart : formattedNumber;
    }
    return `${number < 0 ? '-' : ''}${formattedNumber}${abbreviations[index]}`;
}
