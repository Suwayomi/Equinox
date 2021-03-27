export interface Series {
	/** The name of the artist */
	artist: string | null;
	/** The name of the author */
	author: string | null;
	/** Description of the series */
	description: string | null;
	/** Comma-divided string of genres  */
	genre: string | null;
	/** Tachidesk ID of series */
	id: number;
	/** Whether or not the series is in the library */
	inLibrary: boolean;
	/** Not sure */
	initialized: boolean;
	/** Not sure */
	source: null;
	/** ID from source. Long integer as string */
	sourceId: string;
	/** Series status in capital letters */
	status: string;
	/**
	 * URL (not including protocol, hostname, port, domain... Just the path, really) to the thumbnail (poster)
	 * E.g "/api/v1/manga/107/thumbnail"
	 */
	thumbnailUrl: string;
	/** Series' name */
	title: string;
	/** Tachidesk path */
	url: string;
}
