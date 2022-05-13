import { ERR_NOT_IN_RANGE } from 'game/constants';
import { findClosestByRange, getRange } from 'game/utils';

export function rangeDefender(creep) {
    if (EN_CREEPS.length > 0) {
        let nearstEnemy = findClosestByRange(creep, EN_CREEPS);
        if (nearstEnemy && getRange(creep, nearstEnemy) <= 10) {
            if (creep.rangedAttack(nearstEnemy) == ERR_NOT_IN_RANGE) {
                creep.moveTo(nearstEnemy);
            }
        } else {
            creep.moveTo(MY_SPAWNS[0].x + 5, MY_SPAWNS[0].y);
        }
    } else {
        creep.moveTo(MY_SPAWNS[0].x + 3, MY_SPAWNS[0].y);
    }
}
