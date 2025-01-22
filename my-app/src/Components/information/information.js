import styles from './information.module.css';
import { useSelector } from 'react-redux';

const InformationLayout = ({ message }) => (
	<div className={styles.information}>{message}</div>
);

export const Information = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	let message = '';

	isDraw
		? (message = 'Ничья')
		: isGameEnded
			? (message = `Победа: ${currentPlayer}`)
			: (message = `Ходит: ${currentPlayer}`);

	return <InformationLayout message={message} />;
};
