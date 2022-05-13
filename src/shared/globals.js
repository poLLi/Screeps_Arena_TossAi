import { Creep, StructureSpawn, OwnedStructure } from 'game/prototypes';
import { getObjectsByPrototype } from 'game/utils';

global.MY_CREEPS = [];
global.MY_SPAWNS = [];
global.MY_STRUCTS = [];

global.EN_CREEPS = [];
global.EN_SPAWNS = [];
global.EN_STRUCTS = [];

global.ROLES = {
    hauler: [],
    melee: [],
    range: [],
    healer: [],
    rangeDefender: [],
};

global.BODY_PARTS = {
    MOVE: 50,
    WORK: 100,
    CARRY: 50,
    ATTACK: 80,
    RANGED_ATTACK: 150,
    HEAL: 250,
    TOUGH: 10,
};

global.updateGlobals = function () {
    MY_CREEPS = getObjectsByPrototype(Creep).filter(p => p.my);
    MY_SPAWNS = getObjectsByPrototype(StructureSpawn).filter(p => p.my);
    MY_STRUCTS = getObjectsByPrototype(OwnedStructure).filter(p => typeof p.my !== 'undefined' && p.my);

    EN_CREEPS = getObjectsByPrototype(Creep).filter(p => !p.my);
    EN_SPAWNS = getObjectsByPrototype(StructureSpawn).filter(p => !p.my);
    EN_STRUCTS = getObjectsByPrototype(OwnedStructure).filter(p => typeof p.my !== 'undefined' && !p.my);

    ROLES.hauler = MY_CREEPS.filter(p => p.my && p.role == 'hauler');
    ROLES.melee = MY_CREEPS.filter(p => p.my && p.role == 'melee');
    ROLES.range = MY_CREEPS.filter(p => p.my && p.role == 'range');
    ROLES.healer = MY_CREEPS.filter(p => p.my && p.role == 'healer');
    ROLES.rangeDefender = MY_CREEPS.filter(p => p.my && p.role == 'rangeDefender');
};
