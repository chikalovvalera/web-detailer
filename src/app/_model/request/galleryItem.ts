export interface GalleryAlbum {
    id:number;
    date:Date;
    images: GalleryImage[];
}
export interface GalleryImage {
    id:number;
    albumId:number;
    bytes:Uint8Array;
    grow:number;
    shrink:number;
    basis:string;
}