import React, {useState, useEffect} from "react";
import axios from "axios";

import TrackCard from "../TrackCard";
import LoadingPage from "./LoadingPage";

export default function HomePage() {
	const [trackList, setTrackList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=eg&apikey=${
					process.env.REACT_APP_KEY
				}`
			)
			.then((res) => setTrackList(res.data.message.body.track_list))
			.then(setIsLoading(false));
	}, []);

	const trackCard = trackList.map((trackn) => (
		<TrackCard track={trackn.track} key={trackn.track.track_id} />
	));

	if (isLoading) {
		return <LoadingPage />;
	}
	return (
		<div>
			{console.log(trackList)}
			{trackCard}
		</div>
	);
}
