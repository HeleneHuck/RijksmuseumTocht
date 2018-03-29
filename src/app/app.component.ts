import {Component} from '@angular/core';
import {ArtworkService} from "./shared/services/artwork.services";
import {Artwork} from "./shared/model/artwork.model";

@Component({
	selector   : 'rijksmuseum-tocht',
	templateUrl: 'app.component.html',
	styles     : []
})

export class AppComponent {
	public artworks: Artwork[];
	selectedArtwork: Artwork;

	constructor(private artworkService:ArtworkService) {
	}

	searchArtworks(author) {
		this.clearArtwork();
		this.artworkService.searchArtworks(author)
			.subscribe((artData:Artwork[]) => {
					this.artworks = artData;
				},
				err => console.log(err),
				()=> console.log('Getting paintings/art complete...')
			)
	}

	showArtworkDetails(artwork: Artwork) {
		this.selectedArtwork = artwork;
	}

	clearArtwork() {
		this.selectedArtwork = null;
	}
}
