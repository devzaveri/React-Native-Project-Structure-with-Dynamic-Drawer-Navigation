import { loaderRef } from "../../App";

export const showLoader = () => {
    loaderRef.current.showLoading();
};

export const hideLoader = () => {
    loaderRef.current.hideLoading();
};
