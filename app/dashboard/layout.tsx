import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import styles from './layout.module.css';

const DashboardLayout: React.FC = ({ children }: any) => {
    return (
        <div className={styles.gridcontainer}>
            <div className={styles.sidebar}>

                <Navbar />
            </div>
            <div className={styles.header}>Header</div>
            <div className={styles.main}>
                {children}
            </div>
            <div className={styles.footer}>Footer</div>
        </div>
    );
};

export default DashboardLayout;
