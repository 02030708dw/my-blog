import request from './request';

/**
 * 获取博客列表数据
 * @param {number} page - 页码
 * @param {number} limit - 每页数量
 * @param {number} categoryid - 分类ID，默认为-1
 * @returns {Promise} 返回博客列表数据或错误信息
 */

export async function getBlog(page = 1, limit = 10, categoryid = -1) {
  console.log(page, limit, categoryid);
  return await request.get('/api/blog', {
    params: {
      page,
      limit,
      categoryid
    }
  })
}

/**
 * 获取博客分类
 */
export async function getBlogType() {
  return await request.get('/api/blogtype')
}


export async function getBlogId(id) {
  return await request.get(`/api/blog/${id}`)
}

export async function getBlogComment(commentInfo) {
  return await request.post('/api/comment', commentInfo)
}

export async function getBlogCommentList(page = 1, limit = 10, blogid) {
  return await request.get('/api/comment', {
    params: {
      page,
      limit,
      blogid
    }
  })
}