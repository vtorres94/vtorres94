import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./Header.scss";

export const Header = ({}) => {
	const socials: any = [
		{
			icon: <FaGithub className="github" />,
			link: "",
		},
		{
			icon: <FaLinkedinIn className="linkedin" />,
			link: "",
		},
		{
			icon: <FaWhatsapp className="whatsapp" />,
			link: "",
		},
		{
			icon: <IoIosMail className="email" />,
			link: "",
		},
	];

	const menu = [
		{ link: "#about-section", name: "About" },
		{ link: "#projects-section", name: "Projects" },
		{ link: "#contact-section", name: "Contact" },
	];

	return (
		<nav>
			<div className="socials">
				{socials.map((social: any, index: number) => {
					return (
						<a
							className={social.className}
							key={`${index}-${social.icon}`}
							href={social.link}
							target="_blank"
						>
							{social.icon}
						</a>
					);
				})}
			</div>
			<div className="menu">
				{menu.map((section, index) => {
					return (
						<a key={`${index}-${section.name}`} href={section.link}>
							{section.name}
						</a>
					);
				})}
			</div>
		</nav>
	);
};
