import Head from "next/head";
import Layout from '../components/layout';
import Image from "next/image";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import storage_01 from '../public/images/storage/storage_1.png';
import storage_02 from '../public/images/storage/storage_2.png';
import storage_03 from '../public/images/storage/storage_3.png';
import storage_04 from '../public/images/storage/storage_4.png';
import storage_05 from '../public/images/storage/storage_5.png';
import storage_06 from '../public/images/storage/storage_6.png';
import storage_07 from '../public/images/storage/storage_7.png';
import storage_08 from '../public/images/storage/storage_8.png';
import storage_09 from '../public/images/storage/storage_9.png';
import storage_10 from '../public/images/storage/storage_10.png';
import storage_11 from '../public/images/storage/storage_11.png';
import storage_12 from '../public/images/storage/storage_12.png';
import storage_13 from '../public/images/storage/storage_13.png';
import storage_14 from '../public/images/storage/storage_14.png';

import { StorageReference, getDownloadURL, getStorage, listAll, ref, uploadBytes, uploadString } from "firebase/storage";
import { storage } from "../lib/init-firebase";
import { useState } from "react";
import uuid from "react-uuid";

function StoragePage() {

    const [pathReference, setPathReference] = useState<any>(null);
    const [gsReference, setGsReference] = useState<any>(null);
    const [httpsReference, setHttpsReference] = useState<any>(null);

    const createRef = () => {
        // Create a reference with an initial file path and names
        const pathReference = ref(storage, 'images/stars.jpg');
        setPathReference(pathReference)
        // console.log("pathReference", pathReference)

        // Create a reference from a Google Cloud Storage URI
        // const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');
        const gsReference = ref(storage, 'gs://first-f86c4.appspot.com/images/stars.jpg');
        setGsReference(gsReference)
        // console.log("gsReference", gsReference)

        // Create a reference from an HTTPS URL
        // Note that in the URL, characters are URL escaped!
        // const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
        const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/first-f86c4.appspot.com/o/images%2Fstars.jpg?alt=media&token=5f55ea2b-e5b9-4a4e-8ab6-c6f626f83926');
        setHttpsReference(httpsReference)
        // console.log("httpsReference", httpsReference)
    }

    const [downloadURL, setDownloadURL] = useState<string | null>(null);
    const downloadByURL = () => {
        const pathReference = ref(storage, 'images/stars.jpg');
        getDownloadURL(pathReference)
            .then((url) => {
                // \`url\` is the download URL for 'images/stars.jpg'
                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.open('GET', url);
                xhr.send();
                xhr.onload = () => {
                    const blob = xhr.response;
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'filename.jpg';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                };

                setDownloadURL(url);
            })
            .catch((error) => {
                // Handle any errors
                console.log(error)
            });
    }

    const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target && e.target.result) {
                const storageRef = ref(storage, 'images/test.jpg');
                uploadString(storageRef, e.target.result as string, 'data_url')
                    .then((snapshot) => {
                        console.log('Uploaded a blob or file!');
                    });
            }
        };
        if (e.target.files && e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
    }

    // Show All Files
    const [allPaths, setAllPaths] = useState<string[]>([]);
    const showAll = () => {
        setAllPaths([]);
        // Call listAllFiles() with the top-level ref for which you want to list all nested files and folders.
        const rootRef = ref(storage);
        listAllFilesRecursive(rootRef);
    }

    const listAllFilesRecursive = (listRef: StorageReference) => {
        // Find all the prefixes and items under the current listRef.
        listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    // Recursively list all files and folders under this folderRef.
                    listAllFilesRecursive(folderRef);
                });
                res.items.forEach((itemRef) => {
                    // All the items under listRef.
                    setAllPaths((prev) => [...prev, itemRef.fullPath]);
                });
            }).catch((error) => {
                console.error(error);
            });
    }



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
                <p className="mt-4 text-xl font-semibold text-red-600">請注意：當你正式使用的時候請不要使用測試模式，因為測試模式下對所有人都開放(尤其是可以寫入)，會非常危險。</p>
                <Image src={storage_02} alt="storage_02" className="my-4" width={750} />

                <p className="mt-4">因為我們前面有學過身分驗證，也可以設定只有登入的人才能使用Storage。那這部分我會移到最後面在實作，前面就是以最方便的情況(大家都可以寫入)來實作。</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      // 只允許已經通過身份驗證的用戶進行讀寫
      allow read, write: if request.auth.uid != null;
    }
  }
}`}
                </Prism>

                <h2 className="text-2xl font-bold mt-4">第三步：選擇地區</h2>
                <p className="mt-4">但是我們使用免費的版本，所以我們就只能使用當初專案選擇的地區，所以就直接「完成」。</p>
                <Image src={storage_03} alt="storage_03" className="my-4" width={750} />

                <h2 className="text-2xl font-bold mt-4">第四步：上傳檔案</h2>
                <p className="mt-4">接著我們就可以開始上傳檔案了，點選「上傳檔案」，然後選擇你要上傳的檔案(上傳檔案旁邊也可以選擇要不要建立資料夾)。</p>
                <Image src={storage_04} alt="storage_04" className="my-4" width={750} />

                <h2 className="text-2xl font-bold mt-4">第五步：如何使用</h2>
                <p className="mt-4">上傳完檔案後，我們就可以使用了，像是我們可以在網頁上顯示圖片，或是我們可以在網頁上下載檔案。下面我們會教你如何使用。</p>
                <h3 className="text-xl font-bold mt-4">下載檔案</h3>
                <p className="mt-4">下載檔案的方法很簡單，步驟大概是這樣：</p>
                <ol className="list-decimal list-inside">
                    <li>先取得Storage</li>
                    <li>再取得檔案的路徑</li>
                    <li>最後取得檔案的下載網址</li>
                </ol>
                <h2 className="text-2xl font-bold mt-4">第六步：取得Storage</h2>
                <p className="mt-4">首先我們要先取得Storage，這樣我們才能使用Storage。</p>
                <p className="mt-4">還記得我們前面有在auth那邊教的有如何初始化Firebase嗎？</p>
                <p className="mt-4">我們在那邊有教到，我們要先初始化Firebase，才能使用Firebase，Storage一樣必須有初始化，才能使用。</p>
                <p className="mt-4">如果你前面有初始化過，就只需要新增兩行程式碼，就可以使用Storage了。</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {` // init-firebase.tsx
