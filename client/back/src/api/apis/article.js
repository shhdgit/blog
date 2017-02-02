import { base } from '../http'

export default {
  get_list () {
    return base.get('article')
  },
  get (id) {
    return base.get(`article/${ id }`)
  },
  save ({ title, content, editContent }) {
    return base.post('article', { title, content, edit: { content: editContent } })
  },
  del (ids) {
    return base.delete('article', { params: { ids } })
  },
  update ({ id, title, content, editContent }) {
    return base.post(`article/${ id }`, { title, content, edit: { content: editContent } })
  },
}
