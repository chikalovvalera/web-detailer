import { GalleryAlbum, GalleryImage } from "../_model/request/galleryItem";
import { GalleryAlbumView, GalleryImageView } from "../_model/view/galleryItem";

export class GalleryConverter {

    public convertAlbums(value: GalleryAlbum[]): GalleryAlbumView[] {
        var albumList: GalleryAlbumView[] = [];
        if (value != null) {
            value.forEach((v) => {
                var convertAlbum = this.convertAlbum(v);
                if (convertAlbum != null) {
                    albumList.push(convertAlbum);
                }
            });
        }
        return albumList;
    }

    private convertAlbum(value: GalleryAlbum): GalleryAlbumView | null {
        if (value != null) {
            var album = {
                id: value.id,
                date: value.date,
                images: [] as GalleryImageView[]
            } as GalleryAlbumView;

            value.images.forEach((e) => {
                album.images.fill(this.convertImg(e) as GalleryImageView);
            });
            return album;
        }
        return null;
    }

    private convertImg(value: GalleryImage): GalleryImageView | null {
        if (value != null) {
            var image = {
                albumId: value.albumId,
                id: value.id,
                basis: value.basis,
                grow: value.grow,
                shrink: value.grow,
                img: new Blob([value.bytes]),

            } as GalleryImageView;
            return image;
        } else {
            return null;
        }
    }
}