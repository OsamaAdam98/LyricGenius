import React, {useState, useEffect} from 'react';
import LoadingPage from "./LoadingPage";

export default function Lyrics(props) {

  const [name, setName] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const {id} = props.match.params;

    const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`;
    const getName = `track.get?track_id=${id}`;
    const getLyrics = `track.lyrics.get?track_id=${id}`;
    const key = `&apikey=${process.env.REACT_APP_KEY}`;

    setIsLoading(true);

    Promise.all([
      fetch(url+getName+key),
      fetch(url+getLyrics+key)
    ])
    .then(([nameRes, lyricsRes]) =>
      Promise.all([nameRes.json(), lyricsRes.json()]))
    .then(([nameData, lyricsData]) => {
      setName(JSON.stringify(nameData.message.body.track.track_name).replace(/"/g, ""));
      setLyrics(JSON.stringify(lyricsData.message.body.lyrics.lyrics_body).replace(/"/g, ""));
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [props.match.params]);

  const lyricsMap = lyrics.split(`\\n`).map((segment, i) => <React.Fragment key={i}>{segment}<br/></React.Fragment>);

  if(isLoading) {
    return <LoadingPage/>
  }
  return (
    <div className="container-fluid">
      <div className = "display-4 text-center">
        {name}
      </div>
      <br/>
      <br/>
      <div className = "text-center font-italic">
        {lyricsMap}
      </div>
    </div>
  )
}
