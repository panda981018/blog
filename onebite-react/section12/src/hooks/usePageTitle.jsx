import { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        const $title = document.getElementsByTagName("title");
        $title[0].innerText = title;
    }, [title]);
};

export default usePageTitle;
