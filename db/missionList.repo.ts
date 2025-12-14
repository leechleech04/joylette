import { getDB } from './database';

export type MissionListType = {
  id: number;
  title: string;
  lastUsedAt: string;
};

export const MissionListRepo = {
  create: async (title: string) => {
    const db = await getDB();
    const now = new Date().toISOString();

    const result = await db.runAsync(
      `INSERT INTO mission_lists (title, lastUsedAt) VALUES (?, ?)`,
      [title, now]
    );

    return result.lastInsertRowId;
  },

  getAll: async () => {
    const db = await getDB();
    return await db.getAllAsync<MissionListType>(
      `SELECT * FROM mission_lists ORDER BY lastUsedAt DESC, id DESC`
    );
  },

  getById: async (id: number) => {
    const db = await getDB();
    const row = await db.getFirstAsync<MissionListType>(
      `SELECT * FROM mission_lists WHERE id = ?`,
      [id]
    );
    return row || null;
  },

  rename: async (id: number, newTitle: string) => {
    const db = await getDB();
    const now = new Date().toISOString();

    const result = await db.runAsync(
      `UPDATE mission_lists SET title = ?, lastUsedAt = ? WHERE id = ?`,
      [newTitle, now, id]
    );

    return result.changes > 0;
  },

  use: async (id: number) => {
    const db = await getDB();
    const now = new Date().toISOString();

    const result = await db.runAsync(
      `UPDATE mission_lists SET lastUsedAt = ? WHERE id = ?`,
      [now, id]
    );

    return result.changes > 0;
  },

  delete: async (id: number) => {
    const db = await getDB();
    const result = await db.runAsync(`DELETE FROM mission_lists WHERE id = ?`, [
      id,
    ]);

    return result.changes > 0;
  },
};
