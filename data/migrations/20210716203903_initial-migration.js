
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name').notNullable
    table.string('project_description')
    table.integer('project_completed')
  })

  .createTable('resources', table => {
    table.increments('resource_id')
    table.string('resources_name').notNullable
    table.string('resource_description')
  })
  .createTable('tasks', table => {
    table.increments('task_id')
    table.string('task_description').notNullable
    table.string('task_notes')
    table.integer('task_completed')
    // project-id needs to be connected
    table.integer('project_id')

  })
  .createTable('project_resources', table => {
    // table.increments('project_resources_id')
    // resources
    table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
    // products
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
