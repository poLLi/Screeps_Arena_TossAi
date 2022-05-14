import { ERR_NOT_IN_RANGE } from 'game/constants';
import { findClosestByRange, getRange } from 'game/utils';
import { getTicks } from 'game/utils';

export function melee(creep) {
    if (EN_CREEPS.length >= 1) {
        let nearstEnemy = findClosestByRange(creep, EN_CREEPS);

        if (getTicks() < 150 && getRange(creep, nearstEnemy) >= 20) {
            if (MY_SPAWNS[0].x == 5) {
                creep.moveTo(MY_SPAWNS[0].x + 5, MY_SPAWNS[0].y);
            } else {
                creep.moveTo(MY_SPAWNS[0].x - 5, MY_SPAWNS[0].y);
            }
        } else {
            if (creep.attack(nearstEnemy) == ERR_NOT_IN_RANGE) {
                creep.moveTo(nearstEnemy);
            }
        }
    } else {
        if (getTicks() < 150) {
            if (MY_SPAWNS[0].x == 5) {
                creep.moveTo(MY_SPAWNS[0].x + 5, MY_SPAWNS[0].y);
            } else {
                creep.moveTo(MY_SPAWNS[0].x - 5, MY_SPAWNS[0].y);
            }
        } else {
            if (creep.attack(EN_SPAWNS[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(EN_SPAWNS[0]);
            }
        }
    }
}
