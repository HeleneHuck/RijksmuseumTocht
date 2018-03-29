// artwork-details.model.ts
import {Artwork} from './artwork.model'

export interface IArtworkDetails {
	basics :Artwork;
	acquisition :string;
    datingCentury :number;
    datingDate :string;
    materials :string;
    techniques :string;
}

export class ArtworkDetails {
    public acquisition :string;
    public datingCentury :number;
    public datingDate :string;
    public materials :string;
    public techniques :string;

	constructor(public basics :Artwork) {
	}

    setDates(acquisition, datingCentury, datingDate) {
        this.acquisition = acquisition;
        this.acquisition = this.acquisition.slice(0,4);
        this.datingCentury = datingCentury;
        this.datingDate = datingDate;
    }

    setMaterials(materials) {
        this.materials = materials;
    }

    setTechniques(techniques) {
        this.techniques = techniques;
    }
}