import product from '../../../assets/image.png';
import { Button, ProductCard } from '../../ReusableComponents';
import { Section } from '../../ReusableComponents/Section/Section';
import { Wrapper } from '../../ReusableComponents/Section/Section.styled';

export function Bestseller() {
	return (
		<Section title="Bestseller">
			<Wrapper>
				<ProductCard
					imagePath={product}
					width="384"
					productName="Revitalizing Youth Protect Serum"
					brand="Radiant Seoul Beauty"
					price="560"
				/>
				<Button color="var(--color-black)" $bgcolor="var(--color-white)">
					View All
				</Button>
			</Wrapper>
		</Section>
	);
}
