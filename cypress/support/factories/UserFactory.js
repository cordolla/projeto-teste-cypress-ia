import { faker } from '@faker-js/faker';

class UserFactory {
  /**
   * Retorna um usuário contendo dados válidos aleatórios
   */
  getUsuarioValido() {
    return {
      usuario: faker.internet.userName(),
      senha: faker.internet.password({ length: 12 }),
      email: faker.internet.email()
    };
  }

  /**
   * Retorna um usuário com dados incorretos
   */
  getUsuarioIncorreto() {
    return {
      usuario: 'locked_out_user',
      senha: 'wrong_password_123', // Senha estática incorreta
    };
  }
}

export const userFactory = new UserFactory();
