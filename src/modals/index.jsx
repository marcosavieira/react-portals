import {useEffect, useState} from "react";
import style from "./style.module.css";

export const ModalContent = ({onClose}) => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);

	const onCloseModal = () => {
		setAnimate(false);
		setTimeout(() => {
			onClose();
		}, 500);
	};

	return (
		<div
			className={`${style.backdrop} ${
				animate ? style.backdropin : style.backdropout
			}`}>
			<div className={style.modal}>
				<div>I'm a modal dialog</div>
				<button onClick={onCloseModal}>Close</button>
			</div>
		</div>
	);
};
