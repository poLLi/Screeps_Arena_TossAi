import { MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL } from 'game/constants';
import { isSpawning, enoughSpawnEnergy, createCreep } from '../shared';

const haulerCount = 3;
const meleeCount = 6;
const rangeCount = 3;
const healerCount = 2;
const rangeDefenderCount = 2;

export function spawnManager() {
    MY_SPAWNS.forEach(spawn => {
        if (isSpawning(spawn)) return;

        if (ROLES.hauler.length < haulerCount) {
            const parts = [MOVE, MOVE, CARRY, CARRY];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'hauler');
            return;
        }

        if (ROLES.melee.length < meleeCount) {
            const parts = [MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'melee');
            return;
        }

        if (ROLES.range.length < rangeCount) {
            const parts = [MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'range');
            return;
        }

        if (ROLES.healer.length < healerCount) {
            const parts = [MOVE, MOVE, MOVE, HEAL, HEAL];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'healer');
            return;
        }

        if (ROLES.rangeDefender.length < rangeDefenderCount) {
            const parts = [MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'rangeDefender');
            return;
        }
    });
}
