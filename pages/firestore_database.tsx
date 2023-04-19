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
import { DocumentData, addDoc, collection, doc, getDocs, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/init-firebase";
import { ReactNode, useState } from "react";
import uuid from "react-uuid";
import { CopyToClipboard } from "../components/Code/CopyToClipboard";
function FirestoreDataBasePage() {

    const [data, setData] = useState<DocumentData[]>([]);

    // 取得Collection的資料
    const getCollectionData = async () => {
        const collectionRef = collection(db, "First");

        const collectionSnapshot = await getDocs(collectionRef);

        const collections = collectionSnapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
        }))

        setData(collections);
        console.log(collections);
    }

    // 新增Document到Collection
    const uploadDocumentWithRandomId = async () => {
        const collectionRef = collection(db, "First");
        await addDoc(collectionRef, {
            name: "First",
            age: 18,
        });
    }

    // 新增Document到Collection，並自訂ID
    const uploadDocumentWithId = async () => {
        const collectionRef = collection(db, "First");
        const docRef = doc(collectionRef, "custom-id")
        const data = {
            name: "First",
            age: 18,
        }

        // 如果文件不存在，則會創建文件。如果文件已存在，則會覆蓋文件。
        await setDoc(docRef, data);
    }

    // 更新Document
    const updateDocument = async () => {
        const collectionRef = collection(db, "First");
        const docRef = doc(collectionRef, "custom-id")
        const data = {
            name: "First",
            age: 20,
        }

        // 如果文件不存在，則會有錯誤
        await updateDoc(docRef, data);
    }

    return (
        <Layout>
            <Head>
                <title>FirestoreDataBasePage</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    Firestore Database
                </h1>
                <p className="my-4">
                    Firestore Database就像是一個資料庫，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料，這些都是我們可以使用FirestoreDataBase的地方。
                    例如：可能很多人用過的mySQL，就是一個資料庫，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料。
                </p>
                <p className="my-4">
                    Firestore Database是一個NoSQL資料庫，也就是非關聯式資料庫。
                    如果您需要存儲非結構化數據，例如大量文本，圖像或音頻數據，您可以使用非關聯型資料庫。
                </p>
                <p className="my-4">
                    主打可即時推送更新、建立功能強大的查詢，備自動調整資源配置功能。
                </p>

                <h2 className="text-xl my-4 font-bold border p-2">Firestore Database具有以下特性：</h2>
                <ul className="list-decimal list-inside border border-title p-3 my-4">
                    <li>即時更新：會立即將資料更新到所有連接的客戶端。</li>
                    <li>即時查詢：允許您根據文件內的值對數據進行複雜的查詢，並迅速地獲取結果。相比於傳統關聯式資料庫中的查詢方式，Firestore 的查詢效率更高。</li>
                    <li>可擴展性：具有良好的擴展性，可以處理大量的數據和流量，而無需進行額外的配置。</li>
                    <li>安全性：支援基於規則的安全性控制，您可以使用規則來限制用戶對數據的讀取和寫入權限。此外，Firestore 還提供了完整的 SSL 加密，以保護您的數據傳輸安全。</li>
                    <li>彈性：具有良好的彈性，可使用多種平台或開發工具（包括 iOS、Android、Web、React Native 等）來存取數據庫。</li>
                </ul>

                <p className="my-4">下面我們會介紹如何使用Firestore Database。</p>
                <h2 className="text-xl my-4 font-bold border p-2">第一步：開啟Firestore Database功能</h2>
                <p className="my-4">首先，我們需要開啟Firestore Database功能，這樣我們才能使用Firestore Database。
                    你可以從左邊的導覽列點選「建構」，然後點選「Firestore Database」，接著點選「建立資料庫」。
                </p>
                <Image src={firestore_database_01} alt="firestore_database_01" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第二步：建立資料庫</h2>
                <p className="my-4">因為我們等等需要測試，所以請點選「測試模式」，然後點選「繼續」。</p>
                <Image src={firestore_database_02} alt="firestore_database_02" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第三步：選擇地區</h2>
                <p className="my-4">接著，我們需要選擇地區，選擇與你的網站上架的地區最接近的地區，這樣可以讓你的網站的速度更快。選好後，就可以點選「啟用」。</p>
                <Image src={firestore_database_03} alt="firestore_database_03" className="my-4" width={750} />

                <h1 className="text-3xl font-bold">到這邊我們就準備來建立資料庫了。</h1>
                <p className="my-4">首先我們要了解Firestore Database和傳統的SQL是不同的</p>
                <p className="my-4">在Firestore Database中資料庫是以集合（Collection）為單位，而集合中的資料是以文件（Document）為單位。</p>
                <p className="my-4">集合就像是一個資料庫，而文件就像是一個資料表。每個集合可以包含許多文件，而每個文件則可以包含欄位和各種類型的資料。集合類似於 SQL 資料庫中的表格，而文件類似於資料表中的紀錄。但是，Firestore Database 允許您在文件中建立子集合以更好地組織和存儲資料。</p>
                <p className="my-4">差不多了解這樣就好，我們繼續。</p>
                <h2 className="text-xl my-4 font-bold border p-2">第四步：建立集合</h2>
                <p className="my-4">接著，我們需要建立集合。集合就像是一個資料表，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料。</p>
                <Image src={firestore_database_04} alt="firestore_database_04" className="my-4" width={750} />
                <p className="my-4">點選「建立集合」，然後輸入集合名稱，例如：users，然後點選「建立」。</p>
                <Image src={firestore_database_05} alt="firestore_database_05" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第五步：建立文件</h2>
                <p className="my-4">接著，我們需要建立文件，文件都是在集合中的，所以我們需要先建立集合，然後才能建立文件。文件就像是一個資料表中的一筆資料，我們可以把資料放在裡面，然後我們可以透過API來取得資料，或是修改資料。</p>
                <p className="my-4">所以，文件可以去設定一個使用者的資料，例如：名字、電話、地址等等。</p>
                <p className="my-4">支援的type有：</p>
                <ul className="list-decimal list-inside border border-title p-3 my-4">
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
                <p className="my-4">點選要新增的集合，然後點選「新增文件」。</p>
                <Image src={firestore_database_06} alt="firestore_database_06" className="my-4" width={750} />
                <p className="my-4">然後輸入文件名稱，例如：user1或是自動產生id，然後輸入資料，例如：</p>
                <Image src={firestore_database_07} alt="firestore_database_07" className="my-4" width={750} />
                <p className="my-4">點選「儲存」，就可以新增一筆資料了。</p>
                <p className="my-4">就可以看到我們新增了一筆資料。</p>
                <Image src={firestore_database_08} alt="firestore_database_08" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第六步：讓網站可以存取Firestore Database(包含新增、修改、刪除、取得資料)</h2>
                <h3 className="text-lg my-4 font-bold border p-2">取得資料</h3>
                <p className="my-4">首先，先來取得資料。流程會是先抓取Collection的位置，之後再抓取Document的位置，最後再抓取資料。</p>
                <p className="my-4">我們可以透過firebase提供的api來進行，使用collection()來抓取Collection的位置，collection後面填上我們最一開始初始化的db，然後填上我們要抓取的Collection名稱，例如：First。</p>
                <p className="my-4">然後，我們使用getDocs()來抓取Document的位置，getDocs後面填上我們剛剛抓取的Collection位置，然後我們可以使用map()來跑迴圈，把每一筆資料都抓出來。</p>
                <CopyToClipboard>
                    {`// collection data 
const [data, setData] = useState<DocumentData[]>([]);

const getCollectionData = async () => {
    // 取得Collection位置
    const collectionRef = collection(db, "First");

    // 取得Collection下面的所有Document
    const collectionSnapshot = await getDocs(collectionRef);

    // Loop Document 然後把資料放入到陣列中
    const collections = collectionSnapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
    }))

    setData(collections);
    console.log(collections);
}`}
                </CopyToClipboard>
                <p className="my-4">完成後，可以綁進去button就可以實現抓取資料。
                    <button onClick={getCollectionData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">取得資料</button>
                </p>
                {data && data.map((item, index) => {
                    return (
                        <div key={uuid()} className="border border-title p-3 my-4">
                            <p>姓名：{item.data.name}</p>
                            <p>年齡：{item.data.age}</p>
                        </div>
                    )
                })}

                <h3 className="text-lg my-4 font-bold border p-2">新增資料</h3>
                <p className="my-4">新增資料的流程有兩種，分成隨機ID和自訂ID。</p>
                <div className="border my-4">
                    <p className="my-4">隨機ID：就是讓Firebase自己產生一個ID，然後把資料放在裡面。</p>
                    <p className="my-4">流程會試先抓取Collection的位置，之後就可以新增資料了。</p>
                    <CopyToClipboard>
                        {`// 新增Document到Collection
const uploadDocumentWithRandomId = async () => {
    const collectionRef = collection(db, "First");
    await addDoc(collectionRef, {
        name: "First",
        age: 18,
    });
}`}
                    </CopyToClipboard>
                    {/* <button onClick={uploadDocumentWithRandomId} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">新增資料(隨機ID)</button> */}
                </div>

                <div className="border my-4">
                    <p className="my-4">自訂ID：就是我們自己產生一個ID，然後把資料放在裡面。</p>
                    <p className="my-4">流程會試先抓取Collection的位置，之後創建一個Document的ID，然後把資料放在裡面。注意，如果id已經存在，就會覆蓋掉原本的資料。是覆蓋喔！！！</p>
                    <CopyToClipboard>
                        {`// 新增Document到Collection，並自訂ID
const uploadDocumentWithId = async () => {
    const collectionRef = collection(db, "First");
    const docRef = doc(collectionRef, "custom-id")
    const data = {
        name: "First",
        age: 18,
    }

    // 如果文件不存在，則會創建文件。如果文件已存在，則會覆蓋文件。
    await setDoc(docRef, data);
}`}
                    </CopyToClipboard>
                    {/* <button onClick={uploadDocumentWithId} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">新增資料(自訂ID)</button> */}
                </div>

                <h3 className="text-lg my-4 font-bold border p-2">修改資料</h3>
                <p className="my-4">修改資料的步驟基本上就跟新增資料(自訂ID)一樣，只是把setDoc改成updateDoc就可以了。</p>
                <CopyToClipboard>
                    {`// 修改Document
const updateDocument = async () => {
    const collectionRef = collection(db, "First");
    const docRef = doc(collectionRef, "custom-id")
    const data = {
        name: "First",
        age: 20,
    }

    // 如果文件不存在，會拋出一個錯誤。
    await updateDoc(docRef, data);
}`}
                </CopyToClipboard>
                {/* <button onClick={updateDocument} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">修改資料</button> */}


            </div>
        </Layout >
    )
}

export default FirestoreDataBasePage