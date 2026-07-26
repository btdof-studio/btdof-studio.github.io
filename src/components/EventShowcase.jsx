import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const awards = [
    { title: '逐光奖', subtitle: '最佳光影塑造', desc: '不问Coser是谁、角色是什么，只问一件事：光，在这张照片里活了吗。', tag: '光影立面' },
    { title: '凝真奖', subtitle: '最佳细节呈现', desc: '盔甲的划痕、发丝的高光轮廓。拒绝粗糙磨皮，忠实还原尼康Z卡口极致解析力。', tag: '光影伦理' },
    { title: '映心奖', subtitle: '最佳情绪捕捉', desc: '画面中的人在快门响起的瞬间与角色重叠，那份被镜头看见的情绪弥足珍贵。', tag: '灵魂共鸣' },
    { title: '破界奖', subtitle: '最佳创意构图', desc: '打破常态机位与视角，给敢于打破规则、勇于探索独特视角的创作者最高致敬。', tag: '打破常规' },
    { title: '新锐奖', subtitle: '最佳新人表现', desc: '专属特权：颁发免审核直通黄手环，并免费受邀加入「逐光成长计划」获得全程指导。', tag: '人才扶持', highlight: true }
];

const EventShowcase = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="events" className="page-section" style={{ minHeight: '100vh', padding: '8rem 2rem', background: 'linear-gradient(180deg, rgba(5,5,7,0) 0%, rgba(13,13,18,0.6) 50%, rgba(5,5,7,0) 100%)' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {/* Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
                    <div>
                        <span className="badge-amber" style={{ marginBottom: '1rem' }}>BRAND SALON ARCHIVE</span>
                        <h2 className="text-gradient-amber" style={{ fontSize: '3.5rem', margin: '0 0 1rem 0', fontWeight: 800 }}>
                            夏境逐光 · 沙龙专区
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--accent-amber)', letterSpacing: '1px', fontWeight: 500, margin: '0 0 1.5rem 0' }}>
                            景深之外 × 天津尼康典范店 联合呈献
                        </p>
                        <p style={{ color: 'var(--secondary-text)', lineHeight: 1.8, fontSize: '1rem' }}>
                            “纯粹，是尼康给创作者最大的尊重。” 在流水线摄影泛滥的时代，我们通过“理论讲座 + 双灯阵棚拍 + 户外外景 + 现场评片”的完整闭环，打破“尼康不善人像”的行业刻板印象。
                        </p>
                    </div>

                    {/* Poster Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setShowModal(true)}
                        className="glass-card glass-amber"
                        style={{ height: '360px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                    >
                        <img src="/images/event-poster.png" alt="夏境逐光海报" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, filter: 'blur(2px)' }} />
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <span style={{ fontSize: '0.8rem', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--accent-amber)', padding: '4px 12px', borderRadius: '20px', color: 'var(--accent-amber)' }}>
                                归档编号：JSWZ-2026-001
                            </span>
                            <h3 style={{ fontSize: '2rem', marginTop: '1rem', color: 'white' }}>夏境逐光 · 尼康人像创作会</h3>
                        </div>
                        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>点击展开活动存档全貌与五大奖项 ↗</span>
                            <span style={{ background: 'var(--accent-amber)', color: '#000', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>+</span>
                        </div>
                    </motion.div>
                </div>

                {/* Key System Principles Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--accent-amber)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>01 / 10分钟轮换制</div>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.8rem 0' }}>引闪器独占轮换规制</h4>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                            杜绝抢机位矛盾，控场实时计时。保证每位摄影师拥有绝对独立、尊重的10分钟专属灯光创作权。
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--accent-amber)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>02 / 丝带手环盲选</div>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.8rem 0' }}>五色手环缘分分组</h4>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                            尼康黄、深海蓝等专属配色手环。“同色为一组”破冰盲选，下午二次重置自由洗牌。
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--accent-amber)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>03 / 准备者指派制</div>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.8rem 0' }}>奖励功课指派专属</h4>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                            提前做角色功课并提交拍摄方案的摄影师，直接指派为专属摄影师。用心创作永远被看见。
                        </p>
                    </div>
                </div>

                {/* Awards Section */}
                <div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--primary-text)' }}>
                        评片大奖体系 <span style={{ fontSize: '1rem', color: 'var(--accent-amber)', fontWeight: 400 }}>(天津尼康典范店特别赞助)</span>
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
                        {awards.map((item, idx) => (
                            <div
                                key={idx}
                                className={`glass-card ${item.highlight ? 'glass-amber' : ''}`}
                                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                            >
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', letterSpacing: '1px' }}>{item.tag}</span>
                                    <h4 style={{ fontSize: '1.4rem', margin: '0.5rem 0 0.2rem 0', color: 'white' }}>{item.title}</h4>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', marginBottom: '0.8rem' }}>{item.subtitle}</div>
                                    <p style={{ fontSize: '0.82rem', color: 'var(--secondary-text)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Modal for full event details */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '900px', maxWidth: '90vw', maxHeight: '85vh',
                                background: '#0a0a10', border: '1px solid var(--border-amber)',
                                borderRadius: '24px', padding: '3rem', overflowY: 'auto'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div>
                                    <span className="badge-amber">沙龙档案存档</span>
                                    <h2 style={{ fontSize: '2.5rem', margin: '0.8rem 0 0.2rem 0' }}>夏境逐光 · 尼康二次元人像创作沙龙</h2>
                                    <p style={{ color: 'var(--secondary-text)', margin: 0 }}>活动时间：2026年7月5日 | 地点：天津尼康典范店 & 夏日河边外景</p>
                                </div>
                                <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                                    <h4 style={{ color: 'var(--accent-amber)', margin: '0 0 1rem 0' }}>📌 规则设计与公平基调</h4>
                                    <ul style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '1.2rem', margin: 0 }}>
                                        <li>每位摄影师拥有10分钟独占引闪器权限，铁面控场倒计时宣布轮换。</li>
                                        <li>五色绸缎丝带手环分组，同色为一组，无缝破冰与体面洗牌。</li>
                                        <li>奖励功课准备充分的摄影师，直接指派为Coser专属主摄。</li>
                                    </ul>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                                    <h4 style={{ color: 'var(--accent-amber)', margin: '0 0 1rem 0' }}>🛡️ 参与者关怀与防护体系</h4>
                                    <ul style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '1.2rem', margin: 0 }}>
                                        <li>配备专门夏日防暑包（冰袖、吸油纸、降温喷雾、防晒喷雾）。</li>
                                        <li>限制烈日下暴晒单次不超过15分钟，设置移动遮阳休息区。</li>
                                        <li>专门Coser关怀包（吸管杯防花唇妆、卸妆湿巾）。</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button
                                    onClick={() => setShowModal(false)}
                                    style={{ padding: '12px 32px', background: 'var(--accent-amber)', border: 'none', borderRadius: '30px', color: '#000', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    关闭详情
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default EventShowcase;
