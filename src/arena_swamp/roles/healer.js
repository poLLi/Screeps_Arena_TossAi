import { ERR_NOT_IN_RANGE } from 'game/constants';

export function healer(creep) {
    let weakAlly = MY_CREEPS.find(p => p.hits < p.hitsMax);

    if (weakAlly) {
        if (creep.heal(weakAlly) == ERR_NOT_IN_RANGE) {
            creep.moveTo(weakAlly);
        }
    } else {
        if (MY_SPAWNS[0].x == 5) {
            creep.moveTo(MY_SPAWNS[0].x + 3, MY_SPAWNS[0].y);
        } else {
            creep.moveTo(MY_SPAWNS[0].x - 3, MY_SPAWNS[0].y);
        }
    }
}
