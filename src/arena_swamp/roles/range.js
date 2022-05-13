import { ERR_NOT_IN_RANGE } from 'game/constants';

export function range(creep) {
    if (EN_CREEPS.length > 0) {
        if (creep.rangedAttack(EN_CREEPS[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(EN_CREEPS[0]);
        }
    } else {
        if (creep.rangedAttack(EN_SPAWNS[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(EN_SPAWNS[0]);
        }
    }
}
