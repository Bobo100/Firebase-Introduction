import Head from "next/head";
import Layout from '../components/layout';
import Image from "next/image";

import storage_01 from '../public/images/storage/storage_1.png';
import storage_02 from '../public/images/storage/storage_2.png';

function StoragePage() {
    return (
        <Layout>
            <Head>
                <title>StoragePage</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    Storage
                </h1>
                <p className="mt-4">
                    Storage是可以讓我們上傳資料，以利於我們之後的使用，像是上傳圖片，或是上傳一些檔案，這些都是我們可以使用Storage的地方。
                </p>
                <p className="mt-4">
                    主打不需要伺服器程式碼，也能儲存及擷取使用者產生的圖片、音樂、影片、文件等檔案。
                </p>

                <p className="mt-4">下面我們會介紹如何使用Storage</p>
                <h2 className="text-2xl font-bold mt-4">第一步：開啟Storage功能</h2>
                <p className="mt-4">
                    首先我們要先開啟Storage功能，這樣我們才能使用Storage。
                    你可以從左邊的導覽列點選「建構」，然後點選「Storage」，接著點選「開始使用」。
                </p>
                <Image src={storage_01} alt="storage_01" className="my-4" width={750} />

                <h2 className="text-2xl font-bold mt-4">第二步：建立Storage</h2>
                <p className="mt-4">因為我們等等需要測試，所以請點選「測試模式」，然後點選「繼續」。</p>
                <Image src={storage_02} alt="storage_02" className="my-4" width={750} />





            </div>
        </Layout>
    )
}

export default StoragePage