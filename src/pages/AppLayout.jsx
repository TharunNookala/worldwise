// import PageNav from "../components/PageNav"
import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
import User from "../components/User"
import styles from './AppLayout.module.css'

const AppLayout = () => {
    return (
        <div className={styles.app}>
            < Sidebar />
            <Map />
            if(isAuthenticated===true) <User />
        </div >
    )
}

export default AppLayout