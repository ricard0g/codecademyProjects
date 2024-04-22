import { useEffect, useState } from "react";
import styles from "./Login.module.css";

var clientID = process.env.REACT_APP_CLIENT_ID;

function Login({ onChangeAccessToken, accessToken }) {
	const [login, setLogin] = useState(false);

    // After each time this component is rendered, if window.location.hash returns a truthy value it will parse and change the state of our accesToken variable state that is passed as a prop from the SearchTables component.
	useEffect(() => {
		if (window.location.hash) {
			const hash = window.location.hash.substring(1);
			const urlParams = new URLSearchParams(hash);
			const tokenAccess = urlParams.get("access_token");
			console.log(tokenAccess);
			onChangeAccessToken(tokenAccess);
		}
	});

    // Inside the Spotify's API, for the Implicit Grant method of authorization, it recommends the create of a "state", so we create this state as a random string of 16 characters of length
	const generateRandomString = (length) => {
		let text = "";
		const possible =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return text;
	};

	const handleSubmit = async () => {
		try {
			console.log(`Currently access token => ${accessToken}`);
			// const cliendId = process.env.CLIENT_ID;
			const redirectUri = "http://localhost:3000/";

			const state = generateRandomString(16);

			const scope = "user-read-private user-read-email";

			let url = "https://accounts.spotify.com/authorize";
			url += "?response_type=token";
			url += "&client_id=" + encodeURIComponent(clientID);
			url += "&scope=" + encodeURIComponent(scope);
			url += "&redirect_uri=" + encodeURIComponent(redirectUri);
			url += "&state=" + encodeURIComponent(state);

			console.log(`Visiting ${url}`);

			window.location.href = url;

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<button
				type="submit"
				onClick={handleSubmit}
				className={styles.loginButton}
			>
				{login ? "Log Out" : "Log In"}
			</button>
		</>
	);
}

export { Login };
