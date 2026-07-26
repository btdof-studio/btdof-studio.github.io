import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: '知株', role: '摄影总监 / 灯光技术总监', desc: '工作室理念奠基人，精通尼康双灯阵与复杂光影塑造。' },
    { name: '千冬流', role: '主摄 / 后期色彩总监', desc: '掌控高纯度色彩融合与细节保留，赋予画面典雅灵魂。' },
    { name: '秋', role: '外景主摄 / 创作成员', desc: '善于捕捉自然光线与角色情绪瞬间，外景氛围感掌控者。' },
    { name: '小张', role: '核心成员', desc: '工作室统筹与核心骨干成员，保障每一场创作顺利进行。' }
];

const About = () => {
    return (
        <section id="about" className="page-section" style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="badge-amber" style={{ marginBottom: '1rem' }}>THE STUDIO PHILOSOPHY</span>
                    <h2 className="text-gradient-amber" style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0.5rem 0 1.5rem 0' }}>
                        从这里，发现景深之外
                    </h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--secondary-text)', maxWidth: '800px', margin: '0 auto' }}>
                        景深之外动漫摄影工作室创立于 2026 年。<br />
                        相比于繁复的后期工业流水线，我们更信仰“艺术”的力量。<br />
                        最好的摄影不只是纪录，而是在每一次快门中，通过精妙的光影，传递对每一位创作者的极大尊重。
                    </p>
                </motion.div>

                {/* Core Pillars */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '5rem' }}>
                    {[
                        { title: '艺术', tag: 'ART', desc: '前期精准布光与色彩控制，追求极致的光影艺术与画面张力。' },
                        { title: '光影', tag: 'LIGHT & SHADOW', desc: '基于尼康Z系列旗舰器材与便携双灯阵，精准控制高光与暗部立面。' },
                        { title: '尊重', tag: 'RESPECT', desc: '尊重每一位Coser的角色付出，尊重每一位摄影师的独立创作权。' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="glass-card glass-amber"
                            style={{ padding: '2.5rem 2rem', textAlign: 'left' }}
                        >
                            <span style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', letterSpacing: '1px' }}>{item.tag}</span>
                            <h3 style={{ fontSize: '2rem', margin: '0.5rem 0 1rem 0', fontWeight: 600, color: 'white' }}>{item.title}</h3>
                            <p style={{ color: 'var(--secondary-text)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Core Roster */}
                <div>
                    <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem', color: 'white' }}>
                        核心团队档案 <span style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', fontWeight: 400 }}>(CORE MEMBERS)</span>
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="glass-card"
                                style={{ padding: '1.5rem 1.2rem', textAlign: 'center' }}
                            >
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(200,176,152,0.15)', border: '1px solid var(--border-amber)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)', fontWeight: 'bold' }}>
                                    {member.name[0]}
                                </div>
                                <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'white' }}>{member.name}</h4>
                                <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', marginBottom: '0.6rem', fontWeight: 500 }}>{member.role}</div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', lineHeight: 1.4, margin: 0 }}>{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;

