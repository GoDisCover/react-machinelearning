import { Outlet } from "react-router"
import Navbar from "../components/ui/Navbar"
import FooterMain from "../components/ui/Footer"

function MainLayout() {
    return <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
            <Outlet />
        </div>
        <div>
            <FooterMain/>
        </div>
    </div>
}
export default MainLayout