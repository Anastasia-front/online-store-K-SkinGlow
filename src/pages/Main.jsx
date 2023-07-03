import { Bestseller } from '../components/MainPageBlocks/Bestseller/Bestseller';
import { BlackLine } from '../components/MainPageBlocks/BlackLine/BlackLine';
import { Hero } from '../components/MainPageBlocks/Hero/Hero';
import { InstaSection } from '../components/MainPageBlocks/InstaSection/InstaSection';
import { NewArrivals } from '../components/MainPageBlocks/NewArrivals/NewArrivals';
import { OrderDelivery } from '../components/MainPageBlocks/OrderDelivery/OrderDelivery';

function Main() {
	return (
		<>
			<Hero />
			<Bestseller />
			<BlackLine />
			<NewArrivals />
			<OrderDelivery />
			<InstaSection />
		</>
	);
}

export default Main;
