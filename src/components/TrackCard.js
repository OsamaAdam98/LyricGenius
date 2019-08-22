import React from "react";

export default function TrackCard(props) {
	return (
		<div className="container-fluid">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.track.track_name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Album name: {props.track.album_name}
					</li>
					<li className="list-group-item">Artist: {props.track.artist_name}</li>
				</ul>
			</div>
			<br />
		</div>
	);
}
