import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export default function ({navBackground}) {
    const [{ userInfo }] = useStateProvider();
    return (
        <div className="containersheader">
            <div className="search__bar">
                <FaSearch />
                <input type="text" placeholder="Artists, songs, or podcasts" />
            </div>
            <div className="avatar">
                <a href={userInfo?.userUrl}>
                    <CgProfile />
                    <span>{userInfo?.name}</span>
                </a>
            </div>
        </div>
    );
}