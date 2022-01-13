import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import RoomsPagePreview from './preview-templates/RoomsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import DiningPagePreview from './preview-templates/DiningPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('rooms', RoomsPagePreview)
CMS.registerPreviewTemplate('dining', DiningPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
