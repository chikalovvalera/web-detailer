export interface GalleryAlbumView {
    id:number;
    date:Date;
    images: GalleryImageView[];
}
export interface GalleryImageView {
    id:number;
    albumId:number;
    grow:number;
    shrink:number;
    basis:string;
    img:Blob;
}