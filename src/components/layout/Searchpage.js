import React, {useEffect, useState} from "react";
import TrackCard from "../TrackCard";
import Loadingpage from "../Loadingpage";

export default function Searchpage(props) {
	const {trackName} = props.match.params;

	const [trackList, setTrackList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`;
		const getInquiry = `track.search?q_track=${trackName}&page_size=10&page=1&s_track_rating=desc`;
		const key = `&apikey=${process.env.REACT_APP_KEY}`;

		setIsLoading(true);

		fetch(url + getInquiry + key)
			.then((res) => res.json())
			.then((resData) => {
				setTrackList(resData.message.body.track_list);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [trackName]);

	const trackCard = trackList.map((item) => (
		<TrackCard track={item.track} key={item.track.track_id} />
	));

	if (isLoading) return <Loadingpage />;
	return (
		<div className="container-fluid">
			<div className="display-3 text-center">Best 10 matches</div>
			<br />
			<div className="row">{trackCard}</div>
		</div>
	);
}
