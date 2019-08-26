import React, {useState, useEffect} from "react";

import TrackCard from "../TrackCard";
import Loadingpage from "../Loadingpage";

export default function Homepage() {
	const [trackList, setTrackList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1
		/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&apikey=${
			process.env.REACT_APP_KEY
		}`;

		setIsLoading(true);

		fetch(url)
			.then((res) => res.json())
			.then((resData) => {
				setTrackList(resData.message.body.track_list);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const trackCard = trackList.map((item) => (
		<TrackCard track={item.track} key={item.track.track_id} />
	));

	if (isLoading) {
		return <Loadingpage />;
	}
	return (
		<div className="container-fluid">
			<div className="display-3 text-center">Top 10 tracks</div>
			<br />
			<div className="row">{trackCard}</div>
		</div>
	);
}
