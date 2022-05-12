import { isFirstTick } from '../common';

export function loop() {
    if (isFirstTick()) {
        console.log('First Tick Console log');
    }
}
