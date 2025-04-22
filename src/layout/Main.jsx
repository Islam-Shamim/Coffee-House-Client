import { Outlet } from "react-router-dom";
import NavBer from "./NavBer";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;