import React, { Fragment } from 'react';
import * as RC from '../assets/styles/modal';

export const Modal = ({ visible, w, h, t, l, r, children }) => {
	return (
		<Fragment>
			<RC.ModalUnderLay visible={visible} />
			<RC.Modal visible={visible} w={w} h={h} t={t} l={l} r={r}>
				{children}
			</RC.Modal>
		</Fragment>
	);
};
