'use client'
import { Button } from '@mui/material'
import styles from '../../styles/ChatPage.module.scss'
import SendIcon from '@mui/icons-material/Send';
export default function ChatPage() {
	return (
		<>
		<div className={styles.chat}>
            <div className={styles.block}>
                <div className={styles.input__block}>
                    <input type="text" />
                    <div className={styles.input__send}><SendIcon color="success" /></div>
                </div>
            </div>
        </div>
		</>
	)
}
