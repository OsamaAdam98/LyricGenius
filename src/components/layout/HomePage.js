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
				`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&apikey=${
					process.env.REACT_APP_KEY
				}`
			)
			.then((res) => {
				setTrackList(res.data.message.body.track_list);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const trackCard = trackList.map((item) => (
		<TrackCard track={item.track} key={item.track.track_id} />
	));

	if (isLoading) {
		return <LoadingPage />;
	}
	return (
		<div className="container-fluid">
			<div className="row">
				{trackCard}
				{trackList.length ? console.log(trackList) : null}
			</div>
		</div>
	);
}