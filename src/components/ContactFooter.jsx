import React from 'react';
import { motion } from 'framer-motion';

const ContactFooter = ({ onOpenJoinModal }) => {
    return (
        <section id="contact" style={{
            minHeight: '90vh', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            background: 'var(--primary-bg)', position: 'relative', overflow: 'hidden', padding: '6rem 2rem 4rem 2rem'
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-amber), transparent)' }}></div>
            <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(200, 176, 152, 0.06) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', zIndex: 2, maxWidth: '900px' }}
            >
                <span className="badge-amber" style={{ marginBottom: '1rem' }}>GET IN TOUCH</span>
                <h2 className="text-gradient-amber" style={{ fontSize: '4.5rem', fontWeight: 800, margin: '0.5rem 0 1rem 0', letterSpacing: '-2px' }}>
                    建立连接 · 开启创作
                </h2>
                <p style={{ color: 'var(--secondary-text)', fontSize: '1.15rem', marginBottom: '4rem', letterSpacing: '2px' }}>
                    成为我们双引擎生态的一部分，共同塑造极致的光影与情感
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                    {/* Contact Card 1 */}
                    <div className="glass-card glass-amber" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>💬</div>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'white' }}>艺术总监 / 知株微信</h3>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>商业拍摄与合作洽谈</p>
                        <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-amber)', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                            Zhizhuwowowo
                        </div>
                    </div>

                    {/* Contact Card 2 */}
                    <div className="glass-card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>📍</div>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'white' }}>工作室驻地</h3>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>天津市津南区 · 景深之外专属棚</p>
                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: 'white' }}>
                            天津市津南区合作基地
                        </div>
                    </div>

                    {/* Contact Card 3 */}
                    <div className="glass-card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-amber)' }}>⚡</div>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'white' }}>人才生态通道</h3>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>逐光计划 & 织光计划</p>
                        <button
                            onClick={() => onOpenJoinModal && onOpenJoinModal('逐光成长计划')}
                            style={{ background: 'var(--accent-amber)', color: '#000', border: 'none', padding: '8px 18px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
                        >
                            立即提交申请 ↗
                        </button>
                    </div>
                </div>

                {/* Social Platforms */}
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem' }}>
                    {['Bilibili 哔哩哔哩', '小红书 RED', '抖音 Douyin', '新浪微博'].map((platform, i) => (
                        <span key={i} style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', border: '1px solid var(--border)', padding: '8px 18px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)' }}>
                            {platform}
                        </span>
                    ))}
                </div>
            </motion.div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--secondary-text)', fontSize: '0.85rem', zIndex: 2 }}>
                <div>
                    &copy; 2026 景深之外动漫摄影工作室 BEYOND THE DOF. All rights reserved.
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <span>光影 · 艺术 · 尊重</span>
                    <span>津门异闻录</span>
                    <span>夏境逐光</span>
                </div>
            </div>
        </section>
    );
};
export default ContactFooter;

