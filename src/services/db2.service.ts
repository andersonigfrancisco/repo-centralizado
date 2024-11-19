import { db2 } from '../utils/db-connector-db2';
import { Product } from '../models/db2/Product.entity';

export const db2Service = {
  async findProducts(query: Partial<Product>) {
    const productRepository = db2.getRepository(Product);
    return await productRepository.find({ where: query });
  },

  async addProduct(data: Partial<Product>) {
    const productRepository = db2.getRepository(Product);
    const product = productRepository.create(data);
    return await productRepository.save(product);
  },

  async updateProduct(id: number, data: Partial<Product>) {
    const productRepository = db2.getRepository(Product);
    return await productRepository.update(id, data);
  },

  async deleteProduct(id: number) {
    const productRepository = db2.getRepository(Product);
    return await productRepository.delete(id);
  },
};
