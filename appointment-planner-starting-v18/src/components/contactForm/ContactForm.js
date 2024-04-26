import React from "react";

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="number"
					name="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="[1-9][0-9]{2}-?\s?[0-9]{2}-?\s?[0-9]{2}-?\s?[0-9]{2}" // I am using the spanish number pattern
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};
