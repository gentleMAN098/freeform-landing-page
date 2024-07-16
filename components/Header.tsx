import React from 'react';
import {Toolbar, IconButton, Button, Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import Container from "@mui/material/Container";


const Header: React.FC = () => {
	return (
		<Container>
			<StyledToolbar>
				<StyledIconButton edge="end" color="inherit" aria-label="logo">
					<img src="/logo.svg" alt="Logo" style={{height: 40}}/>
				</StyledIconButton>
				<StyledBox>
					<StyledMenuButton color="inherit">قالب ها</StyledMenuButton>
					<StyledMenuButton color="inherit">ویژگی ها</StyledMenuButton>
					<StyledMenuButton color="inherit">مقالات</StyledMenuButton>
					<StyledMenuButton color="inherit">درباره ما</StyledMenuButton>
					<StyledMenuButton color="inherit">تماس باما</StyledMenuButton>
				</StyledBox>
				<StyledButton color="inherit">ورود به پنل کاربری</StyledButton>
			</StyledToolbar>
		</Container>
	);
};

export default Header;

const StyledToolbar = styled(Toolbar)({
	padding: "20px 0",
	display: 'flex',
	justifyContent: 'space-between',
});
const StyledButton = styled(Button)({
	padding: "8px, 20px, 8px, 20px",
	borderRadius: "15px",
	fontSize: "12px",
	backgroundColor: "#3541501A"
});
const StyledMenuButton = styled(Button)({
	marginLeft: "12px",
	fontSize: "13px"
});

const StyledBox = styled(Box)({
	flexGrow: 1,
	display: 'flex',
	justifyContent: 'center',
});


const StyledIconButton = styled(IconButton)({
	marginLeft: 'auto',
});
