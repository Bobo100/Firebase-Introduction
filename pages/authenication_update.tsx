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
                    AuthenicationUpdate
                </h1>
                <p className="my-4">上一回我們學了如何使用Firebase的API來登入，現在我們要實作登入後的內容，像是讓你的使用者可以修改他的密碼，這些都是我們要學習的內容。</p>
                <h2 className="text-xl my-4 font-bold border p-2">修改Display Name</h2>
                <h2 className="text-xl my-4 font-bold border p-2">修改Email</h2>
                <h2 className="text-xl my-4 font-bold border p-2">修改Password</h2>

                <a href="https://homework-07-sso-login.vercel.app/" target="_blank" rel="noopener" className="text-black bg-title border-white font-semibold">實作範例</a>


            </div>
        </Layout>
    )
}

export default AuthenicationUpdatePage