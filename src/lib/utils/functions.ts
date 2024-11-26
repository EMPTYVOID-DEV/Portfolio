export async function copyToKeyboard(text: string, timeout: number, cb: (state: boolean) => void) {
	navigator.clipboard.writeText(text);
	cb(true);
	await new Promise((res) => setTimeout(res, timeout));
	cb(false);
}

export function getColorLevels(color: string): [string, string, string] {
	const hexToRgb = (hex: string) => {
		// Remove the hash character (#) if it exists
		hex = hex.replace(/^#/, '');

		// Parse the hexadecimal value to RGB
		const bigint = parseInt(hex, 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;

		return [r, g, b];
	};

	const rgbColor = hexToRgb(color);

	const level800 = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
	const level400 = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.53)`;
	const level100 = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.14)`;

	return [level800, level400, level100];
}
