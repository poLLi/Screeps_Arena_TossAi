import { hauler } from '../roles/hauler';
import { melee } from '../roles/melee';
import { range } from '../roles/range';
import { healer } from '../roles/healer';
import { rangeDefender } from '../roles/defender';

export function creepsController() {
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
