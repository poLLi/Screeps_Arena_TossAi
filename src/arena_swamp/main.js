import { isFirstTick } from '../shared';
import { creepController } from './controller/creepController';
import { spawnController } from './controller/spawnController';
import '../shared/globals.js';

import { getTicks, getCpuTime } from 'game/utils';
import { arenaInfo } from 'game';

export function loop() {
    if (isFirstTick()) {
        console.log('First Tick Console log');
    }

    try {
        updateGlobals();
    } catch (err) {
        console.log('update error');
        console.log(err.stack);
    }

    spawnController();
    creepController();

    let cpuUsed = getCpuTime();
    let limit = getTicks() === 1 ? arenaInfo.cpuTimeLimitFirstTick : arenaInfo.cpuTimeLimit;
    let usedRatio = cpuUsed / limit;
    console.log('CPU: ' + Math.floor(usedRatio * 100) + ' %');
}
