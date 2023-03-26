import React from "react";
import Hls from 'hls.js';

export default class Video extends React.Component<{}, {player: HTMLMediaElement | null}>{
	constructor(props: {}) {
		super(props)
		this.state = { player: null }
	}

	componentDidMount(): void {
		var video = document.getElementById('video2332');
		if(Hls.isSupported() && video instanceof HTMLMediaElement) {
			const streamUrl = 'https://www.ryanhodge.net/stream/playlist.m3u8'
			var hls = new Hls();
			hls.loadSource(streamUrl);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED,function() {
				// @ts-ignore
				video.play();
			});
		}
	}

	render(): React.ReactNode {
		return (
			<>
				<video id="video2332" autoPlay/>
			</>
		)
	}
}