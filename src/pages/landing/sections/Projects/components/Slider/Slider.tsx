import { Project } from "../Project";
import { Carousel } from "react-bootstrap";
import "./Slider.scss";

export const Slider = ({ items }: any) => {
	return (
		<Carousel slide variant="dark" indicators={false} draggable>
			{items.map((item: any) => {
				return (
					<Carousel.Item key={item.id}>
						<Project project={item} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
