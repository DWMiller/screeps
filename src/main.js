let roles = {
    harvester: require('role.harvester')(),
    upgrader: require('role.upgrader')(),
    builder: require('role.builder')()
}

module.exports.loop = function() {

    // for (var name in Game.rooms) {
    //     console.log('Room "' + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
    // }

    for (var spawn in Game.spawns) {
        // Game.spawns[spawn]energyAvailable":223
        Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], undefined, {
            role: 'harvester'
        });
    }

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        roles[creep.memory.role].run(creep);

    }
}
