import React from 'react';
import { motion } from 'framer-motion';

const CorePlans = ({ onOpenJoinModal }) => {
    return (
        <section id="plans" className="page-section" style={{ minHeight: '100vh', padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span className="badge-amber" style={{ marginBottom: '1rem' }}>TALENT & CREATOR ECOSYSTEM</span>
                    <h2 className="text-gradient-amber" style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-1px' }}>核心双擎计划</h2>
                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem', letterSpacing: '1px' }}>构建摄影师与 Coser 创作者的长效互助生态</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {/* 逐光计划 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card glass-amber"
                        style={{ padding: '4rem 3rem' }}
                    >
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', letterSpacing: '2px', fontWeight: 600 }}>FOR PHOTOGRAPHERS</span>
                        <h3 style={{ fontSize: '3rem', fontWeight: 600, margin: '0.5rem 0 1.5rem 0', color: '#fff' }}>逐光成长计划</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                            面向潜力新人摄影师的持续成长支持体系。从设备扶持到技术指导，我们为你铺设最扎实的摄影创作之路。
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3.5rem 0', color: '#e4e4e7', fontSize: '1.05rem', lineHeight: 2.4 }}>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 影棚与专业双灯阵免费使用权</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 团队旗舰镜头群共享支持</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 一对一核心成员（知株等）技术指导</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 拍摄突发状况免费现场支援</li>
                        </ul>
                        <button
                            onClick={() => onOpenJoinModal && onOpenJoinModal('逐光成长计划')}
                            style={{
                                padding: '14px 40px', background: 'var(--accent-amber)', color: '#000',
                                borderRadius: '40px', fontWeight: 600, border: 'none', letterSpacing: '2px',
                                cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
                                boxShadow: '0 8px 25px rgba(200, 176, 152, 0.25)'
                            }}
                        >
                            申请加入逐光 ↗
                        </button>
                    </motion.div>

                    {/* 织光计划 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '4rem 3rem' }}
                    >
                        <span style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', letterSpacing: '2px', fontWeight: 600 }}>FOR COSPLAYERS</span>
                        <h3 style={{ fontSize: '3rem', fontWeight: 600, margin: '0.5rem 0 1.5rem 0', color: '#fff' }}>织光计划</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                            面向优质 Coser 的长期资源扶持机制。不再只是一次快门，我们提供持续曝光与行业认可的舞台。
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3.5rem 0', color: '#e4e4e7', fontSize: '1.05rem', lineHeight: 2.4 }}>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 协办漫展嘉宾优先推荐权 (津门异闻录等)</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 高质量专属精修创作拍摄</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 团队短视频内容共创与全网宣发</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--accent-amber)' }}>✓</span> 自有影棚及灯阵优先使用权</li>
                        </ul>
                        <button
                            onClick={() => onOpenJoinModal && onOpenJoinModal('织光计划')}
                            style={{
                                padding: '14px 40px', border: '1px solid var(--accent-amber)', color: 'var(--accent-amber)',
                                borderRadius: '40px', fontWeight: 600, background: 'rgba(200,176,152,0.08)',
                                cursor: 'pointer', letterSpacing: '2px', transition: 'transform 0.2s'
                            }}
                        >
                            申请加入织光 ↗
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default CorePlans;

