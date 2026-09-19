import { Outlet } from "react-router-dom";
import RestHeader from "./RestHeader";

export default function SecondaryHome(){
    return (
        <>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
        </>
    )
}