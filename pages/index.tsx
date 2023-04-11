import Head from "next/head";
import Layout from '../components/layout';
import { useEffect } from "react";


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Firebase介紹</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    Firebase介紹
                </h1>
            </div>
        </Layout>
    )
}

export default HomePage