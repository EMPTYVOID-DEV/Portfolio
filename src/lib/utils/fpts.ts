import { flow } from 'fp-ts/function';

function base64ToBuffer(base64: string) {
	return Buffer.from(base64, 'base64');
}

function bufferToBlob(buffer: Buffer) {
	return new Blob([buffer]);
}

const base64ToBlob = flow(base64ToBuffer, bufferToBlob);
