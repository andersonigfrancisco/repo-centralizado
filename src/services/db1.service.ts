import { db1 } from '../utils/db-connector-db1';
import { User } from '../models/db1/User.entity';

export const db1Service = {
  async findUsers(query: Record<string, any>) {
    const userRepository = db1.getRepository(User);

      const sqlOperatorsMap: { [key: string]: string } = {
      '$gte': '>=',
      '$lte': '<=',
      '$like': 'LIKE',
      '$in': 'IN',
    };

    const qb = userRepository.createQueryBuilder('User');

    for (const [key, value] of Object.entries(query)) {
      if (sqlOperatorsMap[key]) {
        const operator = sqlOperatorsMap[key];
        qb.andWhere(`User.${key.substring(1)} ${operator} :${key.substring(1)}`, { [`${key.substring(1)}`]: value });
      } else {
        qb.andWhere(`User.${key} = :${key}`, { [key]: value });
      }
    }

    return await qb.getMany();
  },

  async addUser(data: Partial<User>) {
    const userRepository = db1.getRepository(User);
    const user = userRepository.create(data);
    return await userRepository.save(user);
  },

  async updateUser(id: number, data: Partial<User>) {
    const userRepository = db1.getRepository(User);
    return await userRepository.update(id, data);
  },

  async deleteUser(id: number) {
    const userRepository = db1.getRepository(User);
    return await userRepository.delete(id);
  },
};
