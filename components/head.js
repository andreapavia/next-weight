import Head from 'next/head';

export default ({ title }) => (
    <Head>
        <title>Next Weight {(title !== undefined) ? `| ${title}` : ''}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width, height=device-height" />
        <meta name="description" content="Next weight tracking app" />
        <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400|Rubik" rel="stylesheet" />
    </Head>
)