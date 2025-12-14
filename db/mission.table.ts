import { getDB } from './database';

export const initMissionTables = async () => {
  const db = await getDB();
  await db.execAsync(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS mission_lists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      lastUsedAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS missions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      listId INTEGER NOT NULL,
      title TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      FOREIGN KEY (listId)
        REFERENCES mission_lists (id)
        ON DELETE CASCADE
    );
  `);
};
