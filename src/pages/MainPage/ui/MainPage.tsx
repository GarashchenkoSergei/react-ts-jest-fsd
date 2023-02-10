import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('main_page_name')}
        </div>
    );
};

export default MainPage;