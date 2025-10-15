export const NAV_ITEMS = [
    {path:"/",lable:"首頁", icon:"🏠"}
    {path:"/menu",lable:"點餐菜單", icon:"🍔"}
    {path:"/about",lable:"關於我們", icon:"🧑‍🤝‍🧑"}
    {path:"/contact",lable:"聯絡我們", icon:"☎️"}
];
export const isPathActive = (currentPath, targetPath) => {
    if(currentPath === "/" && targetPath ==="/") return true;
    return targetPath !== "/" && currentPath.startsWith(targetPath);
};
