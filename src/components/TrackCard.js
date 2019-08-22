import React from "react";

export default function TrackCard(props) {
	return (
		<div className="col-md-6 mb-3">
			<div className="card shadow-sm">
				<div className="card-body ">
					<h5 className="display-4">{props.track.track_name}</h5>
					<ul className="list-group list-group-flush">
						<li className="list-group-item pl-0">
							<strong>Album name</strong>: {props.track.album_name}
						</li>
						<li className="list-group-item pl-0">
							<strong>Artist</strong>: {props.track.artist_name}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
