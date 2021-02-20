
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', (table) => {
            table.increments('proj_id');
            // name: string, notnullable
            table.string('proj_name', 128).notNullable();
            // completed: boolean, notnullable 
            table.boolean('completed').defaultTo(0);
            //

        })
        .createTable('resources', (table) => {
            table.increments('resource_id');
            
            // name:string, notnullable
            table.string('resource_name', 128).notNullable().unique();
            table.string('resource_description');
        
        })
        .createTable('tasks', (table) => {
            table.increments('');
        });
};

exports.down = function(knex) {
  
};
