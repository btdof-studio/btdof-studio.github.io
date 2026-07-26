import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JoinModal = ({ isOpen, onClose, initialPlan = '逐光成长计划' }) => {
    const [plan, setPlan] = useState(initialPlan);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        roleOrEquip: '',
        portfolio: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal-overlay"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        width: '600px', maxWidth: '90vw',
                        background: '#0d0d14', border: '1px solid var(--border-amber)',
                        borderRadius: '24px', padding: '3rem', position: 'relative'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--secondary-text)', fontSize: '1.5rem', cursor: 'pointer' }}
                    >
                        ✕
                    </button>

                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--accent-amber)', marginBottom: '1rem' }}>✓</div>
                            <h3 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>申领档案已提交！</h3>
                            <p style={{ color: 'var(--secondary-text)' }}>艺术总监知株与团队核心成员将尽快通过微信联络您。</p>
                        </div>
                    ) : (
                        <>
                            <span className="badge-amber" style={{ marginBottom: '1rem' }}>ECOSYSTEM APPLICATION</span>
                            <h2 style={{ fontSize: '2rem', margin: '0.5rem 0 1.5rem 0' }}>加入双引擎人才计划</h2>

                            {/* Plan Selector Switcher */}
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <button
                                    type="button"
                                    onClick={() => setPlan('逐光成长计划')}
                                    style={{
                                        flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                                        background: plan === '逐光成长计划' ? 'var(--accent-amber)' : 'transparent',
                                        color: plan === '逐光成长计划' ? '#000' : 'var(--secondary-text)',
                                        fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                                    }}
                                >
                                    📷 逐光成长计划 (摄影师)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPlan('织光计划')}
                                    style={{
                                        flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                                        background: plan === '织光计划' ? 'var(--accent-amber)' : 'transparent',
                                        color: plan === '织光计划' ? '#000' : 'var(--secondary-text)',
                                        fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                                    }}
                                >
                                    💃 织光计划 (Coser)
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--secondary-text)', marginBottom: '0.4rem' }}>昵称 / Name *</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="例如：千冬流"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)', borderRadius: '10px', color: 'white', fontSize: '0.95rem'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--secondary-text)', marginBottom: '0.4rem' }}>微信 / 联系电话 *</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="用于官方核验与联络"
                                        value={formData.contact}
                                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                        style={{
                                            width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)', borderRadius: '10px', color: 'white', fontSize: '0.95rem'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--secondary-text)', marginBottom: '0.4rem' }}>
                                        {plan === '逐光成长计划' ? '现有相机/灯光设备' : '常出角色 / 风格偏好'}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={plan === '逐光成长计划' ? '如：Nikon Z6II + 85mm f1.8' : '如：崩铁黑天鹅 / 棚拍古风'}
                                        value={formData.roleOrEquip}
                                        onChange={(e) => setFormData({ ...formData, roleOrEquip: e.target.value })}
                                        style={{
                                            width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)', borderRadius: '10px', color: 'white', fontSize: '0.95rem'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--secondary-text)', marginBottom: '0.4rem' }}>个人作品链接 / 简单说明</label>
                                    <textarea
                                        rows={3}
                                        placeholder="小红书/B站主页或想表达的摄影理念..."
                                        value={formData.portfolio}
                                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                        style={{
                                            width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)', borderRadius: '10px', color: 'white', fontSize: '0.95rem', resize: 'none'
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        marginTop: '1rem', padding: '14px', background: 'var(--accent-amber)', color: '#000',
                                        border: 'none', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'
                                    }}
                                >
                                    提交申领档案
                                </button>
                            </form>
                        </>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default JoinModal;
