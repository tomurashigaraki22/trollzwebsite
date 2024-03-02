import React, { useEffect, useState } from "react";
import Pass from "../components/admin/Pass";
import Additem from "../components/admin/Additem";

const Admin = () => {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        const checkLoginBefore = () => {
            const whether = localStorage.getItem('adminlogin')
            if (whether === 'true') {
                setLogin(true)
            } else {
                setLogin(false)
            }
        }
        checkLoginBefore();
    }, [])

    return (
        <div>
            <div>
                {login ? (
                    <div className="flex flex-col items-center justify-center">
                        <Additem />
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <Pass setLogin={setLogin} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;
