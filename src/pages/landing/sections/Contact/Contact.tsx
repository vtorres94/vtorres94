import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.scss";

interface IState {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const Contact = ({}) => {
	const [state, setState] = useState<IState>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const subjects = [
		"Fulltime Position",
		"Part-time Position",
		"Freelance",
		"Project",
		"Collaboration",
		"Other",
	];

	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log("DATA", state);
		const { name, email, subject, message } = state;

		const messageToSend = `Hi Vladimir, I'm ${name}\nEmail: ${email}\nI'm interested in: ${subject}\nDescription: ${message}`;
		const link = document.getElementById("wa-link");
		link?.setAttribute(
			"href",
			`https://wa.me/5214492284747?text=${messageToSend}`
		);
		link?.setAttribute("target", "_blank");
		link?.click();
	};

	return (
		<div id="contact-section" className="contact-section">
			<h2>CONTACT ME</h2>
			<a style={{ display: "none" }} id="wa-link" />
			<form onSubmit={onSubmit}>
				<input
					required
					onError={(e) => console.log("nameerror", e)}
					type="text"
					placeholder="Name"
					value={state.name}
					onChange={(e) =>
						setState({ ...state, name: e.currentTarget.value })
					}
				/>
				<input
					required
					type="email"
					placeholder="Email"
					onChange={(e) =>
						setState({ ...state, email: e.currentTarget.value })
					}
				/>
				<input
					required
					type="text"
					placeholder="Subject"
					onChange={(e) =>
						setState({ ...state, subject: e.currentTarget.value })
					}
				/>
				<textarea
					required
					minLength={30}
					placeholder="Message"
					onChange={(e) =>
						setState({ ...state, message: e.currentTarget.value })
					}
				/>
				<button type="submit">
					Send <FaWhatsapp />
				</button>
			</form>
		</div>
	);
};
