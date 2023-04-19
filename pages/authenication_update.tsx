import Head from "next/head";
import Layout from '../components/layout';
import { CopyToClipboard } from "../components/Code/CopyToClipboard";
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
                <p className="my-4">只要使用api：updateProfile就可以修改使用者的Display Name，這個api是在firebase.auth()裡面的，所以我們要先取得使用者的資料，然後再使用updateProfile這個api來修改使用者的Display Name。</p>
                <CopyToClipboard>
                    {`import { updateProfile } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import router from 'next/router';

const onUpdateProfile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (auth.currentUser) {
        // 修改當前的使用者，所以我們要透過auth(前面用過的認證)
        // 假如你沒有登入，那麼這個auth.currentUser就會是null，所以我們要先判斷一下，如果有登入，才可以使用這個api。
        updateProfile(auth.currentUser, {
            // 下面是你想要更改的名稱
            displayName: displayName,
        }).then(() => {
            // Profile updated!            
            router.push('/update');
            alert('修改成功');
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
}`}
                </CopyToClipboard>

                <h2 className="text-xl my-4 font-bold border p-2">修改Email</h2>
                <p className="my-4">修改mail，一樣是透過api：updateEmail，這個api也是在firebase.auth()裡面的，所以我們要先取得使用者的資料，然後再使用updateEmail這個api來修改使用者的Email。</p>
                <CopyToClipboard>
                    {`import { updateEmail } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import router from 'next/router';

const onUpdateEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (auth.currentUser) {
        updateEmail(auth.currentUser, email).then(() => {
            // Email updated!
            // ...
            router.push('/signin');
            alert('修改成功，請重新登入');
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
}`}
                </CopyToClipboard>

                <h2 className="text-xl my-4 font-bold border p-2">修改Password</h2>
                <p className="my-4">修改密碼，一樣是透過api：updatePassword，這個api也是在firebase.auth()裡面的，所以我們要先取得使用者的資料，然後再使用updatePassword這個api來修改使用者的密碼。</p>
                <CopyToClipboard>
                    {`import { updatePassword } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import router from 'next/router';

const onUpdatePassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (auth.currentUser) {
        updatePassword(auth.currentUser, password).then(() => {
            // Password updated!
            // ...
            router.push('/signin');
            alert('修改成功');
        }).catch((error) => {
            // An error occurred
            // ...
            alert("密碼不符合規定");
        });
    }
}`}
                </CopyToClipboard>

                <p className="my-4">那我們完成後的所有功能，都在下面這個範例</p>
                <a href="https://homework-07-sso-login.vercel.app/" target="_blank" rel="noopener" className="text-black bg-title border-white font-semibold">實作範例</a>

                <p className="my-4">還有很多功能，之後會再補上，像是忘記密碼，重設密碼，這些都是我們可以學的。</p>
            </div>
        </Layout>
    )
}

export default AuthenicationUpdatePage