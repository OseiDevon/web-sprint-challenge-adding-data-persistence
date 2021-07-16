
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {
    table.increments("project_id")
    table.string('project_name')
  })

  .createTable('resources', table => {
    table.increments("resource_id")
    table.string('resources_name')
  })
  .createTable('tasks', table => {
    table.increments("task_id")
    table.string('task_description')
  })
  // .createTable('project_resources')
};

exports.down = async function(knex) {
  await knex.schema
  // .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
