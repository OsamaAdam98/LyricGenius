import React, {useState, useEffect} from "react";
import Loadingpage from "../Loadingpage";

export default function Lyrics(props) {
	const [trackName, setTrackName] = useState("");
	const [artistName, setArtistName] = useState("");
	const [lyrics, setLyrics] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const {id} = props.match.params;

		const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`;
		const getName = `track.get?track_id=${id}`;
		const getLyrics = `track.lyrics.get?track_id=${id}`;
		const key = `&apikey=${process.env.REACT_APP_KEY}`;

		setIsLoading(true);

		Promise.all([fetch(url + getName + key), fetch(url + getLyrics + key)])
			.then(([nameRes, lyricsRes]) =>
				Promise.all([nameRes.json(), lyricsRes.json()])
			)
			.then(([nameData, lyricsData]) => {
				setTrackName(
					JSON.stringify(nameData.message.body.track.track_name).replace(
						/"/g,
						""
					)
				);
				setArtistName(
					JSON.stringify(nameData.message.body.track.artist_name).replace(
						/"/g,
						""
					)
				);
				setLyrics(
					JSON.stringify(lyricsData.message.body.lyrics.lyrics_body).replace(
						/"/g,
						""
					)
				);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [props.match.params]);

	const lyricsMap = lyrics.split(`\\n`).map((segment, i) => (
		<React.Fragment key={i}>
			{segment}
			<br />
		</React.Fragment>
	));

	if (isLoading) return <Loadingpage />;
	return (
		<div className="container-fluid">
			<div className="display-4 text-center">{trackName}</div>
			<div className="text-center font-italic">by {artistName}</div>
			<br />
			<br />
			<div className="text-center font-italic">{lyricsMap}</div>
		</div>
	);
}
