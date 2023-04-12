import Head from "next/head";
import Layout from '../components/layout';
function AuthenicationUpdatePage() {
    return (
        <Layout>
            <Head>
                <title>AuthenicationUpdatePage</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    AuthenicationUpdatePage
                </h1>
                <p className="my-4">上一回我們學了如何使用Firebase的API來登入，現在我們要實作登入後的內容，像是讓你的使用者可以修改他的密碼，這些都是我們要學習的內容。</p>

            </div>
        </Layout>
    )
}

export default AuthenicationUpdatePage