import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="page-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: '100px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1 }}>
                <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(200, 176, 152, 0.08) 0%, rgba(5,5,7,1) 70%)', position: 'absolute', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(200, 176, 152, 0.12) 0%, rgba(0,0,0,0) 65%)', filter: 'blur(90px)', borderRadius: '50%' }}></div>
            </div>

            <div style={{ textAlign: 'center', zIndex: 2, maxWidth: '900px', padding: '0 2rem' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <span className="badge-amber">
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-amber)', boxShadow: '0 0 10px var(--accent-amber)' }}></span>
                        景深之外 · 官方网站
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-gradient-amber" style={{ fontSize: '5.5rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-2px', lineHeight: 1.1 }}>
                        景深之外
                    </h1>
                    <p style={{ fontSize: '1.25rem', letterSpacing: '8px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '2.5rem', fontWeight: 300 }}>
                        BEYOND THE DOF ANIME PHOTOGRAPHY STUDIO
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ fontSize: '1.4rem', color: 'var(--primary-text)', fontWeight: 300, letterSpacing: '4px', margin: '0 0 3.5rem 0' }}
                >
                    “光影 · 艺术 · 尊重”
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
                >
                    <a href="#portfolio" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px',
                        background: 'linear-gradient(135deg, var(--accent-amber) 0%, #a48a70 100%)', borderRadius: '40px',
                        color: '#050507', textDecoration: 'none', fontWeight: 600, letterSpacing: '1px',
                        boxShadow: '0 8px 30px rgba(200, 176, 152, 0.3)', transition: 'all 0.3s ease'
                    }}>
                        查看精选作品
                    </a>
                    <a href="#events" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px',
                        border: '1px solid var(--border-amber)', borderRadius: '40px',
                        color: 'var(--accent-amber)', textDecoration: 'none', letterSpacing: '1px',
                        background: 'rgba(200, 176, 152, 0.05)', backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                    }}>
                        夏境逐光沙龙
                    </a>
                </motion.div>

                {/* Quick Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '6rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '24px' }}
                >
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-amber)' }}>Nikon Z Flagship</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', marginTop: '4px' }}>全套旗舰器材 & 双灯阵持持</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>双引擎人才链</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', marginTop: '4px' }}>逐光计划 × 织光计划</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-amber)' }}>100% 绝美质感</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', marginTop: '4px' }}>拒绝过度美颜 · 忠实还原细节</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
