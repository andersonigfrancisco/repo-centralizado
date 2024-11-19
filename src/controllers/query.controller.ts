import { Request, Response, RequestHandler } from 'express';
import { db1Service } from '../services/db1.service';
import { db2Service } from '../services/db2.service';

export const handleQuery: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { database, operation, model, query } = req.body;

  try {
    let result;

    if (database === 'db1') {
      if (model === 'users') {
        if (operation === 'select') result = await db1Service.findUsers(query);
        else if (operation === 'insert') result = await db1Service.addUser(query);
        else if (operation === 'update') result = await db1Service.updateUser(query.id, query.data);
        else if (operation === 'delete') result = await db1Service.deleteUser(query.id);
      }
    } else if (database === 'db2') {
      if (model === 'products') {
        if (operation === 'select') result = await db2Service.findProducts(query);
        else if (operation === 'insert') result = await db2Service.addProduct(query);
        else if (operation === 'update') result = await db2Service.updateProduct(query.id, query.data);
        else if (operation === 'delete') result = await db2Service.deleteProduct(query.id);
      }
    }

    res.json({ status: 'success', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'An error occurred while processing the request' });
  }
};
