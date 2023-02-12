import Head from "next/head";

const HTMLHead = ({pageTitle}) => {
    return <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE + (pageTitle ? ` - ${pageTitle}` : '')}</title>
        <meta
            name="description"
            content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
        />
        <link rel="icon"
              href="/favicon.ico"/>
    </Head>
}

export default HTMLHead;