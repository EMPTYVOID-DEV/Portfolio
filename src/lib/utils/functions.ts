export async function copyToKeyboard(text: string, timeout: number, cb: (state: boolean) => void) {
	navigator.clipboard.writeText(text);
	cb(true);
	await new Promise((res) => setTimeout(res, timeout));
	cb(false);
}

export function getColorLevels(color: string): [string, string, string] {
	const hexToRgb = (hex: string): [number, number, number] => {
		const cleanHex = hex.replace(/^#/, '');
		const hexValue = parseInt(cleanHex, 16);

		const RED_SHIFT = 16;
		const GREEN_SHIFT = 8;
		const BYTE_MASK = 0xff; // 255 in hex

		const red = (hexValue >> RED_SHIFT) & BYTE_MASK;
		const green = (hexValue >> GREEN_SHIFT) & BYTE_MASK;
		const blue = hexValue & BYTE_MASK;

		return [red, green, blue];
	};

	const [red, green, blue] = hexToRgb(color);

	const OPACITY_MEDIUM = 0.53;
	const OPACITY_LIGHT = 0.14;

	const level800 = `rgb(${red}, ${green}, ${blue})`;
	const level400 = `rgba(${red}, ${green}, ${blue}, ${OPACITY_MEDIUM})`;
	const level100 = `rgba(${red}, ${green}, ${blue}, ${OPACITY_LIGHT})`;

	return [level800, level400, level100];
}
