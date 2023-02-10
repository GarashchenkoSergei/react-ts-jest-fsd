import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import React from "react";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={translate}
            theme={ButtonTheme.CLEAR}
        >
            {t('language')}
        </Button>
    );
};