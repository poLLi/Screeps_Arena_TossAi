import { ERR_NOT_IN_RANGE } from 'game/constants';
import { findClosestByRange } from 'game/utils';

export function melee(creep) {
    if (EN_CREEPS.length >= 1) {
        let nearstEnemy = findClosestByRange(creep, EN_CREEPS);

        if (creep.attack(nearstEnemy) == ERR_NOT_IN_RANGE) {
            creep.moveTo(nearstEnemy);
        }
    } else {
        if (creep.attack(EN_SPAWNS[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(EN_SPAWNS[0]);
        }
    }
}
