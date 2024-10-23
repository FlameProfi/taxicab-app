'use client'
import styles from '../../styles/MainPage.module.scss'
export default function MainPage() {
	return (
		<>
		<div className={styles.main}>
            <div className={styles.block__list}>
            <div className={styles.main__block}>
                <h1>100</h1>
                <p>Выполненно заказов</p>
            </div>
            <div className={styles.main__block}>
                <h1>100+</h1>
                <p>Хороших отзывов</p>
            </div>
            <div className={styles.main__block}>
                <h1>100.000 Р</h1>
                <p>Заработано</p>
            </div>
            </div>
            <div className={styles.main__news}>
                <h1>Новости</h1>
                <div className={styles.news__list}>
                    <div className={styles.news__item}>
                        <h1>Бандиты ограбили таксиста Пиваса Майншкафера</h1>
                        <button>Читать полностью</button>
                    </div>
                </div>
            </div>
        </div>
		</>
	)
}
