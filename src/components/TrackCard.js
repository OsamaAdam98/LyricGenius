import React from "react";
import {Link} from "react-router-dom";

export default function TrackCard(props) {
	const {track} = props;
	return (
		<div className="col-md-6 mb-3">
			<div className="card shadow-sm">
				<div className="card-body ">
					<h3>{track.track_name}</h3>
					<ul className="list-group list-group-flush">
						<li className="list-group-item pl-0">
							<strong>Album</strong>: {track.album_name}
						</li>
						<li className="list-group-item pl-0">
							<strong>Artist</strong>: {track.artist_name}
						</li>
					</ul>
				</div>
				<Link to={`lyrics/${track.track_id}`} className="btn btn-dark">
					Lyrics
				</Link>
			</div>
		</div>
	);
}
