import styles from './fields.module.css';
import { useSelector, useDispatch } from 'react-redux';

const FieldLayout = ({ handleStep, fields }) => (
	<div className={styles.container}>
		{fields.map((it, id) => {
			return (
				<button
					ind={id}
					key={id}
					className={styles.button}
					onClick={(e) => handleStep(e, id)}
				>
					{it}
				</button>
			);
		})}
	</div>
);

export const Fields = () => {
	const fields = useSelector((state) => state.fields);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const dispatch = useDispatch();

	const win = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const handleStep = (e, id) => {
		let ar = [...fields];
		if (!isDraw && !isGameEnded && e.target.textContent === ' ') {
			ar[id] = currentPlayer;
			dispatch({ type: 'SET_FIELD', payload: ar });
		}

		win.find(
			(it) =>
				currentPlayer === ar[it[0]] &&
				currentPlayer === ar[it[1]] &&
				currentPlayer === ar[it[2]],
		)
			? dispatch({ type: 'SET_GAME_ENDED', payload: true })
			: !ar.includes(' ')
				? dispatch({ type: 'SET_IS_DRAW', payload: true })
				: currentPlayer === '0'
					? dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
					: dispatch({ type: 'SET_CURRENT_PLAYER', payload: '0' });
	};

	return <FieldLayout fields={fields} handleStep={handleStep} />;
};
