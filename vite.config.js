import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: '/qoricanchas/',
  build: {outDir: 'build'},
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
};