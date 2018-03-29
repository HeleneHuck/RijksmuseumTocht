// artwork.model.ts
export interface IArtwork {
	objectNumber :string;
	name :string;
	author :string;
	urlImg :string;
}

export class Artwork {
	public urlImg :string

	constructor(public objectNumber :string,
				public name :string,
				public author :string) {
	}

	//Remark: the object number provided by the Rijksmuseum
	//is in fact a string containing letters & numbers

	//Outside the constructor to get results even when picture is missing
	setURLImage(url) {
		this.urlImg = url;
	}
}