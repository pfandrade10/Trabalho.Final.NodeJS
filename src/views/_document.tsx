import React from 'react';
import { Document, Head, Main } from '@react-ssr/express';

interface Props {
  crossorigin?: string;
}

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title> Lista de Tarefas </title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
