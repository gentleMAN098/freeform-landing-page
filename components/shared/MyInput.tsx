import React, {ReactNode} from 'react';
import {Box, InputAdornment, TextField, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import EditNoteIcon from '@mui/icons-material/EditNote';

interface MyInputProps {
	children?: ReactNode;
}

const MyInput: React.FC<MyInputProps> = ({children}) => {
	return (
		<Box position="relative" width="100%" mt={10}>
			<Box position="absolute" top="-20px" left="calc(50% - 204px)" zIndex="1">
				<StyledTextField
					placeholder="نام پروژه خود را وارد کنید..."
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<EditNoteIcon/>
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<Button sx={{borderRadius: "15px", p: "18px 30px", backgroundColor: "#354150"}}
								        variant="contained">
									ساخت پروژه
								</Button>
							</InputAdornment>
						),
					}}
				/>
			</Box>
			{children}
		</Box>
	);
};

export default MyInput;

const StyledTextField = styled(TextField)(({theme}) => ({
	'& .MuiInputBase-root': {
		padding: "24px 14px",
		borderRadius: 15,
		backgroundColor: '#FFFFFF',
		paddingRight: '10px',
		'& fieldset': {
			border: 'none',
		},
		'&:hover fieldset': {
			border: 'none',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
		},
		'&:hover': {
			border: "0px solid #ECECEC",
			backgroundColor: '#ECECEC',
		},
		'&.Mui-focused': {
			backgroundColor: '#E0E0E0',
		},
	},
	'& .MuiInputBase-input': {
		padding: '10px 12px',
	},
	'& .MuiInputAdornment-root': {
		'& .MuiSvgIcon-root': {
			color: '#354150',
		},
	},
}));
