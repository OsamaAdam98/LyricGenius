import React from "react";

export default function TrackCard(props) {
	const {track} = props;
	return (
		<div className="col-md-6 mb-3">
			<div className="card shadow-sm">
				<div className="card-body ">
					<h5 className="display-4">{track.track_name}</h5>
					<ul className="list-group list-group-flush">
						<li className="list-group-item pl-0">
							<strong>Album name</strong>: {track.album_name}
						</li>
						<li className="list-group-item pl-0">
							<strong>Artist</strong>: {track.artist_name}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
