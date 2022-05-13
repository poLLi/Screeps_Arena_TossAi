import { getTicks } from 'game/utils';
import { Creep } from 'game/prototypes';
import { getObjectsByPrototype } from 'game/utils';
import { RESOURCE_ENERGY } from 'game/constants';

export function isFirstTick() {
    return getTicks() === 1;
}

export function isSpawning(structure) {
    return getObjectsByPrototype(Creep).some(creep => creep.x == structure.x && creep.y == structure.y);
}

export function enoughSpawnEnergy(parts, spawn) {
    let cost = 0;
    for (let i = 0; i < parts.length; i++) {
        cost += global.BODY_PARTS[parts[i].toUpperCase()];
    }

    if (spawn.store[RESOURCE_ENERGY] < cost) {
        return false;
    } else {
        return true;
    }
}

export function createCreep(parts, spawn, role) {
    let newCreep = spawn.spawnCreep(parts).object;
    newCreep.role = role;
    return true;
}
