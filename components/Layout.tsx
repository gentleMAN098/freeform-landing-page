import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

const StyledBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh',
});

const Layout: React.FC = ({children}) => {
	return (
		<StyledBox>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</StyledBox>
	);
};

export default Layout;
