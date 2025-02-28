import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Select, Input, notification } from "antd";
import "./Contact.scss";

interface IState {
	name: string;
	nameError: boolean;
	email: string;
	emailError: boolean;
	subject: string;
	subjectError: boolean;
	message: string;
	messageError: boolean;
}

export const Contact = ({}) => {
	const [state, setState] = useState<IState>({
		name: "",
		nameError: false,
		email: "",
		emailError: false,
		subject: "Project",
		subjectError: false,
		message: "",
		messageError: false,
	});

	const [api, contextHolder] = notification.useNotification();

	const showError = (message: string, description: string) => {
		api.error({
			message: message,
			description: description,
			duration: 2,
		});
	};

	const subjects = [
		{ value: "Fulltime Position" },
		{ value: "Part-time Position" },
		{ value: "Freelance" },
		{ value: "Project" },
		{ value: "Collaboration" },
		{ value: "Other" },
	];

	const onSubmit = (e: any) => {
		e.preventDefault();

		const { name, email, subject, message } = state;
		let { nameError, emailError, subjectError, messageError } = state;

		nameError = name === "";
		emailError = email === "";
		subjectError = subject === "";
		messageError = message === "";

		if (nameError || emailError || subjectError || messageError) {
			showError("Form is not valid", "Please fill all the fields");
			return;
		}

		const messageToSend = `Hi Vladimir, I'm ${name}\n Email: ${email}\n I'm interested in: ${subject}\n Description: ${message}`;

		window.open(
			`https://wa.me/5214492284747?text=${messageToSend}`,
			"_blank"
		);
	};

	return (
		<div id="contact-section" className="contact-section">
			{contextHolder}
			<h2>CONTACT ME</h2>
			<form onSubmit={onSubmit}>
				<Input
					name="email"
					onError={(e) => console.log("nameerror", e)}
					type="text"
					placeholder="Name*"
					value={state.name}
					status={state.nameError ? "error" : undefined}
					onChange={(e) =>
						setState({
							...state,
							name: e.currentTarget.value,
							nameError: e.currentTarget.value === "",
						})
					}
				/>
				<Input
					name="email"
					type="email"
					placeholder="Email*"
					status={state.emailError ? "error" : undefined}
					onChange={(e) =>
						setState({
							...state,
							email: e.currentTarget.value,
							emailError: e.currentTarget.value === "",
						})
					}
				/>
				<Select
					placeholder="Subject*"
					defaultValue={state.subject}
					options={subjects}
					style={{ textAlign: "left" }}
					status={state.subjectError ? "error" : undefined}
					onChange={(value) =>
						setState({
							...state,
							subject: value,
							subjectError: value === "",
						})
					}
				/>
				<Input.TextArea
					placeholder="Message*"
					status={state.messageError ? "error" : undefined}
					onChange={(e) =>
						setState({
							...state,
							message: e.currentTarget.value,
							messageError: e.currentTarget.value === "",
						})
					}
				/>
				<button type="submit">
					Send <FaWhatsapp />
				</button>
			</form>
		</div>
	);
};
