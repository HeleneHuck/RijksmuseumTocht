import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Artwork, IArtwork} from "../model/artwork.model";
import {ArtworkDetails, IArtworkDetails} from "../model/artwork-details.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ArtworkService {
    url: string = 'https://www.rijksmuseum.nl/api/nl/collection';
    fixedParams: string ='?key=wjo0zowJ&format=json'
    private artworks: Artwork[];

    constructor(private _http: Http) {
    }

    setArtworks(artworks) {
        this.artworks = artworks;
    }

    // return all pieces of art from the given author
    searchArtworks(author): Observable<IArtwork[]> {
       return this._http.get(this.url + this.fixedParams+ `&q=${author}`)
       .map(res => (res.json().artObjects))
       .map((pieces: any[]) => {
           // map to the local model of Artwork, only necessary info is kept
           return pieces.map(object => {
            let artwork = new Artwork(
                object.objectNumber,
                object.title,
                object.principalOrFirstMaker);
            if (object.hasImage) {artwork.setURLImage(object.webImage.url)};
            return artwork;
               })
            })
    }

    // return the details of a piece of art based on the object number
    getArtworkDetails(objectNumber): Observable<IArtworkDetails> {
        return this._http.get(this.url + `/${objectNumber}` + this.fixedParams)
            .map(res => (res.json().artObject))
            .map((details: any) => {
                // map to the local model of ArtworkDetails, only necessary info is kept
                let artwork = new Artwork(
                                    details.objectNumber,
                                    details.title,
                                    details.principalOrFirstMaker);
                if (details.hasImage) {artwork.setURLImage(details.webImage.url)};
                let artworkDetails = new ArtworkDetails(artwork);
                artworkDetails.setDates( details.acquisition.date,
                                        details.dating.period,
                                        details.dating.sortingDate);
                artworkDetails.setMaterials(details.materials);
                artworkDetails.setTechniques(details.techniques);
                return artworkDetails;
            })
    }
}