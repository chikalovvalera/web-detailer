import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GalleryAlbum, GalleryImage } from "../_model/request/galleryItem";

@Injectable()
export class GalleryService {

    private galleryAlbumUrl: string;

    constructor(private http: HttpClient) {
        this.galleryAlbumUrl = '';
    }

    public getWithLimit(): Observable<GalleryAlbum[]> {
        return this.http.get<GalleryAlbum[]>(this.galleryAlbumUrl + '5');
    }

    public getAll(): Observable<GalleryAlbum[]> {
        return this.http.get<GalleryAlbum[]>(this.galleryAlbumUrl);
    }

    public getById(id: string): Observable<GalleryAlbum[]> {
        return this.http.get<GalleryAlbum[]>(this.galleryAlbumUrl + '&id=' + id);
    }

}