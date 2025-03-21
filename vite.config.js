import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: '/qoricanchas/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
};