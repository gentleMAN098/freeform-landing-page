import React from 'react';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import {FrequentlyQuestions} from "@/components/home/FrequentlyQuestions";
import {EasyCreateForm} from "@/components/home/EasyCreateForm";
import {NoTroubleCreateForm} from "@/components/home/NoTroubleCreateForm";
import {SpecialFormatForms} from "@/components/home/SpecialFormatForms";
import {FeaturesRarelyHeard} from "@/components/home/FeaturesRarelyHeard";

const Home: React.FC = () => {
	return (
		<Layout>
			<Container maxWidth={"lg"}>
				<EasyCreateForm/>
				<NoTroubleCreateForm/>
				<SpecialFormatForms/>
				<FeaturesRarelyHeard/>
				<FrequentlyQuestions/>
			</Container>
		</Layout>
	);
};


export default Home;
