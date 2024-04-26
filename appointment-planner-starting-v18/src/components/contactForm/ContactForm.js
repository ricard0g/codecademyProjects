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
				<label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
				/>
				</label>
				<br/>
				<label>
				<input
					type="number"
					name="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="[1-9][0-9]{2}-?\s?[0-9]{2}-?\s?[0-9]{2}-?\s?[0-9]{2}" // I am using the spanish number pattern
					placeholder="Phone"
				/>
				</label>
				<br />
				<label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};
