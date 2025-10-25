import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        if (window.pageYOffset > 300) setVisible(true)
        else setVisible(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
        return () => window.removeEventListener('scroll', toggleVisible)
    }, [])

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#f8f9fa',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                display: visible ? 'inline-flex' : 'none',
                zIndex: 1000,
                width: '48px',
                height: '48px',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                transition: 'background-color 0.3s ease',
            }}
            aria-label="Scroll to top"
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0e2e5'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f8f9fa'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ color: '#000' }}
            >
                <path
                    fillRule="evenodd"
                    d="M8 12a.5.5 0 0 1-.5-.5V4.707L4.354 8.854a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 1 1-.708.708L8.5 4.707V11.5A.5.5 0 0 1 8 12z"
                />
            </svg>
        </button>
    )
}

export default ScrollToTop
