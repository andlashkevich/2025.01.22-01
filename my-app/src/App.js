import { Information, Fields } from './Components';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';

const GameLayout = () => {
	const dispatch = useDispatch();

	const handleAgain = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div className={styles.App}>
			<h2>Крестики-нолики</h2>
			<Information />
			<Fields />
			<button onClick={handleAgain} className={styles.startbtn}>
				Начать заново
			</button>
		</div>
	);
};

export const Game = () => <GameLayout />;