import { getStorage } from "firebase/storage";

export const storage = getStorage(app);
`}
                </Prism>

                <h2 className="text-2xl font-bold mt-4">第七步：取得檔案的路徑</h2>
                <p className="mt-4">接著我們要取得檔案的路徑，這樣我們才能取得檔案的下載網址。</p>
                <p className="mt-4">取得檔案的路徑，我們可以使用ref()，這個函式(firebase提供的API)可以取得檔案的路徑。</p>
                <p className="mt-4">ref()有兩個參數，第一個參數是Storage，第二個參數是檔案的路徑。</p>
                <p className="mt-4">目前有三種取得檔案路徑的方法：分別是使用初始路徑、使用Google Cloud Storage URI、使用HTTPS URL。</p>
                <p className="mt-4">先給你看圖片知道他們的路徑都從哪找來的：首先是初始路徑的，紅框部分就顯示了我們目前在哪個bucket下面的哪個資料，我們這邊就是gs://first-f86c4.appspot.com下面的images資料夾，然後是檔案名稱。</p>
                <Image src={storage_05} alt="storage_05" className="my-4" />
                <p className="mt-4">接著是使用Google Cloud Storage URI的，當你點選該檔案後(這邊我點選stars.jpg)，右邊的檔案位置就有顯示出來，這邊就是我們要的路徑。</p>
                <p className="mt-4">而URL則是點選名稱旁邊的箭頭，會直接跳出一個視窗，他的網址就是我們要的路徑。</p>
                <Image src={storage_06} alt="storage_06" className="my-4" />

                <p className="mt-4">你都知道路徑後，就可以來抓取他們的路徑了。程式碼如下：</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`import { getStorage, ref } from "firebase/storage";
import { storage } from "../lib/init-firebase";

// Create a reference with an initial file path and names
const pathReference = ref(storage, 'images/stars.jpg');
setPathReference(pathReference)

