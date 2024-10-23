'use client'
import { Button } from '@mui/material'
import styles from '../../styles/ProfilePage.module.scss'

export default function ProfilePage() {
	return (
		<>
		<div className={styles.profile}>
					<div className={styles.car__list}>
						<h1 style={{marginBottom: "25px"}}>Автомобили</h1>
						<div className={styles.car__item}>
							<p className={styles.descript}>Марка</p>
							<p className={styles.descript}>Класс</p>
							<p className={styles.descript}>Номер</p>
							<p className={styles.descript}>Год</p>
							<p className={styles.descript}>Цвет</p>
						</div>	
						<br/><div className={styles.border} /> 
						<div className={styles.car__item}>
							<p>Audi A8L</p>
							<p>Бизнес класс</p>
							<p>A666МР</p>
							<p>2024</p>
							<p>Черный</p>
						</div>						
		</div>
		<div className={styles.user__info}>
			<div className={styles.top} style={{marginBottom: "25px"}}>
				<h1>Личные данные</h1>
				<p>Нашли неверные данные? <strong>Сообщите нам</strong></p>			</div>
				<div className={styles.user__input}>
					<p>Фамилия Имя Отчество</p>
					<input type="text" value={"Пивас Майншкафдер Вертолетов"} disabled={true} />
				</div>
				<div className={styles.user__input}>
					<p>Пол</p>
					<input type="text" value={"Пивной"} disabled={true} />
				</div>
				<div className={styles.user__input}>
					<p>Логин</p>
					<input type="text" disabled={true} />
				</div>
				<div className={styles.user__input}>
					<p>Электронная почта</p>
					<input type="text" disabled={true} />
				</div>
				<div className={styles.user__input}>
					<p>Номер для связи</p>
					<input type="text" disabled={true} />
				</div>
				<div className={styles.user__input}>
					<p>Дата рождения</p>
					<input type="text" disabled={true} />
				</div>
				<Button variant="contained" fullWidth color="info">
					Сменить пароль
				</Button>		
		</div>
		{/* <div className={styles.chat}>
			<h1>Чат с таксопарком</h1>
			<div className={styles.chat__input}>
				<input type="text" />
				<Button variant="contained" color="success">Отправить</Button>
			</div>
		</div> */}
		</div>
		</>
	)
}
