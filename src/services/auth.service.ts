const { User } = require("../../models");

class AuthService {
  async createUser(data: any) {
    try {
      return User.findOne({
        where: {
          email: "email",
        },
      });
    } catch (e) {
      return e;
    }
  }
  async findUserByEmail(email: string) {
    try {
      return User.findOne({
        where: {
          email,
        },
      });
    } catch (e) {
      return e;
    }
  }
}

export default new AuthService();
