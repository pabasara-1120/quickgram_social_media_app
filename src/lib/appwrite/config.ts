import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.APPWRITE_ENDPOINT,
  projectId:import.meta.env.PROJECT_ID ,
  databaseId: import.meta.env.DATABASE_ID,
  storageId:import.meta.env.STORAGE_ID ,
  userCollectionId:import.meta.env.USERCOLLECION_ID ,
  postCollectionId: import.meta.env.POSTSCOLLECTION_ID,
  savesCollectionId:import.meta.env.SAVESCOLLECTION_ID ,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);


