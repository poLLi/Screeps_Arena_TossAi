import { StructureContainer } from 'game/prototypes';
import { RESOURCE_ENERGY } from 'game/constants';
import { getObjectsByPrototype, getRange } from 'game/utils';

export function hauler(creep) {
    const container = creep.findClosestByRange(getObjectsByPrototype(StructureContainer).filter(p => p.store.getUsedCapacity(RESOURCE_ENERGY)));

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
