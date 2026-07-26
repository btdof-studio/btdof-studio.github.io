import React from 'react';
import { motion } from 'framer-motion';

const matrixItems = [
    {
        title: '看板娘 · 纪云可',
        tag: 'STUDIO MASCOT IP',
        desc: '「津门异闻录」裂隙宇宙核心叙事人物，景深之外品牌形象代言。代表着追逐真相、驾驭光影的坚定精神。',
        icon: '✦',
        color: 'var(--accent-amber)'
    },
    {
        title: '津门异闻录',
        tag: 'ANIME CONVENTION IP',
        desc: '天津本土二次元漫展品牌。首创“摄影师签售区”与“光影捕手档案室”叙事包装，为创作者打造全新价值舞台。',
        icon: '◈',
        color: '#ffffff'
    },
    {
        title: '夏境逐光',
        tag: 'SALON BRAND',
        desc: '联合旗舰品牌（如尼康）共同承办的沉浸式二次元人像创作沙龙。慢下来、认真对待每一次创作。',
        icon: '✺',
        color: 'var(--accent-amber)'
    },
    {
        title: '双引擎人才生态',
        tag: 'ECOSYSTEM ENGINE',
        desc: '逐光成长计划 (摄影师培养) × 织光计划 (Coser资源扶持)，构建可持续成长的人才与内容闭环。',
        icon: '⬡',
        color: '#ffffff'
    }
];

const BrandMatrix = () => {
    return (
        <section id="matrix" className="page-section" style={{ minHeight: '80vh', padding: '6rem 2rem 4rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div style={{ textAlignment: 'center', textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="badge-amber" style={{ marginBottom: '1rem' }}>DERIVATIVE BRAND ECOSYSTEM</span>
                    <h2 className="text-gradient-amber" style={{ fontSize: '3.5rem', margin: 0, letterSpacing: '-1px' }}>
                        衍生品牌与 IP 矩阵
                    </h2>
                    <p style={{ color: 'var(--secondary-text)', marginTop: '1rem', letterSpacing: '2px', fontSize: '0.95rem' }}>
                        从摄影工作室到二次元文化生态 · 多维矩阵共振
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                    {matrixItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card"
                            style={{ padding: '2.5rem 1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px' }}
                        >
                            <div>
                                <div style={{ fontSize: '2rem', color: item.color, marginBottom: '1rem' }}>{item.icon}</div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', letterSpacing: '1px', fontWeight: 600 }}>{item.tag}</span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.6rem 0 1rem 0', color: 'white', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ color: 'var(--secondary-text)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                                    {item.desc}
                                </p>
                            </div>

                            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--secondary-text)' }}>探索生态</span>
                                <span style={{ color: 'var(--accent-amber)', fontWeight: 'bold' }}>→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default BrandMatrix;
