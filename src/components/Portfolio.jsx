import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        name: '圣采儿',
        coser: '小渊',
        source: '《神印王座》',
        tag: '棚拍双灯阵',
        src: '/images/sample-1.jpg',
        gallery: ['/images/sample-1.jpg', '/images/sample-1-2.jpg'],
        credits: {
            director: '知株',
            lighting: '知株',
            camera: '千冬流',
            retouch: '景深之外工作室'
        },
        desc: '使用全套尼康Z系列旗舰器材与双灯阵环境拍摄，精准捕捉高光下角色刺客杀伐与冰冷柔情交织的绝美质感。'
    },
    {
        id: 2,
        name: '黑天鹅',
        coser: '小花',
        source: '《崩坏：星穹铁道》',
        tag: '室内布光与外景调色',
        src: '/images/sample-2.jpg',
        gallery: ['/images/sample-2.jpg'],
        credits: {
            director: '知株 (摄影总监/布光)',
            lighting: '知株',
            camera: '千冬流 (室内) / 秋 (外景)',
            colorist: '千冬流',
            retouch: '知株'
        },
        desc: '室内专业棚拍布光与多层色彩融合，忠实还原记忆侍者神秘而高贵的面纱，极致保留黑天鹅服饰细节与发丝通透度。'
    },
    {
        id: 3,
        name: '逢坂大河',
        coser: '小阮',
        source: '《龙与虎》',
        tag: '外景创作与自然光',
        src: '/images/sample-3.jpg',
        gallery: ['/images/sample-3.jpg'],
        credits: {
            director: '知株',
            camera: '知株、秋',
            lighting: '知株',
            retouch: '知株'
        },
        desc: '夏日户外自然光创作，记录掌中老虎灵动、傲娇而细腻的情感瞬间。'
    },
    {
        id: 4,
        name: '大黑塔',
        coser: '音Vik',
        source: '《崩坏：星穹铁道》',
        tag: '漫展场照与光影塑造',
        src: '/images/sample-4.png',
        gallery: ['/images/sample-4.png'],
        credits: {
            director: '知株',
            camera: '知株',
            lighting: '知株',
            colorist: '千冬流',
            retouch: '知株'
        },
        desc: '在复杂的漫展环境下利用便携专业灯光实现高纯度色彩控制，展现天才俱乐部#83黑塔人偶的极致典雅。'
    }
];

const Portfolio = () => {
    const [selectedProj, setSelectedProj] = useState(null);

    return (
        <section id="portfolio" className="page-section" style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <span className="badge-amber" style={{ marginBottom: '1rem' }}>OFFICIAL GALLERY</span>
                        <h2 className="text-gradient-amber" style={{ fontSize: '3.5rem', margin: 0, letterSpacing: '-1px' }}>工作室精选作品</h2>
                    </div>
                    <p style={{ color: 'var(--secondary-text)', maxWidth: '400px', fontSize: '0.9rem', textAlign: 'right', margin: 0 }}>
                        “忠实记录进入镜头的每一个光子，从高光到阴影保留完整细节。”
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="glass-card"
                            onClick={() => setSelectedProj(proj)}
                            style={{ position: 'relative', height: '520px', cursor: 'pointer', overflow: 'hidden' }}
                        >
                            <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={proj.src}
                                    alt={`${proj.coser} - ${proj.name}`}
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease',
                                        filter: 'brightness(0.85)'
                                    }}
                                    className="portfolio-img"
                                />
                            </div>

                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                padding: '2.5rem 2rem 2rem 2rem',
                                background: 'linear-gradient(0deg, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.7) 60%, rgba(5,5,7,0) 100%)',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
                            }}>
                                <div>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', letterSpacing: '1px' }}>{proj.source}</span>
                                        <span style={{ color: 'var(--secondary-text)', fontSize: '0.8rem' }}>·</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--secondary-text)' }}>{proj.tag}</span>
                                    </div>
                                    <h3 style={{ fontSize: '2.2rem', margin: 0, fontWeight: 600 }}>{proj.name} <span style={{ fontSize: '1.1rem', fontWeight: 300, color: 'var(--secondary-text)' }}>/ {proj.coser}</span></h3>
                                </div>

                                <div style={{
                                    width: '44px', height: '44px', borderRadius: '50%',
                                    border: '1px solid var(--border-amber)', background: 'rgba(200,176,152,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-amber)', fontSize: '1.2rem'
                                }}>
                                    ↗
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Lightbox / Production Credits Modal */}
            <AnimatePresence>
                {selectedProj && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setSelectedProj(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '1300px', maxWidth: '95vw', height: '85vh',
                                background: '#0a0a0f', border: '1px solid var(--border-amber)',
                                borderRadius: '24px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.5fr 1fr',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
                            }}
                        >
                            <div style={{ background: '#000', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={selectedProj.src} alt={selectedProj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <span className="badge-amber" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>{selectedProj.source}</span>
                                            <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', fontWeight: 700 }}>{selectedProj.name}</h2>
                                            <p style={{ color: 'var(--accent-amber)', fontSize: '1.1rem', margin: '4px 0 0 0' }}>出镜：{selectedProj.coser}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedProj(null)}
                                            style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', fontSize: '1.5rem', cursor: 'pointer' }}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <hr style={{ borderColor: 'var(--border)', margin: '1.5rem 0' }} />

                                    <p style={{ color: 'var(--secondary-text)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                        {selectedProj.desc}
                                    </p>

                                    <div style={{ marginTop: '2rem' }}>
                                        <h4 style={{ color: 'white', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>制作团队档案 (CREDITS)</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem' }}>出品单位</div>
                                                <div style={{ color: 'white', fontWeight: 500 }}>景深之外动漫摄影工作室</div>
                                            </div>
                                            {selectedProj.credits.director && (
                                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                    <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem' }}>总监/布光</div>
                                                    <div style={{ color: 'white', fontWeight: 500 }}>{selectedProj.credits.director}</div>
                                                </div>
                                            )}
                                            {selectedProj.credits.camera && (
                                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                    <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem' }}>摄影</div>
                                                    <div style={{ color: 'white', fontWeight: 500 }}>{selectedProj.credits.camera}</div>
                                                </div>
                                            )}
                                            {selectedProj.credits.colorist && (
                                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                    <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem' }}>后期调色</div>
                                                    <div style={{ color: 'white', fontWeight: 500 }}>{selectedProj.credits.colorist}</div>
                                                </div>
                                            )}
                                            {selectedProj.credits.retouch && (
                                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                    <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem' }}>后期精修</div>
                                                    <div style={{ color: 'white', fontWeight: 500 }}>{selectedProj.credits.retouch}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                                    <button
                                        onClick={() => setSelectedProj(null)}
                                        style={{
                                            padding: '10px 24px', background: 'var(--accent-amber)', color: '#000',
                                            border: 'none', borderRadius: '30px', fontWeight: 600, cursor: 'pointer'
                                        }}
                                    >
                                        关闭预览
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;

