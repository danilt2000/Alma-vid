import 'react-image-gallery/styles/scss/image-gallery.scss';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';

import objectPicOne from '../../assets/images/apartaments/image-47.jpg';
import objectPicTwo from '../../assets/images/apartaments/image-48.jpg';
import objectPicThree from '../../assets/images/apartaments/image-49.jpg';
import objectPicFour from '../../assets/images/apartaments/image-50.jpg';
import objectPicFive from '../../assets/images/apartaments/image-51.jpg';

function Gallery() {
    const images = [
        {
            original: objectPicOne,
            thumbnail: objectPicOne
        },
        {
            original: objectPicTwo,
            thumbnail: objectPicTwo
        },
        {
            original: objectPicThree,
            thumbnail: objectPicThree
        },
        {
            original: objectPicFour,
            thumbnail: objectPicFour
        },
        {
            original: objectPicFive,
            thumbnail: objectPicFive
        }
    ];

    return (
        <div className="custom-gallery">
            <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                slideInterval={1000}
                slideOnThumbnailOver={false}
                showIndex={true}
            />
        </div>
    );
}
export { Gallery} ;
