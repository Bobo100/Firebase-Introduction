import Head from "next/head";
import Layout from '../components/layout';
import Image from "next/image";

import authenication_01 from "../public/images/authenication/authenication_1.png";
import authenication_02 from "../public/images/authenication/authenication_2.png";
import authenication_03 from "../public/images/authenication/authenication_3.png";
import authenication_04 from "../public/images/authenication/authenication_4.png";
import authenication_05 from "../public/images/authenication/authenication_5.png";
import authenication_06 from "../public/images/authenication/authenication_6.png";
import { CopyToClipboard } from "../components/Code/CopyToClipboard";

function AuthenicationPage() {
    return (
        <Layout>
            <Head>
                <title>AuthenicationPage</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    AuthenicationPage
                </h1>
                <p className="my-4">
                    Firebase提供了身分驗證的功能，可以讓使用者快速的註冊、登入、登出，而不需要自己開發這些功能。

                    <a href="https://firebase.google.com/docs/auth/web/start" target="_blank" rel="noopener">官方教學</a>
                </p>
                <p className="my-4">
                    下面我們會介紹如何使用Firebase的身分驗證功能。
                </p>

                <h2 className="text-xl my-4 font-bold border p-2">第一步：開啟Firebase身分驗證</h2>
                <p className="my-4">
                    首先，我們要先開啟Firebase的身分驗證功能，這樣才能使用Firebase的身分驗證功能。
                    你可以從左邊的導覽列點選「建構」，然後點選「Authenication身分驗證」，接著點選「開始使用」。
                </p>
                <Image src={authenication_01} alt="authenication_01" className="my-4" width={750} />

                <p className="my-4">接著就會看到firebase提供了非常多的登入方式，這些登入方式都是可以自己設定的。我們這邊會教你使用帳號密碼的方式和Google登入的方式。</p>
                <Image src={authenication_02} alt="authenication_02" className="my-4" width={750} />
                <p className="my-4">首先是帳號密碼的方式，點選「電子郵件/密碼」，然後點選「啟用」之後就「儲存」。</p>
                <Image src={authenication_03} alt="authenication_03" className="my-4" width={750} />
                <p className="my-4">接著，點選新增供應商，然後選擇Google，然後點選「啟用」，設定專屬支援mail，然後儲存。</p>
                <p className="my-4">一般來說，因為我們沒有新增其他的member，所以專屬支援mail只會有一個，就是我們自己的mail。但是當你要做一個開放的功能的時候還是建議使用專屬支援mail，這樣可以避免把自己的mail公開出去。</p>
                <Image src={authenication_04} alt="authenication_04" className="my-4" width={750} />
                <Image src={authenication_05} alt="authenication_05" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第二步：初始化Firebase</h2>
                <p className="my-4">接著，我們要在我們的程式碼中使用Firebase的身分驗證功能，首先我們要先安裝firebase的套件。(前面安裝過了，你忘記的話這邊趕快再安裝)</p>
                <CopyToClipboard>
                    {`npm install firebase`}
                </CopyToClipboard >
                <p className="my-4">接著，我們初始化firebase，這樣我們的程式碼才能使用firebase的功能。(也一樣是前面的步驟)</p>
                <CopyToClipboard>
                    {`import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "your auth domain",
    projectId: "your project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messaging sender id",
    appId: "your app id"
    measurementId: "your measurement id"
}

const app = initializeApp(firebaseConfig)
// getAuth()是firebase提供的一個API，可以讓我們使用身分驗證的功能
export const auth = getAuth(app)`}
                </CopyToClipboard >

                <p>到這邊我們就完成了初始化的部分，接著我們就可以使用firebase提供的API來使用身分驗證的功能了。</p>

                <h2 className="text-xl my-4 font-bold border p-2">第三步：建立一個頁面(使用Firebase身分驗證)</h2>
                <p>所以，我們會需要有三個功能，分別是註冊、登入和登出。</p>
                <p className="text-lg my-4 font-bold border p-2 inline-block bg-blue-500 text-white">註冊</p>
                <p className="my-4">首先，我們先建立一個SignUpComponents，這個Components會有兩個欄位，一個是email，一個是password，然後有一個註冊的按鈕。</p>
                <p className="my-4">我們使用了useState來管理email和password的狀態，然後使用了onSubmit來處理註冊的邏輯。</p>
                <p className="my-4">在onSubmit裡面，我們使用了firebase的createUserWithEmailAndPassword來處理註冊的邏輯，這個API會回傳一個promise，所以我們可以使用async/await來處理。</p>
                <p className="my-4">如果註冊成功，我們會跳轉到首頁，如果失敗，我們會跳出一個alert告訴使用者註冊失敗。</p>

                <p className="text-lg my-4 font-bold border p-2 inline-block bg-blue-500 text-white">補充</p>
                <p className="my-4">不會有google註冊，因為google註冊直接和google登入綁在一起，使用google登入的時候，如果沒有帳號的話，會自動幫你註冊一個帳號。</p>

                <CopyToClipboard>
                    {`import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import Link from 'next/link';
import router from 'next/router';

const SignUpComponents = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;                
                router.push('/')
                alert('註冊成功！')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('註冊失敗！')
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <h1 className='text-3xl'> 註冊註冊！！！ </h1>
            <form>
                <div>
                    <label htmlFor="email-address">
                        Email address：
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email address"
                        className='border border-black m-1 p-1'
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password：
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        className='border border-black m-1 p-1'
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmit}
                    className='border border-black rounded p-1'
                >
                    Sign up
                </button>

            </form>

            <p>
                Already have an account?{' '}
                <Link href="/signin" >
                    Sign in
                </Link>
            </p>
        </div>
    )
}

export default SignUpComponents`}
                </CopyToClipboard >

                <p className="text-lg my-4 font-bold border p-2 inline-block bg-blue-500 text-white">登入</p>
                <p className="my-4">接著是登入，我們建立兩個SignInComponents，一個是屬於帳號密碼登入，一個是屬於Google登入。</p>
                <p className="my-4 font-bold border p-2 inline-block bg-title text-black">帳號密碼登入</p>
                <p className="my-4">首先，我們先來看帳號密碼登入的邏輯，這邊我們使用了useState來管理email和password的狀態，然後使用了onSubmit來處理登入的邏輯。</p>
                <p className="my-4">我們使用API signInWithEmailAndPassword，這個API會傳入兩個參數，第一個是auth，第二個是email和password，這個API會回傳一個promise，如果登入成功，就會回傳一個user，如果登入失敗，就會回傳一個error。</p>

                <CopyToClipboard>
                    {`import React, { useEffect, useState } from 'react';
import { User, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import Link from 'next/link';
import router from 'next/router';

const SignInComponents_Password = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('登入成功！')
                router.push("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('登入失敗！')
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <div>
            <h1 className='text-3xl'> 登入登入 </h1>
            <form>
                <div>
                    <label htmlFor="email-address">
                        Email address：
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-black m-1 p-1'
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password：
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className='border border-black m-1 p-1'
                    />
                </div>

                <div>
                    <button
                        onClick={onLogin}
                        className='border border-black rounded p-1'
                    >
                        Login
                    </button>
                </div>
            </form>

            <p>
                No account yet? {' '}
                <Link href="/signup">
                    Sign up
                </Link>
            </p>

        </div>
    )
}

export default SignInComponents_Password`}
                </CopyToClipboard >
                <p className="my-4 font-bold border p-2 inline-block bg-title text-black">Google登入</p>
                <p className="my-4">接著，我們來看Google登入的邏輯，直接使用API signInWithPopup，這個API會傳入兩個參數，第一個是auth，第二個是一個provider，這個API會回傳一個promise，如果登入成功，就會回傳一個user，如果登入失敗，就會回傳一個error。</p>
                <p className="my-4">在這個API裡面可以去設定要使用哪個供應商登入，如果要使用google，就要寫GoogleAuthProvider，如果要使用facebook，就要寫FacebookAuthProvider</p>
                <CopyToClipboard>
                    {`import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import router from 'next/router';
import Image from 'next/image';

const SignInComponents_Google = () => {
    const provider = new GoogleAuthProvider();
    // 如果你希望每次登入都要選擇帳號，就要加上這行
    provider.setCustomParameters({ prompt: 'select_account' });
    const onLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);

                if (credential) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }
                alert('登入成功！')
                router.push("/")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className='bg-[#3F7EE8] flex text-white items-center'
            onClick={onLogin}
        >
            <Image src="/images/google.png" alt="google" width={40} height={40} className='bg-white border border-[#3F7EE8]' />
            <div className='w-full p-1'>Sign up with Google</div>
        </div>
    )
}

export default SignInComponents_Google`}
                </CopyToClipboard >
                <p className="my-4">到這邊，我們完成了登入的部分，接著我們來看登出的部分。</p>

                <p className="text-lg my-4 font-bold border p-2 inline-block bg-blue-500 text-white">登出</p>
                <p className="my-4">登出的部分，我們建立一個SignOutComponents，這個Components會有一個登出的按鈕，當使用者按下登出按鈕時，就會呼叫signOut這個API，這個API會傳入一個參數，就是auth，這個API會回傳一個promise，如果登出成功，就會回傳一個void，如果登出失敗，就會回傳一個error。</p>
                <CopyToClipboard>
                    {`import { signOut } from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/router"
import { auth } from "../lib/init-firebase"
const SignOutComponents = () => {
    const router = useRouter()
    // 登出
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("登出成功！")
            router.push("/");

        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <button className="border border-title p-[10px] hover:bg-white" onClick={handleLogout}>登出</button>
    )
}

export default SignOutComponents`}
                </CopyToClipboard >

                <p className="my-4">到這邊我們就完成註冊、登入和登出的功能，只要把這些component引用到頁面中，就可以使用了。</p>

                <p className="my-4">下面是完成後的範例：</p>
                <a href="https://homework-07-sso-login.vercel.app/" target="_blank" rel="noopener" className="text-black bg-title border-white font-semibold hover:bg-blue-500">實作範例</a>

                <p className="my-4">但是，這還沒有完全完成，如果你把網站佈署好後，你會發現，你的網站不能使用google的登入功能，這是因為我們沒有設定身分驗證的網域，所以我們要來設定一下。</p>
                <h2 className="text-xl my-4 font-bold border p-2">第四步：設定身分驗證的網域</h2>
                <p className="my-4">在firebase的console中，點選左邊的Authentication，然後點選右邊的Setting，然後點選「新增網域」把你的網域加進去，然後點選「新增』。就完成啦！</p>
                <Image src={authenication_06} alt="authenication_06" className="my-4" width={750} />

                <h2 className="text-xl my-4 font-bold border p-2">第五步：移除多餘的步驟</h2>
                <p>前面可以看到我們在很多個地方都一直在驗證使用者是否有登入，但其實可以把這個步驟移動到最外層的Layout中，這樣就不用在每個頁面都寫一次驗證的步驟了。</p>
                <p>這次我們會使用useContext來儲存使用者的資訊，然後每個要檢測的頁面都可以提取出來使用。</p>

                <p className="my-4">最後完成後的範例：</p>
                <a href="https://homework-07-sso-login.vercel.app/" target="_blank" rel="noopener" className="text-black bg-title border-white font-semibold hover:bg-blue-500">實作範例</a>
                <a href="https://github.com/Bobo100/Homework-07-SSO-login" target="_blank" rel="noopener" className="text-black bg-title border-white font-semibold hover:bg-blue-500">完整程式碼</a>


            </div>
        </Layout>
    )
}

export default AuthenicationPage