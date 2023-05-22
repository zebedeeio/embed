import PauseIcon from "./../icons/pause.svg";
import PlayIcon from "./../icons/play.svg";

export default function EmbedPlayButton(props) {
  const { isPlaying } = props;

  return (
    <div className="zbd-player-play-button-wrapper">
      {isPlaying ? (
        <PauseIcon className="flex h-3 fill-white zbd-player-pause-button" />
      ) : (
        <PlayIcon className={`flex h-3 fill-white zbd-player-play-button`} />
      )}
    </div>
  );
}
