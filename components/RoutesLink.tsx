import Link from "next/link"
import { useRouter } from "next/router"

const RouterLink = () => {
    const router = useRouter()
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>首頁</Link>
            <Link href="/authenication" className={router.pathname === "/authenication" ? "active" : ""}>Authenication</Link>
            <Link href="/storage" className={router.pathname === "/storage" ? "active" : ""}>Storage</Link>
            <Link href="/firebase_database" className={router.pathname === "/firebase_database" ? "active" : ""}>Firebase Database</Link>
            <Link href="/realtime_database" className={router.pathname === "/realtime_database" ? "active" : ""}>RealTime Database</Link>

        </>
    )
}

export default RouterLink