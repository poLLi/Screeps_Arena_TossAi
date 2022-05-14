import { StructureContainer } from 'game/prototypes';
import { ATTACK, RANGED_ATTACK, RESOURCE_ENERGY } from 'game/constants';
import { getObjectsByPrototype, getRange, findClosestByRange } from 'game/utils';
import { searchPath } from 'game/path-finder';

export function hauler(creep) {
    const container = creep.findClosestByRange(getObjectsByPrototype(StructureContainer).filter(p => p.store.getUsedCapacity(RESOURCE_ENERGY)));

    if (EN_CREEPS.length >= 1) {
        const enemyCreep = EN_CREEPS.filter(p => p.body.some(bp => bp.type == ATTACK) || p.body.some(bp => bp.type == RANGED_ATTACK));

        if (enemyCreep.length >= 1) {
            const nearstEnemy = findClosestByRange(creep, enemyCreep);

            if (getRange(nearstEnemy, creep) <= 5) {
                console.log('Hauler: AAAAAHHHHHHH!');
                creep.moveTo(searchPath(creep, nearstEnemy, { flee: true }));
                return;
            }
        }
    }

    if (creep.store.getUsedCapacity(RESOURCE_ENERGY)) {
        if (getRange(creep, MY_SPAWNS[0]) == 1) {
            creep.transfer(MY_SPAWNS[0], RESOURCE_ENERGY);
            creep.moveTo(container, { range: 1 });
        } else {
            creep.moveTo(MY_SPAWNS[0], { range: 1 });
        }
    } else {
        if (getRange(creep, container) == 1) {
            creep.withdraw(container, RESOURCE_ENERGY);
            creep.moveTo(MY_SPAWNS[0], { range: 1 });
        } else {
            creep.moveTo(container, { range: 1 });
        }
    }
}
