export type StoredMedia = { id: string; name: string; type: string; size: number; createdAt: string; blob: Blob };
const DB_NAME = 'myfitness-media-db';
const DB_VERSION = 1;
const STORE = 'media';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Could not open media database'));
  });
}

export async function saveMedia(file: File): Promise<StoredMedia> {
  const item: StoredMedia = { id: crypto.randomUUID(), name: file.name, type: file.type || 'application/octet-stream', size: file.size, createdAt: new Date().toISOString(), blob: file };
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error('Could not save media'));
    tx.onabort = () => reject(tx.error || new Error('Media save was cancelled'));
  });
  db.close();
  return item;
}

export async function getAllMedia(): Promise<StoredMedia[]> {
  const db = await openDb();
  const result = await new Promise<StoredMedia[]>((resolve, reject) => {
    const request = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
    request.onsuccess = () => resolve(request.result as StoredMedia[]);
    request.onerror = () => reject(request.error || new Error('Could not read media'));
  });
  db.close();
  return result;
}

export async function deleteMedia(ids: string[]): Promise<void> {
  if (!ids.length) return;
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    ids.forEach(id => tx.objectStore(STORE).delete(id));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error('Could not delete media'));
  });
  db.close();
}

export async function requestPersistentStorage(): Promise<boolean> {
  if (!navigator.storage?.persist) return false;
  return navigator.storage.persist();
}
