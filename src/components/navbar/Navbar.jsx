import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.css';

export const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} className={style.nav}>
            <svg className={style.navBlackSvgBackground} xmlns="http://www.w3.org/2000/svg" width="428" height="181" viewBox="0 0 428 181" fill="none">
                <path d="M477 181C462.368 45.8483 -9 245.57 -9 -2H477V84V181Z" fill="#1D1C25" />
            </svg>
            <div className={style.imgsWrapper}>
                <img className={style.logo}
                    src="/Images/YogaBalance.svg"
                    alt="YogaBalance Logo" />
                <img
                    className={style.logoText}
                    src="/Images/YogaBalanceText.svg"
                    alt="YogaBalance Text"
                />
            </div>
            <div className={style.searchWrapper}>
                <input
                    className={style.searchBar}
                    type="text"
                    placeholder={t("navbar.search")} />
                <img
                    src="/Images/searchIcon.svg"
                    alt={t("navbar.searchAlt")}
                    className={style.searchIcon} />

            </div>
            <div
                className={`${style.menuIcon} ${isNavExpanded ? style.open : ''}`}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                <div className={style.bar}></div>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
            </div>
            <div className={`${style.navLinks} ${isNavExpanded ? style.active : ''}`}>
                <svg className={style.navSvgBackground} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 532" preserveAspectRatio="none">
                    <path d="M0 0C236.904 17.8123 -128.96 532 305 532V0H0Z" fill="#612E77" />
                </svg>
                <NavLink to="/" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.home')}
                </NavLink>
                <NavLink to="/" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.schedule')}
                </NavLink>
                <NavLink to="/" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.classes')}
                </NavLink>
                <NavLink to="/" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.prices')}
                </NavLink>
                <NavLink to="/about" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.about')}
                </NavLink>
                <NavLink to="/about" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.contact')}
                </NavLink>
                <NavLink to="/" className={style.navLink} onClick={() => setIsNavExpanded(false)}>
                    {t('navbar.login')}
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
