import React from 'react';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import {FrequentlyQuestions} from "@/components/home/FrequentlyQuestions";
import {EasyCreateForm} from "@/components/home/EasyCreateForm";
import {NoTroubleCreateForm} from "@/components/home/NoTroubleCreateForm";
import {SpecialFormatForms} from "@/components/home/SpecialFormatForms";
import {FeaturesRarelyHeard} from "@/components/home/FeaturesRarelyHeard";
import Image from "next/image";
import {Box} from "@mui/material";
import {OneClickCreate} from "@/components/home/OneClickCreate";
import {ChangesApply} from "@/components/home/ChangesApply";
import {Articles} from "@/components/home/Articles";
import {StartNow} from "@/components/home/StartNow";

const Home: React.FC = () => {
	return (
		<Layout>
			<Container maxWidth={"lg"}>
				<EasyCreateForm/>
				<NoTroubleCreateForm/>
				<SpecialFormatForms/>
				<FeaturesRarelyHeard/>
				<Box my={20} width="100%" height="782px" position="relative">
					<Image
						src="/assets/images/FrameUnlimited.png"
						alt="frame unlimited"
						layout="fill"
						quality={100}
					/>
				</Box>
				<OneClickCreate/>
				<ChangesApply/>
				<FrequentlyQuestions/>
				<Articles/>
				<StartNow/>
			</Container>
		</Layout>
	);
};


export default Home;
