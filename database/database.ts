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
  await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['cafe2', '3560071472276']);
  await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Tomate', '3210987654321']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Banane', '1234567890123']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Café', '8000070201460']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Pomme', '9780201379624']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Pain complet', '9780262033848']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Riz basmati', '9780131103627']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Poulet rôti', '9780596007126']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Yaourt nature', '9781449355739']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Beurre doux', '9780590353428']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Lait demi-écrémé', '9780321146533']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Carotte', '9780131101630']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Brocoli', '9780131103627']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Thon en boîte', '9780201616224']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Chocolat noir', '9780132350885']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Farine de blé', '9780321751041']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Huile d\'olive', '9780134685993']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Sel de mer', '9781491950296']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Sucre roux', '9780131103628']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Miel', '9781449331818']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Poivre noir', '9780132356130']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Œufs bio', '9780131103628']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Jambon blanc', '9780135957050']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Sardines', '9781491904244']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Haricots verts', '9780596009206']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Lentilles corail', '9781449365035']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Pois chiches', '9780131101630']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Épinards', '9781491978917']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Fromage râpé', '9781449331818']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Tofu', '9780131103627']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Lait d\'amande', '9780131101630']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Saumon fumé', '9780131103627']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Boeuf haché', '9780131103628']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Céréales', '9781491901427']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Pizza surgelée', '9780131103703']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Frites', '9780131103629']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Glace vanille', '9780131103620']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Biscuits', '9780131101627']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Jus d\'orange', '9780131102624']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Compote de pommes', '9780131103636']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Lait de coco', '9780131104633']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Confiture de fraises', '9780131105644']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Cornichons', '9780131106640']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Champignons', '9780131107651']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Oignons', '9780131108662']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Pâtes complètes', '9780131109673']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Crème fraîche', '9780131110684']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Steak végétal', '9780131111695']);
await db.runAsync('INSERT INTO aliments (nom, barcode) VALUES (?, ?);', ['Eau minérale', '9780131112705']);

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
