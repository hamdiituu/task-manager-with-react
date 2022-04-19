import React, { useState, useEffect } from "react";
import { get } from "../../utils/networking";
import { getItem } from "../../utils/localStorage";

export const ProfileContext = React.createContext({});

const ProfileProvider = ({ children }) => {
    //state
    const [isFetching, setFetching] = useState(false);
    const [isError, setError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        // console.log("calling fetch user");
        setFetching(true);
        try {
            const { data, status } = await get("/users/me", {
                headers: {
                    Authorization: `Bearer ${getItem("app-state").login.token}`
                }
            });

            if (status !== 200) {
                throw data;
            }
            setUser(data);
            setSuccess(true);
        } catch (error) {
            setError(true);
        }
        setFetching(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <ProfileContext.Provider
            value={{ isFetching, isError, isSuccess, user }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
