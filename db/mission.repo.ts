import { getDB } from './database';

export type MissionType = {
  id: number;
  listId: number;
  title: string;
  updatedAt: string;
};

export const MissionRepo = {
  create: async (listId: number, title: string) => {
    const db = await getDB();

    const result = await db.runAsync(
      `INSERT INTO missions (listId, title) VALUES (?, ?)`,
      [listId, title]
    );

    return result.lastInsertRowId;
  },

  getByListId: async (listId: number) => {
    const db = await getDB();
    return await db.getAllAsync<MissionType>(
      `SELECT * FROM missions WHERE listId = ? ORDER BY updatedAt DESC, id DESC`,
      [listId]
    );
  },

  getById: async (id: number) => {
    const db = await getDB();
    const row = await db.getFirstAsync<MissionType>(
      `SELECT * FROM missions WHERE id = ?`,
      [id]
    );
    return row || null;
  },

  rename: async (id: number, newTitle: string) => {
    const db = await getDB();
    const result = await db.runAsync(
      `UPDATE missions SET title = ? WHERE id = ?`,
      [newTitle, id]
    );

    return result.changes > 0;
  },

  delete: async (id: number) => {
    const db = await getDB();

    const result = await db.runAsync(`DELETE FROM missions WHERE id = ?`, [id]);

    return result.changes > 0;
  },

  countByListId: async (listId: number) => {
    const db = await getDB();
    const row = await db.getFirstAsync<{ count: number }>(
      `SELECT COUNT(*) as count FROM missions WHERE listId = ?`,
      [listId]
    );
    return row ? row.count : 0;
  },
};