// Create a reference from a Google Cloud Storage URI
// bucket是你的bucket名稱，在我們剛剛初始化的時候也有用到這個名稱，我們早早就有儲存在環境變數裡面了。
const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');
setGsReference(gsReference)

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
setHttpsReference(httpsReference)`}
                </Prism>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={createRef}>取得檔案路徑</button>
                <p className="mt-4">請點選「檔案路徑」後，我們可以在下面看到，我們使用這三個方法取出來的路徑，都能夠順利成功！那再來就是取得檔案的下載網址了。</p>
                <p className="mt-4">pathReference：{`${pathReference}`}</p>
                <p className="mt-4">gsReference：{`${gsReference}`}</p>
                <p className="mt-4">httpsReference：{`${httpsReference}`}</p>

                <h2 className="text-2xl font-bold mt-4">第八步：取得檔案的下載網址</h2>
                <p className="mt-4">接著我們透過剛剛的ref路徑，就可以下載檔案了。</p>
                <p className="mt-4">在那之前，我們要下載還必須去先設定CORS Configuration，作法如下：</p>
                <p className="mt-4">先到Google Cloud <a href="https://cloud.google.com/" target="_blank" rel="noopener">Google Cloud</a>，登入你的帳號，然後右上角點選「Console」。</p>
                <Image src={storage_07} alt="storage_07" className="my-4" />
                <Image src={storage_08} alt="storage_08" className="my-4" />
                <p className="mt-4">成功進入到「Console」後，左上角選取我們的firebase專案(當初你創立名稱的那個)，再點選右邊的「啟用Cloud Shell」。</p>
                <Image src={storage_09} alt="storage_09" className="my-4" />
                <p className="mt-4">會在畫面的正下方出現一個「Cloud Shell」，點選右上角的「開啟編輯器」。</p>
                <Image src={storage_10} alt="storage_10" className="my-4" />
                <p className="mt-4">進入到編輯器後，在左邊的位置去新增一個檔案，檔名為「cors.json」，然後複製下面的程式碼到檔案裡面。</p>
                <Image src={storage_11} alt="storage_11" className="my-4" />
                <Image src={storage_12} alt="storage_12" className="my-4" />
                <Prism language="json" style={vscDarkPlus}>
                    {` // cors.json
[
    {
        "origin": ["*"],
        "method": ["GET"],
        "responseHeader": ["Content-Type"],
        "maxAgeSeconds": 3600
    }
]`}
                </Prism>
                <p className="mt-4">這個檔案的意思是</p>
                <ul className="list-disc list-inside">
                    <li>origin: 值為一個陣列(Array)，列出允許跨域訪問的網域，這裡設定為 *，表示接受任何來源。</li>
                    <li>method: 值為一個陣列(Array)，列出允許跨域訪問的方法，這裡設定為 GET，表示接受 GET 方法。(如果使用其他方法，例如 POST，會出現錯誤)</li>
                    <li>responseHeader: 值為一個陣列(Array)，列出允許跨域訪問的回應標頭，這裡設定為 Content-Type，表示接受 Content-Type 標頭。</li>
                    <li>maxAgeSeconds: 值為一個整數，設定本次設置的有效時間(秒)。這裡設定為 3600 秒，即 1 小時。</li>
                </ul>

                <p className="mt-4">那比較有疑問的可能會是為什麼只要用GET就好，因為Firebase Storage 提供了對象存儲解決方案，讓你可以在雲端存儲和維護大量的數據文件。通常情況下，對於圖片、視頻等媒體資源的訪問，我們只需要使用 GET 方法即可實現。因為 GET 方法本質上是一種只讀操作，不會對資源進行修改的操作，而且也不會產生副作用。</p>
                <p className="mt-4">相反，如果使用 POST、PUT、PATCH、DELETE 等方法，則會對資源進行修改，甚至會產生副作用，這些方法都需要進行身份驗證，才能夠正常使用。</p>

                <p className="mt-4">新增完成後，最後我們要執行一行指令</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`gsutil cors set cors.json gs://bucket`}
                </Prism>
                <p className="mt-4">bucket是你的bucket名稱，前面我們有提到過，你的環境變數裡面也找的到，或是直接在firease的Storage裡面找也行。</p>
                <p className="mt-4">我們需要先打開Terminal，然後輸入指令</p>
                <Image src={storage_13} alt="storage_13" className="my-4" />
                <Image src={storage_14} alt="storage_14" className="my-4" />

                <p className="mt-4">設定完成後，我們可以使用getDownloadURL()，這個函式(firebase提供的API)可以取得檔案的URL。你有網址後就能夠下載圖片或是讓圖片顯示在網頁上了。</p>

                <Prism language="javascript" style={vscDarkPlus}>
                    {` const [downloadURL, setDownloadURL] = useState<string | null>(null);

const downloadByURL = () => {
    const pathReference = ref(storage, 'images/stars.jpg');

    getDownloadURL(pathReference)
        .then((url) => {
            // \`url\` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            setDownloadURL(url);

            // Or inserted into an <img> element
            // const img = document.getElementById('myimg');
            // if (img)
            //     img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
            console.log(error)
        });
}`}
                </Prism>
                <p className="mt-4">結果如下：<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" onClick={downloadByURL}>下載檔案</button></p>
                {downloadURL && <img src={downloadURL} alt="downloadURL" className="my-4" width={500} />}


                <h2 className="text-2xl font-bold mt-4">那我們完成在網頁端下載，當然也可以在網頁端上傳檔案，也可以列出你的檔案list，這些都是firebase提供的API。</h2>
                <h2 className="text-2xl font-bold mt-4">上傳檔案</h2>
                <p className="mt-4">你可以選擇要使用string、blob、File或Byte Array上傳，我這邊使用string上傳。</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        if (e.target && e.target.result) {
            // 後面是資料夾名稱然後是檔案名稱，如果沒有輸入資料夾，就會直接上傳到根目錄，如果你有輸入資料夾但目前沒有這個資料夾，firebase會自動幫你建立資料夾。
            const storageRef = ref(storage, 'images/test.jpg');            
            uploadString(storageRef, e.target.result as string, 'data_url')
                .then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                });
        }
    };
    if (e.target.files && e.target.files[0])
        reader.readAsDataURL(e.target.files[0]);
}`}
                </Prism>
                <input type="file" onChange={uploadFile} placeholder="上傳檔案" className="my-4 border" accept="image/*" />

                <h2 className="text-2xl font-bold mt-4">列出檔案</h2>
                <p className="mt-4">列出檔案的API是listAll，這個函式會回傳一個promise，你可以使用then來取得結果。
                    可以看到回傳的結果有prefixes和items，prefixes是資料夾，items是檔案。
                    一次是一層，如果你有多層資料夾，你可以遞迴的方式去列出所有的檔案。</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`const [allPaths, setAllPaths] = useState<string[]>([]);

