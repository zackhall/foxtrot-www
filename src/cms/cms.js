import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicePagePreview from './preview-templates/ServicePagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import DefaultPagePreview from './preview-templates/DefaultPagePreview'
import GalleryPagePreview from './preview-templates/GalleryPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('services', ServicePagePreview)
CMS.registerPreviewTemplate('pages', DefaultPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('thanks', DefaultPagePreview)
CMS.registerPreviewTemplate('gallery', GalleryPagePreview)

CMS.init()
