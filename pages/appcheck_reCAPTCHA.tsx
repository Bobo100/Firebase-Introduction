import Head from "next/head";
import Layout from '../components/layout';
import Image from 'next/image';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import appcheck_01 from '../public/images/app check/app check_1.png';
import appcheck_02 from '../public/images/app check/app check_2.png';
import appcheck_03 from '../public/images/app check/app check_3.png';
import appcheck_04 from '../public/images/app check/app check_4.png';
import appcheck_05 from '../public/images/app check/app check_5.png';
import appcheck_06 from '../public/images/app check/app check_6.png';

function AppCheckPage() {
    return (
        <Layout>
            <Head>
                <title>AppCheckPage</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold">
                    App Check (reCAPTCHA)
                </h1>
                <p className="my-4">這裡我們要教你如何使用Firebase的App Check來防止惡意的使用者，這個功能是在Firebase 9.0.0才有的，所以如果你的專案還沒有升級到9.0.0，請先升級。</p>
                <p className="my-4">我們會教你如何把reCAPTCHA加到你的專案中，這個功能可以讓你的使用者在登入或是註冊的時候，需要先通過reCAPTCHA的驗證，這樣就可以防止惡意的使用者。</p>
                <h2 className="text-2xl font-bold mt-4">第一步：開啟App Check功能</h2>
                <p className="my-4">首先我們要先開啟App Check功能，你可以從左邊的導覽列點選「建構」然後找到「App Check」，把它啟動起來</p>
                <Image src={appcheck_01} alt="appcheck_01" className="my-4" width={750} />

                <h2 className="text-2xl font-bold mt-4">第二步：設定reCAPTCHA</h2>
                <p className="my-4">當你啟動成功後，就會看到圖中這個畫面，我們點選「註冊」，來準備設定reCAPTCHA</p>
                <Image src={appcheck_02} alt="appcheck_02" className="my-4" width={750} />
                <Image src={appcheck_03} alt="appcheck_03" className="my-4" width={750} />
                <p className="my-t">接下來，我們得先去註冊一個reCAPTCHA，不然也沒得用</p>

                <h2 className="text-2xl font-bold mt-4">第三步：註冊reCAPTCHA</h2>
                <p className="my-4">首先我們要先到Google的reCAPTCHA官網，點選「v3 Admin Console」，之後就登入你的帳號。<a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noopener">註冊連結</a></p>
                <Image src={appcheck_04} alt="appcheck_04" className="my-4" />
                <p className="my-4">登入後，我們會看到下圖的畫面。要填寫一下內容：</p>
                <ul className="list-disc list-inside">
                    <li>標籤：你可以隨便填寫，這個只是給你自己看的</li>
                    <li>reCAPTCHA type：選擇「以分數為依據(v3)」，我們使用v3版本</li>
                    <li>Domains：填寫你的網域，因為我們是在本地端先測試所以先寫上localhost (注意：等正式使用的時候，localhost是一定要刪掉的)</li>
                </ul>
                <p className="my-4">最後就是勾選我同意，之後就提交完成了。</p>
                <Image src={appcheck_05} alt="appcheck_05" className="my-4" />

                <p className="my-4">完成之後你會得到兩個key，第一個是site key，第二個是secret key，請注意secret key請不要公開。</p>
                <p className="my-4">我們就可以把第二個key回去第二步驟填進去了。</p>
                <Image src={appcheck_06} alt="appcheck_06" className="my-4" />

                <h2 className="text-2xl font-bold mt-4">第四步：在前端使用</h2>
                <p className="my-4">我們要在前端使用App Check，像是在登入或是註冊的時候，需要先通過reCAPTCHA的驗證，這樣就可以防止惡意的使用者。</p>
                <p className="my-4">我會做幾件事情：</p>
                <ul className="list-disc list-inside">
                    <li>使用套件react-google-recaptcha-v3</li>
                    <li>將key放到.env.local上</li>
                    <li>寫一個驗證的api</li>
                    <li>將登入步驟結合App Check</li>
                    <li>如果有部屬到網站上，要修改reCAPTCHA的domain，以及要把環境變數加上去</li>
                </ul>

                <h2 className="text-2xl font-bold mt-4">第五步：使用套件react-google-recaptcha-v3</h2>
                <p className="my-4">首先我們要先安裝套件react-google-recaptcha-v3，這個套件可以讓我們很方便的使用reCAPTCHA。</p>
                <p className="my-4">安裝指令：npm install react-google-recaptcha-v3</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`npm install react-google-recaptcha-v3`}
                </Prism>

                <h2 className="text-2xl font-bold mt-4">第六步：將key放到.env.local上</h2>
                <p className="my-4">接下來我們要將key放到.env.local上，這樣我們就可以在程式中使用了。</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {`NEXT_PUBLIC_RECAPTCHA_SITE_KEY=你的site key
RECAPTCHA_SECRET_KEY=你的secret key`}
                </Prism>

                <h2 className="text-2xl font-bold mt-4">第七步：寫一個驗證的api</h2>
                <p className="my-4">接下來我們要寫一個驗證的api，這個api會傳入token，然後我們會去跟reCAPTCHA的伺服器做驗證，看看這個token是不是有效的。</p>
                <p className="my-4">如果是成功且分數大於0.5，我們就判斷為通過驗證，否則就判斷為失敗。</p>
                <Prism language="javascript" style={vscDarkPlus}>
                    {` // pages/api/recaptcha.tsx
import { NextApiRequest, NextApiResponse } from "next";

interface RecaptchaResponse {
    success: boolean;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
}

const verifyRecaptcha = async (token: string): Promise<RecaptchaResponse> => {
    const secretKey = process.env.RECAPTCHA_SECRETKEY;
    const verificationUrl = \`https://www.google.com/recaptcha/api/siteverify?secret=\${secretKey}&response=\${token}\`;

    try {
        const response = await fetch(verificationUrl, { method: "POST" });
        const data = await response.json();
        return data as RecaptchaResponse;
    } catch (error) {
        console.error(\`reCAPTCHA verification failed: \${error}\`);
        return { success: false, score: 0, action: "", challenge_ts: "", hostname: "" };
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const token = req.body.gRecaptchaToken;

        // Verify Recaptcha response
        const response = await verifyRecaptcha(token);

        // Check if the response sent by reCaptcha is successful and the score is above 0.5
        if (response.success && response.score >= 0.5) {
            //INSERT API/LOGIC for saving data once the validation is complete
            return res.json({
                status: "success",
                message: response.score,
            });
        } else {
            return res.json({
                status: "error 2",
                message: "reCAPTCHA verification failed"
            });
        }
    } catch (error) {
        res.json({
            status: "error 1",
            message: error,
        });
    }
}`}
                </Prism>

                <h2 className="text-2xl font-bold mt-4">第八步：將登入步驟結合App Check</h2>
                <p className="my-4">接下來我們要將登入步驟結合App Check，我們要在登入的時候，先通過reCAPTCHA的驗證，才可以登入。</p>
                <p className="my-4">那其實就只是例如要登入的時候前，先去fetch我們剛剛的api，如果成功，我們就在繼續執行驗證(登入)，否則就不執行。</p>

                <p className="my-4">那前面我們要先在_app.tsx中去寫Provider，用意是要讓整個app都可以使用reCAPTCHA。</p>

                <Prism language="javascript" style={vscDarkPlus}>
                    {` // _app.tsx
import '../styles/global.scss'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../components/useContext/authUseContext';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY as string}
      // scriptProps 我是用預設的 沒改變，所以可以不用寫啦
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </GoogleReCaptchaProvider >
  )
}

export default App`}
                </Prism>
                <p className="my-4">接下來我們要在登入的時候，先通過reCAPTCHA的驗證，才可以登入。</p>
                <p className="my-4">程式碼部分如下：我解釋一下，首先是我們使用了套件react-google-recaptcha-v3提供的hook，這個hook可以讓我們很方便的使用reCAPTCHA。可以讓我們確定reCAPTCHA是有沒有存在的。</p>
                <p className="my-4">然後當成功後我們會獲得json(因為我們設定的是傳遞json，在解析這個json看看回傳回來的是不是成功，如果成功我們就繼續執行驗證，否則就不執行)。</p>F
                {/* <p className="my-4">我們還使用到了useCallback，這個hook可以讓我們在依賴的值改變時，才會重新建立這個function，否則就不會重新建立。</p> */}
                <Prism language="javascript" style={vscDarkPlus}>
                    {` import React, { useCallback, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import Link from 'next/link';
import router from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const SignInComponents_Password = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onLogin = (e: any) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }
        executeRecaptcha("login").then((gReCaptchaToken) => {
            // console.log("gReCaptchaToken", gReCaptchaToken)
            submitToCheck(gReCaptchaToken);
        });
    }

    const submitToCheck = async (gReCaptchaToken: string) => {
        fetch("/api/recaptcha", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            // 這裡要注意，我們要把token傳到後端，讓後端去驗證
            body: JSON.stringify({
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res, "response from backend");
                if (res?.status === "success") {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Signed in                
                            const user = userCredential.user;
                            router.push('/');
                            alert('登入成功！')
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert('登入失敗！')
                            console.log(errorCode, errorMessage)
                        });
                } else {
                }
            });
    };

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
                        value={email}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border border-black m-1 p-1'
                        autoComplete='on'
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
                </Prism>



            </div>
        </Layout>
    )
}

export default AppCheckPage