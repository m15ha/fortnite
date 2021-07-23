import React from 'react';

export default function Footer() {
    return (
        <footer className='page-footer light-blue darken-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright  | Powered by m15
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Contacts
                    </a>
                </div>
            </div>
        </footer>
    );
}
