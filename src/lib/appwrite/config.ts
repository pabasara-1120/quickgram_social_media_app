import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '666d89fd001f3f4a8d04',
  databaseId: '666d92900000f590445b',
  storageId: '666d918d001fb1af3c51',
  userCollectionId: '666d93a3000379eac470',
  postCollectionId: '666d92dd0023e338e7db',
  savesCollectionId: '666d9447001afb50c382',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);


