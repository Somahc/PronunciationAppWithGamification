"use client"

import commonStyle from "@/styles/common.module.scss";

export default function Container({
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <div className={commonStyle.container}>
            {children}
        </div>
    );
}