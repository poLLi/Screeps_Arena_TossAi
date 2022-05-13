import { StructureContainer } from 'game/prototypes';
import { ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from 'game/constants';
import { getObjectsByPrototype } from 'game/utils';

export function hauler(creep) {
    const containers = getObjectsByPrototype(StructureContainer).filter(p => p.store[RESOURCE_ENERGY] > 0);

    if (creep.store[RESOURCE_ENERGY] == 0) {
        const container = creep.findClosestByPath(containers);

        if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(container);
        }
    } else {
        if (creep.transfer(MY_SPAWNS[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(MY_SPAWNS[0]);
        }
    }
}
