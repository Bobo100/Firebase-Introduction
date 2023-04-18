import Link from "next/link"
import { useRouter } from "next/router"

const RouterLink = () => {
    const router = useRouter()
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>首頁</Link>
            <Link href="/authenication" className={router.pathname === "/authenication" ? "active" : ""}>Authenication</Link>
            <Link href="/authenication_update" className={router.pathname === "/authenication_update" ? "active" : ""}>Authenication Update</Link>
            <Link href="/appcheck_reCAPTCHA" className={router.pathname === "/appcheck_reCAPTCHA" ? "active" : ""}>App Check (reCAPTCHA)</Link>
            <Link href="/storage" className={router.pathname === "/storage" ? "active" : ""}>Storage</Link>
            <Link href="/firestore_database" className={router.pathname === "/firestore_database" ? "active" : ""}>Firestore Database</Link>
            <Link href="/realtime_database" className={router.pathname === "/realtime_database" ? "active" : ""}>RealTime Database</Link>

        </>
    )
}

export default RouterLink