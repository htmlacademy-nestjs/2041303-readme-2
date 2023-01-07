import { BlogCategory } from '@readme/shard-types'
import { RdoPhoto } from './rdo.photo'
import { RdoQuote } from './rdo.quote'
import { RdoText } from './rdo.text'
import { RdoVideo } from './rdo.video'
export const rdoAll = {
    [BlogCategory.VIDEO]: RdoVideo,
    [BlogCategory.TEXT]: RdoText,
    [BlogCategory.QUOTE]: RdoQuote,
    [BlogCategory.PHOTO]: RdoPhoto,
}
