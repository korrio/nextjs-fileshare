import React, { Component } from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='flex'>
                <Link href='/'>
                    <a><i className="fas fa-home"></i></a>
                </Link>
                <Link href='/share'>
                    <a><i className="fas fa-file-upload"></i></a>
                </Link>
                <Link href='/download'>
                    <a><i className="fas fa-file-download"></i></a>
                </Link>

            </div>
            <a className={styles.siteLogo} href='https://bryceyoder.com'>
                <img src="https://dev.socialbureau.io/_next/image/?url=%2Fimages%2Flogo.png&w=128&q=75" alt="Bryce Yoder"/>
            </a>
        </footer>
    )
}
