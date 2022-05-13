import { ERR_NOT_IN_RANGE } from 'game/constants';
import { searchPath } from 'game/path-finder';
import { getRange, findClosestByRange } from 'game/utils';

export function range(creep) {
    if (EN_CREEPS.length >= 1) {
        let nearstEnemy = findClosestByRange(creep, EN_CREEPS);

        if (getRange(nearstEnemy, creep) <= 2) {
            creep.rangedAttack(nearstEnemy);
            creep.moveTo(searchPath(creep, nearstEnemy, { flee: true }));
            return;
        }

        if (creep.rangedAttack(nearstEnemy) == ERR_NOT_IN_RANGE) {
            if (getRange(nearstEnemy, creep) <= 2) {
                creep.moveTo(searchPath(creep, nearstEnemy, { flee: true }));
            } else {
                creep.moveTo(nearstEnemy);
            }
        }
    } else {
        if (creep.rangedAttack(EN_SPAWNS[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(EN_SPAWNS[0]);
        }
    }
}
