const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.recipe.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.recipe });
  },

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.recipe.search(ctx.query);
    } else {
      entities = await strapi.services.recipe.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.recipe })
    );
  },
};
