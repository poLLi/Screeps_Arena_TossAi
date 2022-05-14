import { MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL } from 'game/constants';
import { isSpawning, enoughSpawnEnergy, createCreep } from '../../shared';

const haulerCount = 2;
const meleeCount = 4;
const rangeCount = 6;
const healerCount = 2;
const rangeDefenderCount = 2;

export function spawnController() {
    MY_SPAWNS.forEach(spawn => {
        if (isSpawning(spawn)) return;

        if (ROLES.hauler.length < haulerCount) {
            console.log('Spawn: hauler');
            const parts = [MOVE, CARRY];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'hauler');
            return;
        }

        if (ROLES.melee.length < meleeCount) {
            console.log('Spawn: melee');
            const parts = [MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'melee');
            return;
        }

        if (ROLES.range.length < rangeCount) {
            console.log('Spawn: ranged');
            const parts = [MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'range');
            return;
        }

        if (ROLES.healer.length < healerCount) {
            console.log('Spawn: healer');
            const parts = [MOVE, MOVE, MOVE, HEAL, HEAL];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'healer');
            return;
        }

        if (ROLES.rangeDefender.length < rangeDefenderCount) {
            console.log('Spawn: defender');
            const parts = [MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
            if (!enoughSpawnEnergy(parts, spawn)) return;
            createCreep(parts, spawn, 'rangeDefender');
            return;
        }
    });
}
