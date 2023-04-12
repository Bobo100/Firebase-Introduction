import Head from "next/head";
import Layout from '../components/layout';
import Image from "next/image";

import firebase_01 from "../public/images/firebase/firebase_1.png";
import firebase_02 from "../public/images/firebase/firebase_2.png";
import firebase_03 from "../public/images/firebase/firebase_3.png";
import firebase_04 from "../public/images/firebase/firebase_4.png";
import firebase_05 from "../public/images/firebase/firebase_5.png";
import firebase_06 from "../public/images/firebase/firebase_6.png";
import firebase_07 from "../public/images/firebase/firebase_7.png";
import firebase_08 from "../public/images/firebase/firebase_8.png";
import Link from "next/link";

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
                <p className="my-4 p-2 border-2 border-title font-semibold bg-black">
                    本篇是基於React使用Firebase的教學，如果你想要使用其他的語言，例如：Vue、Angular、Node.js等等，可以參考Firebase的官方文件。
                </p>
                <p className="my-4">
                    Firebase是Google推出的一個平台，可以讓開發者快速的開發網站或是手機應用程式，而不需要自己架設伺服器，也不需要自己開發後端的功能，例如：資料庫、身分驗證、雲端儲存等等，只要使用Firebase提供的API，就可以快速的開發出一個網站或是手機應用程式。
                </p>
                <p>我們會介紹以下幾個Firebase的功能：</p>
                <ul className="list-disc list-inside">
                    <li>身分驗證 (Authenication)</li>
                    <li>儲存 (Storage)</li>
                    <li>Firebase資料庫 (Firebase Database)</li>
                    <li>即時資料庫 (RealTime Database)</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold">FirseBase使用流程</h2>

            <h4 className="text-xl my-4 font-bold border p-2">第一步：創建專案</h4>
            <p className="my-4">
                首先，到Firebase官網，點選右上角的「Sign in」，登入你的Google帳號。
                <a href="https://firebase.google.com/" target="_blank" rel="noopener" className="my-4">
                    Firebase連結
                </a>
            </p>
            <Image src={firebase_01} alt="frebase_01" width={500} />


            <p className="my-4">登入完成後，點選一樣在右上角的Go to console，進入Firebase的控制台。</p>

            <p>那畫面應該會長如下＂：我們點選新增專案+，會出現幾個流程要完成</p>
            <Image src={firebase_02} alt="frebase_02" width={500} />
            <p className="my-4">第一個流程：輸入你想要的專案名稱，然後點選「繼續」</p>
            <Image src={firebase_03} alt="frebase_03" width={500} />
            <p className="my-4">第二個流程：看你要不要啟用Google Analytics，如果你有使用Google Analytics的需求，可以啟用，那你就需要進行第三個步驟去設定Google Analytics，如果沒有，就不用啟用，然後點選「創建專案」</p>
            <Image src={firebase_04} alt="frebase_04" width={500} />
            <p className="my-4">（非必須）第三個流程：設定Google Analytics，你可以選擇你現有的Google Analytics帳號，或是創建一個新的Google Analytics帳號，總之根據你的需求來選擇，然後就完成創建專案了。</p>
            <Image src={firebase_05} alt="frebase_05" width={500} />

            <h4 className="text-xl my-4 font-bold border p-2">第二步：新增應用程式</h4>
            <p className="my-4">當我們進入到專案的畫面後，我們可以看到一個「新增應用程式」的文字，下面有幾個選項，我們選擇「Web」</p>
            <Image src={firebase_06} alt="frebase_06" width={500} />
            <p className="my-4">接著，會出現一個註冊應用程式的畫面，輸入你的應用程式的暱稱，然後點選「註冊應用程式」，至於要不要勾選Firebase託管的選項，看你的需求，反正之後還是能開啟，那我們這邊是不需要勾選。</p>
            <Image src={firebase_07} alt="frebase_07" width={500} />
            <p className="my-4">再來，等他註冊完成後，就來到新增Firebase SDK的部分，我們這邊使用npm安裝，所以我們要複製npm的指令，然後在終端機輸入指令(當然也要在你的專案資料夾下)，就會自動安裝Firebase的SDK。</p>
            <p className="my-4">接著，我們要複製Firebase的初始化程式碼，然後貼到你的專案的程式碼中，這樣就完成了Firebase的初始化。</p>
            <p className="my-4">通常，我都會創建一個lib資料夾，並在下面建立一個init-firebase.tsx的檔案，然後將Firebase的初始化程式碼放在裡面。
                <a href="https://github.com/Bobo100/Firebase-Introduction/tree/main/lib" target="_blank" rel="noopener" className="my-4">
                    參考連結 (資料夾結構)
                </a>
            </p>
            <Image src={firebase_08} alt="frebase_08" width={500} />

            <p className="my-4 p-2 border-2 border-title font-semibold bg-black">
                OK，這樣就完成了Firebase的初始化，接下來，我們就可以開始使用Firebase的功能了，點選nav或是下方的連結，就可以看到我們介紹的Firebase的功能。
            </p>

            <div className="my-4">
                <Link href="/authenication">
                    authenication
                </Link>
                <Link href="/storage">
                    storage
                </Link>
                <Link href="/database">
                    database
                </Link>
                <Link href="/realtime-database">
                    realtime-database
                </Link>
            </div>



        </Layout>
    )
}

export default HomePage