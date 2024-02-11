import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'boiasa3p',
  dataset: 'production',
  useCdn: true,
  apiVerion: '2022-02-03',
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export default client;
