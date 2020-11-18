import CMS from 'netlify-cms-app'
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicePagePreview from './preview-templates/ServicePagePreview'

CMS.registerWidget('mdx', MdxControl, MdxPreview)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('services', ServicePagePreview)
