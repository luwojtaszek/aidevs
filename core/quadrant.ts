import { QdrantClient } from '@qdrant/js-client-rest';

export const ensureCollection = async (client: QdrantClient, collectionName: string): Promise<void> => {
  const result = await client.getCollections();

  const collectionExist = !!result.collections.find((collection) => collection.name === collectionName);

  if (!collectionExist) {
    await client.createCollection(collectionName, { vectors: { size: 1536, distance: 'Cosine', on_disk: true } });
  }
};
