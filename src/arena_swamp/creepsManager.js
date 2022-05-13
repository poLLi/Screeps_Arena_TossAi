import { hauler } from './roles/hauler.js';
import { melee } from './roles/melee.js';
import { range } from './roles/range.js';
import { healer } from './roles/healer.js';
import { rangeDefender } from './roles/defender.js';

export function creepsManager() {
    MY_CREEPS.forEach(creep => {
        switch (creep.role) {
            case 'hauler':
                hauler(creep);
                break;

            case 'melee':
                melee(creep);
                break;

            case 'range':
                range(creep);
                break;

            case 'healer':
                healer(creep);
                break;

            case 'rangeDefender':
                rangeDefender(creep);
                break;

            default:
                console.log(`Creep is lost: ${JSON.stringify(creep)}`);
                break;
        }
    });
}
