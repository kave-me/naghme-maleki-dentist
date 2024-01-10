import React from "react";

export const Navbar = () => {
    return <nav className="h-12 bg-red-400 flex flex-row-reverse justify-between">
        <div>
            <span>نغمه</span>
            {' '}
            <span>مالکی</span>


        </div>
        <ol className=" flex flex-row-reverse gap-2">
            <li>خانه</li>
            <li>خدمات</li>
            <li>درباره من</li>
            <li>تماس با من</li>
        </ol>
        <button className={"h-12 w-32 rounded-xl bg-blue-600  text-xl text-teal-400"}>تماس</button>
    </nav>
};
