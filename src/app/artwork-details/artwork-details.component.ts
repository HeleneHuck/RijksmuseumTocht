import { Component, Input } from '@angular/core';
import { Artwork } from './../shared/model/artwork.model';
import { ArtworkDetails } from './../shared/model/artwork-details.model';
import { ArtworkService} from './../shared/services/artwork.services';

@Component({
  selector: 'artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})

export class ArtworkDetailsComp{
	@Input() artwork: Artwork;
	artworkDetails: ArtworkDetails;
	
  constructor(private artworkService:ArtworkService) {
	}

	ngOnChanges() {
		this.artworkService.getArtworkDetails(this.artwork.objectNumber)
			.subscribe((artInfo:ArtworkDetails) => {
					this.artworkDetails = artInfo;
			  	},
					err => console.log(err),
					()=> console.log('Getting paintings/art details complete...')
			)
	}
}
