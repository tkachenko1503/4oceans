import Document, {Head, Main, NextScript} from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang="ru">
      <Head>
        <title>Истории четырёх океанов</title>

        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>


        <meta name="theme-color" content="#ffffff"/>
        <link rel="icon" href="/static/favicon.png"/>

        <link rel="stylesheet" href="/static/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/common.css"/>
        <link rel="stylesheet" href="/_next/static/style.css"/>
      </Head>

      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}
