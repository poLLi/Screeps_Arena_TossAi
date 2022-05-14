import { isFirstTick } from '../shared';

export function loop() {
    if (isFirstTick()) {
        console.log('First Tick Console log');
    }
}
