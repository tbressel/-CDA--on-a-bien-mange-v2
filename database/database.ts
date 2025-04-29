import * as SQLite from 'expo-sqlite';
import { HistoryRow } from '../types/types';

const db = SQLite.openDatabaseSync('aliment.db');

export const initDatabase = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS aliments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT,
      barcode TEXT
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,          
      query TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

export const seedDatabase = async () => {
  await db.runAsync('DELETE FROM aliments;');

  await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Tomate', '3210987654321']);
  await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Banane', '1234567890123']);
  await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['cafe', '8000070201460']);
};

export const getAllAliments = async () => {
  return await db.getAllAsync('SELECT * FROM aliments;');
};


export const clearHistory = async () => {
  await db.runAsync('DELETE FROM history;');
  await db.runAsync('DELETE FROM sqlite_sequence WHERE name="history";');
};



export const searchByName = async (name: string) => {
  return await db.getAllAsync('SELECT * FROM aliments WHERE nom = ?;', [name]);
};

export const searchByBarcode = async (barcode: string) => {
  return await db.getAllAsync('SELECT * FROM aliments WHERE barcode = ?;', [barcode]);
};

export const addToHistory = async (type: 'name' | 'barcode', query: string) => {


  const existing: HistoryRow[] = await db.getAllAsync<HistoryRow>(
    'SELECT * FROM history WHERE type = ? AND query = ?;',
    [type, query]
  );

  if (existing.length === 0) {
    await db.runAsync(
      'INSERT INTO history (type, query) VALUES (?, ?);',
      [type, query]
    );
  }
};


export const getHistory = async (): Promise<{ type: string; query: string, barcode: string }[]> => {
  const result = await db.getAllAsync('SELECT * FROM history ORDER BY timestamp DESC;');
  return result as { type: string; query: string, barcode: string }[]; 
};