const showAll = () => {
    setAllPaths([]);
    // Call listAllFiles() with the top-level ref for which you want to list all nested files and folders.
    const rootRef = ref(storage);
    listAllFilesRecursive(rootRef);
}

const listAllFilesRecursive = (listRef: StorageReference) => {
    // Find all the prefixes and items under the current listRef.
    listAll(listRef)
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
                // Recursively list all files and folders under this folderRef.
                listAllFilesRecursive(folderRef);
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                setAllPaths((prev) => [...prev, itemRef.fullPath]);
            });
        }).catch((error) => {
            console.error(error);
        });
}`}
                </Prism>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" onClick={showAll}>列出檔案(遞迴)</button>
                <div className="">
                    {allPaths.map((path, index) => {
                        return <p key={uuid()} className="border p-2 m-1">{path}</p>
                    })}
                </div>

                <h2 className="text-2xl font-bold mt-4">刪除檔案</h2>

                <p className="my-4 p-2 border-2 border-title font-semibold bg-black">但有一個大問題，當我們在前端使用firebase的API，那些金鑰是無法被保護的，因為我們是在前端使用，所以任何人都可以看到你的金鑰，這樣就會有安全性的問題。所以，我們必須寫一個好的規則(前面那個測試版部分要修改)，甚至你可以不要使用前端的API作法，而是改成以後端的方式來使用firebase的API，這樣就可以保護你的金鑰。</p>
                <p className="mt-4">我們這邊也簡短說一下前後端在使用上的差異，主要會是判斷的東西，假如今天的內容需要快速且簡單，那只要使用前端就好，但假如今天的內容需要安全性，那就必須使用後端，來提高我們的安全性。</p>
                <p className="mt-4">普遍來說，註冊登入系統可以不需要後端，但是如果你的內容需要安全性，那就必須使用後端，來提高我們的安全性。</p>

                <h2 className="text-2xl font-bold mt-4">規則</h2>
                
                <h2 className="text-2xl font-bold mt-4">後端API要如何使用</h2>

            </div>
        </Layout>
    )
}

export default StoragePage