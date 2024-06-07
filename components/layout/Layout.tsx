import React, {useState} from 'react'
import BackToTop from '@/components/elements/BackToTop'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import {getInitData} from "@/lib/api/getInitData";

const Layout = ({children}: { children: React.ReactNode }) => {
    const [openClass, setOpenClass] = useState('')

    const { allCategoryNavs, layout, isLoading, error } = getInitData();


    if (isLoading) return <div/>;
    if (error || !allCategoryNavs || !layout) return <div/>;

    const handleOpen = () => {
        document.body.classList.add('mobile-menu-active')
        setOpenClass('sidebar-visible')
    }

    const handleRemove = () => {
        if (openClass === 'sidebar-visible') {
            document.body.classList.remove('mobile-menu-active')
            setOpenClass('')
        }
    }

    return (
        <>
            {openClass && (
                <div
                    className='body-overlay-1'
                    onClick={handleRemove}
                />
            )}

            <Header
                handleOpen={handleOpen}
                handleRemove={handleRemove}
                openClass={openClass}
                navigation={allCategoryNavs}
            />
            <MobileMenu
                openClass={openClass}
                navigation={allCategoryNavs}
            />
            <main className='main'>{children}</main>
            <Footer
                footerLogo={layout.footerLogo}
                footerLogoAlt={layout.footerLogoAlt}
                footerSubtitle={layout.footerSubtitle}
                iban={layout.iban}
                swift={layout.swift}
            />
            <BackToTop/>
        </>
    )
}

export default Layout
