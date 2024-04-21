import { useEffect, useState } from "react";
import styles from "./Login.module.css";

var clientID = process.env.REACT_APP_CLIENT_ID;

function Login({onChangeAccessToken, accessToken}) {
    const [login, setLogin] = useState(false);

    const generateRandomString = (length) => {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    const handleSubmit = async () => {
        try {
            console.log(`Currently access token => ${accessToken}`)
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

            // After user is redirected and logs in, we check is everything went right and get the access token

            const hash = window.location.hash.substring(1);
            const urlParams = new URLSearchParams(hash);
            const tokenAccess = urlParams.get('access_token');
            console.log(tokenAccess);

            onChangeAccessToken(tokenAccess);

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <button type="submit" onClick={handleSubmit} className={styles.loginButton}>
                {login ? "Log Out" : "Log In"}
            </button>
        </>
    )
}

export {Login};