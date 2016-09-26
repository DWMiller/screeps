Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], 'Upgrader1');

Game.creeps.Harvester1.memory.role = 'harvester';
Game.creeps.Upgrader1.memory.role = 'upgrader';

Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], 'Builder1', {
    role: 'builder'
});

Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
    'HarvesterBig', {
        role: 'harvester'
    });

var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
console.log('Harvesters: ' + harvesters.length);

var newName = Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], undefined, {
    role: 'harvester'
});
