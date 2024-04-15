/**
 * Formats a number with abbreviations for thousands, millions, and billions.
 *
 * @param {number} number - The number to be formatted.
 * @param {boolean} isCap - Indicates if capital letters should be used in formatting.
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
export function formatNumber(number, isCap = true) {
    if (number === 0) return '0';
    const abbreviations = isCap ? ['', 'K', 'M', 'B'] :['', 'k', 'm', 'b'];
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

/**
 * Formats a number with commas.
 * @param {number} number - The number to be formatted.
 * @return {string} The formatted number with commas.
 * @example
 * // Returns '1,234,567'
 * formatNumberWithCommas(1234567);
 */
export function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Replaces html entities with their respective characters
 * @param {string} str
 * @return {string}
 * @example
 * // Returns '<!-- SC_OFF --><div class="md"><p>All about studying and
 * students of computer science.</p>\n</div><!-- SC_ON -->'
 * replaceHtmlEntities('&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;All about studying and
   students of computer science.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;')
 * @example
 *
 */
export function replaceHtmlEntities(str) {
    return str.replaceAll(/&lt;/g, '<').replaceAll(/&gt;/g, '>')
        .replaceAll(/&quot;/g, '"').replaceAll(/&nbsp;/g, ' ')
        .replaceAll(/&apos;/g, '\'').replaceAll(/&amp;/g, '&');
}


/**
     * To generate color tones from a base color
     * @param {string} H
     * @return {Array} The generated tones
     */
function hexToHSL(H) {
    // Convert hex to RGB
    let r = 0; let g = 0; let b = 0;
    if (H.length == 4) {
        r = parseInt(H[1] + H[1], 16);
        g = parseInt(H[2] + H[2], 16);
        b = parseInt(H[3] + H[3], 16);
    } else if (H.length == 7) {
        r = parseInt(H[1] + H[2], 16);
        g = parseInt(H[3] + H[4], 16);
        b = parseInt(H[5] + H[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b); const min = Math.min(r, g, b);
    let h; let s; const l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

/**
 * Converts HSL (Hue, Saturation, Lightness) color values to a hexadecimal color representation.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @return {string} The hexadecimal color representation.
 */
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0'); // Convert to Hex and format
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
/**
 * Generates an array of color tones in HSL format based on the given hex color.
 * @param {string} hex - The hex color value.
 * @param {boolean} isDark - Whether the base color is dark or light.
 * @return {string[]} An array of color tones in hex format.
 */
export function generateColorTones(hex, isDark) {
    const [h, s, l] = hexToHSL(hex);
    const darkModeAdjustments = [
        {l: 95},
        {l: 70},
        {l: 45},
        {l: 35},
        {l: 25},
        {l: 15},
        {l: 10},
    ];
    const lightModeAdjustments = [
        {l: l - 40},
        {s: s + 20, l: l - 20},
        {s: s - 10, l: l + 35},
        {l: l + 47},
        {l: l + 49},
        {l: l + 50},
        {l: l + 55},
    ];
    const adjustments = isDark ? darkModeAdjustments : lightModeAdjustments;
    const result = {};
    for (const [key, adjustment] of Object.entries(adjustments)) {
        // Ensure default s value is used if not explicitly overridden
        const adjustedS = adjustment.s !== undefined ? adjustment.s : s;
        // naming should be color-tone-1, color-tone-2, etc. so key+1
        result[`color-tone-${parseInt(key) + 1}`] = hslToHex(h, adjustedS, Math.min(Math.max(adjustment.l, 0), 100));
    }
    return result;
}

/**
 * Generates neutral color tones for UI elements from a base color.
 * @param {string} hex - The base color in hex format.
 * @param {boolean} isDark - Whether the base color is dark or light.
 * @return {Object} The neutral color tones in hex format.
 */
export function generateNeutralTones(hex, isDark) {
    const [h, s, l] = hexToHSL(hex); // Destructure correctly as an array
    // Define custom adjustments here for each UI element based on your design needs
    const darkModeAdjustments = {
        'color-neutral-content': {l: l + 30}, // Adjusting based on correct destructuring
        'color-neutral-content-disabled': {l: l - 30, s: s - 20},
        'color-neutral-content-weak': {l: l + 20},
        'color-neutral-content-strong': {l: l + 40},
        'color-neutral-background': {l: l - 40},
        'color-neutral-background-selected': {l: l - 30},
        'color-neutral-background-weak': {l: l - 50},
        'color-neutral-background-medium': {l: l - 45},
        'color-neutral-background-strong': {l: l - 35},
        'color-neutral-background-hover': {l: l - 25},
        'color-neutral-border-strong': {l: l + 40},
    };
    const lightModeAdjustments = {
        'color-neutral-content': {l: 35},
        'color-neutral-content-disabled': {l: 85, s: s * 0.8},
        'color-neutral-content-weak': {l: 55},
        'color-neutral-content-strong': {l: 15},
        'color-neutral-background': {l: 98},
        'color-neutral-background-selected': {l: 91},
        'color-neutral-background-weak': {l: 96},
        'color-neutral-background-medium': {l: 95},
        'color-neutral-background-strong': {l: 98},
        'color-neutral-background-hover': {l: 93},
        'color-neutral-border-strong': {l: 15},
    };
    const adjustments = isDark ? darkModeAdjustments : lightModeAdjustments;
    const result = {};
    for (const [key, adjustment] of Object.entries(adjustments)) {
        // Ensure default s value is used if not explicitly overridden
        const adjustedS = adjustment.s !== undefined ? adjustment.s : s;
        result[key] = hslToHex(h, adjustedS, Math.min(Math.max(adjustment.l, 0), 100));
    }
    return result;
}

/**
 * Generates primary color tones based on the provided hex color.
 * @param {string} hex - The base color in hexadecimal format.
 * @param {boolean} isDark - Whether the base color is dark or light.
 * @return {Object} - An object containing the generated color tones.
 */
export function generatePrimaryColorTones(hex, isDark) {
    const [h, s, l] = hexToHSL(hex);
    const darkModeAdjustments = {
        'color-primary': {l: l - 5},
        'color-primary-hover': {l: l + 10},
        'color-primary-background': {l: l - 40},
        'color-primary-background-hover': {l: l - 30},
        'color-primary-background-selected': {l: l - 5},
    };
    const lightModeAdjustments = {
        'color-primary': {h: -5, s: 20, l: l -35},
        'color-primary-hover': {h: -10, s: 25, l: l -40},
        'color-primary-background': {h: -5, s: 20, l: l -35},
        'color-primary-background-hover': {h: -10, s: 25, l: l -40},
        'color-primary-background-selected': {h: -15, s: 30, l: l -45},
    };
    const adjustments = isDark ? darkModeAdjustments : lightModeAdjustments;
    const result = {};
    for (const [key, adjustment] of Object.entries(adjustments)) {
        // Adjust the lightness while keeping hue and saturation consistent
        const adjustedL = Math.min(Math.max(adjustment.l, 0), 100);
        result[key] = hslToHex(h, s, adjustedL);
    }
    return result;
}


/**
 * Generates secondary color tones based on the provided hex color.
 * @param {string} hex - The hex color value.
 * @param {boolean} isDark - Whether the base color is dark or light.
 * @return {Object} - An object containing the generated secondary color tones.
 */
export function generateSecondaryColorTones(hex, isDark) {
    const [h, s, l] = hexToHSL(hex); // Correctly destructure h, s, l from hexToHSL
    const lightModeAdjustments = {
        'color-secondary': {l: l - 40, s: s + 20}, // Darken slightly, increase saturation
        'color-secondary-weak': {l: l +5}, // Lighten slightly for a weaker appearance
        'color-secondary-background': {l: l + 40, s: s - 30}, // Much lighter, decrease saturation
        'color-secondary-background-hover': {l: l + 38, s: s - 30}, // Slightly darker than background
        'color-secondary-background-selected': {l: l + 36, s: s - 30}, // Slightly darker than hover
        'color-secondary-plain': {l: l - 40, s: s + 20}, // Same as color-secondary
    };
    const darkModeAdjustments = {
        'color-secondary': {l: l + 50},
        'color-secondary-weak': {l: l + 20, s: s + 10},
        'color-secondary-background': {l: l - 45},
        'color-secondary-background-hover': {l: l - 40},
        'color-secondary-background-selected': {l: l - 35},
        'color-secondary-plain': {l: l + 50},
    };
    const adjustments = isDark ? darkModeAdjustments : lightModeAdjustments;
    const result = {};
    for (const [key, {h: adjH = h, s: adjS = s, l: adjL}] of Object.entries(adjustments)) {
        // Apply the adjustment or use the base value (for h and s) if no adjustment is specified
        result[key] = hslToHex(adjH, adjS, Math.min(Math.max(adjL, 0), 100)); // Ensure lightness (l) is within 0-100
    }
    return result;
}


export const validateLink = (url) => {
    // Regular expression to check if the URL is valid
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
};
