import Head from "next/head";
import Layout from '../components/layout';
import Image from "next/image";

import firestore_database_01 from "../public/images/firestore database/firestore database_1.png";
import firestore_database_02 from "../public/images/firestore database/firestore database_2.png";
import firestore_database_03 from "../public/images/firestore database/firestore database_3.png";
import firestore_database_04 from "../public/images/firestore database/firestore database_4.png";
import firestore_database_05 from "../public/images/firestore database/firestore database_5.png";
import firestore_database_06 from "../public/images/firestore database/firestore database_6.png";
import firestore_database_07 from "../public/images/firestore database/firestore database_7.png";
import firestore_database_08 from "../public/images/firestore database/firestore database_8.png";
function FirestoreDataBasePage() {
    return (
        <Layout>
            <Head>
                <title>FirestoreDataBasePage</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    Firestore Database
                </h1>
                <p className="mt-4">
                    Firestore Database就像是一個資料庫，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料，這些都是我們可以使用FirestoreDataBase的地方。
                    例如：可能很多人用過的mySQL，就是一個資料庫，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料。
                </p>
                <p className="mt-4">
                    Firestore Database是一個NoSQL資料庫，也就是非關聯式資料庫。
                    如果您需要存儲非結構化數據，例如大量文本，圖像或音頻數據，您可以使用非關聯型資料庫。
                </p>
                <p className="mt-4">
                    主打可即時推送更新、建立功能強大的查詢，備自動調整資源配置功能。
                </p>

                <h2 className="text-xl my-4 font-bold border p-2">Firestore Database具有以下特性：</h2>
                <ul className="list-decimal list-inside border border-title p-3 mt-4">
                    <li>即時更新：會立即將資料更新到所有連接的客戶端。</li>
                    <li>即時查詢：允許您根據文件內的值對數據進行複雜的查詢，並迅速地獲取結果。相比於傳統關聯式資料庫中的查詢方式，Firestore 的查詢效率更高。</li>
                    <li>可擴展性：具有良好的擴展性，可以處理大量的數據和流量，而無需進行額外的配置。</li>
                    <li>安全性：支援基於規則的安全性控制，您可以使用規則來限制用戶對數據的讀取和寫入權限。此外，Firestore 還提供了完整的 SSL 加密，以保護您的數據傳輸安全。</li>
                    <li>彈性：具有良好的彈性，可使用多種平台或開發工具（包括 iOS、Android、Web、React Native 等）來存取數據庫。</li>
                </ul>

                <p className="mt-4">下面我們會介紹如何使用Firestore Database。</p>
                <h2 className="text-xl my-4 font-bold border p-2">第一步：開啟Firestore Database功能</h2>
                <p className="mt-4">首先，我們需要開啟Firestore Database功能，這樣我們才能使用Firestore Database。
                    你可以從左邊的導覽列點選「建構」，然後點選「Firestore Database」，接著點選「建立資料庫」。
                </p>
                <Image src={firestore_database_01} alt="firestore_database_01" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第二步：建立資料庫</h2>
                <p className="mt-4">因為我們等等需要測試，所以請點選「測試模式」，然後點選「繼續」。</p>
                <Image src={firestore_database_02} alt="firestore_database_02" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第三步：選擇地區</h2>
                <p className="mt-4">接著，我們需要選擇地區，選擇與你的網站上架的地區最接近的地區，這樣可以讓你的網站的速度更快。選好後，就可以點選「啟用」。</p>
                <Image src={firestore_database_03} alt="firestore_database_03" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第四步：建立集合</h2>
                <p className="mt-4">接著，我們需要建立集合。集合就像是一個資料表，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料。</p>
                <Image src={firestore_database_04} alt="firestore_database_04" className="my-4" width={750} />
                <p className="mt-4">點選「建立集合」，然後輸入集合名稱，例如：users，然後點選「建立」。</p>
                <Image src={firestore_database_05} alt="firestore_database_05" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第五步：建立文件</h2>
                <p className="mt-4">接著，我們需要建立文件，文件都是在集合中的，所以我們需要先建立集合，然後才能建立文件。文件就像是一個資料表中的一筆資料，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料。</p>
                <p className="mt-4">所以，文件可以去設定一個使用者的資料，例如：名字、電話、地址等等。</p>
                <p className="mt-4">支援的type有：</p>
                <ul className="list-decimal list-inside border border-title p-3 mt-4">
                    <li>string</li>
                    <li>number</li>
                    <li>boolean</li>
                    <li>map：裡面可以在放入其他的type</li>
                    <li>array：裡面可以在放入其他的type(除了不能再放入map)，意思是你不能array下直接放一個array，但你可以放入map在map裡面放入array，意思就是array裡面放入map，而map裡面放入array</li>
                    <li>null</li>
                    <li>timestamp</li>
                    <li>geopoint</li>
                    <li>reference</li>
                </ul>
                <p className="mt-4">點選要新增的集合，然後點選「新增文件」。</p>
                <Image src={firestore_database_06} alt="firestore_database_06" className="my-4" width={750} />
                <p className="mt-4">然後輸入文件名稱，例如：user1或是自動產生id，然後輸入資料，例如：</p>
                <Image src={firestore_database_07} alt="firestore_database_07" className="my-4" width={750} />
                <p className="mt-4">點選「儲存」，就可以新增一筆資料了。</p>
                <p className="mt-4">就可以看到我們新增了一筆資料。</p>
                <Image src={firestore_database_08} alt="firestore_database_08" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第六步：讓網站可以存取Firestore Database(包含新增、修改、刪除、取得資料)</h2>


            </div>
        </Layout>
    )
}

export default FirestoreDataBasePage