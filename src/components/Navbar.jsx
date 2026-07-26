import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s ease'
            }}
            className={scrolled ? 'glass' : ''}
        >
            <div className="app-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: 'white' }}>
                    <motion.img
                        src="/images/logo.png"
                        alt="景深之外"
                        style={{ height: '56px', width: '56px', objectFit: 'contain' }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.6 }}
                    />
                </a>
                <div style={{ display: 'flex', gap: '32px' }}>
                    <a href="#about" style={{ color: 'var(--secondary-text)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.85rem', letterSpacing: '1px' }}>理念</a>
                    <a href="#portfolio" style={{ color: 'var(--secondary-text)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.85rem', letterSpacing: '1px' }}>作品集</a>
                    <a href="#events" style={{ color: 'var(--secondary-text)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.85rem', letterSpacing: '1px' }}>夏境逐光</a>
                    <a href="#matrix" style={{ color: 'var(--secondary-text)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.85rem', letterSpacing: '1px' }}>品牌矩阵</a>
                    <a href="#plans" style={{ color: 'var(--secondary-text)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.85rem', letterSpacing: '1px' }}>双引擎计划</a>
                </div>
                <a href="#contact" style={{
                    padding: '8px 20px', background: 'linear-gradient(135deg, rgba(200,176,152,0.2), rgba(200,176,152,0.05))',
                    border: '1px solid var(--accent-amber)', color: 'var(--accent-amber)',
                    borderRadius: '30px', textDecoration: 'none', fontWeight: 500,
                    transition: 'all 0.3s ease', fontSize: '0.85rem', letterSpacing: '1px'
                }}>
                    联系我们
                </a>
            </div>
        </motion.nav>
    );
};
export default Navbar;
