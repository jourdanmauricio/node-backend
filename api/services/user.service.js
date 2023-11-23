const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UserService {
  constructor() {}

  async create(data) {
    const rta = await models.User.create(data);
    return rta;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer'],
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User Not Found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
