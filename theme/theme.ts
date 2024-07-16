// src/theme.ts
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'IYekan, Arial, sans-serif',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
	palette: {
		text: {
			primary: "#354150"
		},
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: '#ff1744',
		},
		background: {
			default: '#fff',
		},
	},
});

export default theme;
