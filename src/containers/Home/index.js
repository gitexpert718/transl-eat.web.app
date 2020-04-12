//@flow
import * as React from 'react';
import { Consume } from '../../components/LayoutProvider';
import AccelerateApp from '../../components/ReusableSections/AccelerateApp';
import BlockContent from '../../components/ReusableSections/BlockContent';
import ProductHunt from '../../components/ReusableSections/ProductHunt';
import Advantages from './Advantages';
import PersonalProfilePreview from './PersonalProfilePreview';

function Home() {
	return (
		<Consume consume={{
			title: 'TRANSLEAT | HOME',
			classNameLayout: 'home-page',
			isAuthenticated: false,
			withFooter: true,
			withNav: true,
			withHeader: true
		}}>
			
			<ProductHunt/>
			<PersonalProfilePreview/>
			<AccelerateApp className="orange">
				<svg className="decorative-element" xmlns="http://www.w3.org/2000/svg" width="575.25" height="447.013" viewBox="0 0 575.25 447.013">
					<path id="Path_517" data-name="Path 517" d="M1377.842,556.461c-18.481,0-42.308-3.355-54.834,22.89-17.9,37.5-16.09,77.87-74.619,92.344-21.926,5.421-33.6-11.91-51.375-25.108-11.292-8.388-14.543,4.561-23.327,22.107-4.214,8.416-7.826,17.275-12.783,25.143-21.275,33.774-68.836,31.313-83.131,6.78-30.585-52.491-14.329-109.037,23.119-154.838,49.843-60.962,61.44-42.841,131.075-53.309,33.115-4.978,41.926-29.316,51.977-56.407,7.508-20.249,25.961-123.747,117.8-76.344,6.71,3.466,13.3,7.237,20.034,10.648,24.443,12.381,47.34,3.771,62.417-13.518.673-.763,29.635-39.583,44.255-56.546,26.01-30.19,72.906-44.442,100.386.277,17.316,28.186,5.233,62.674-18.725,82.653-10.086,8.416-21.524,13.885-33.379,18.523-83.152,32.533-111.553,37.69-122.721,82.008-5.691,22.592-8.159,72.192-62.237,72.657-4.645.042-9.29.007-13.934.007Z" transform="translate(-1061.756 -272.109)" fill="#fff"/>
				</svg>
			</AccelerateApp>
			<BlockContent className="orange" img={require('../../assets/img/home/cardBg.png')}
			              title="Over 5,000 of the world’s best engineering teams use the Bugsnag "
			              subtitle="We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs."
			              label="How we approach"
			              direction="rtl"/>
			
			<Advantages/>
			<BlockContent className="orange pb194" img={require('../../assets/img/home/cardBg-2.png')}
			              title="Over 5,000 of the world’s best engineering teams use the Bugsnag "
			              subtitle="We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs."
			              label="How we approach"
			              direction="ltr"/>
		</Consume>
	)
}

export default Home;