import comp from "C:/Users/CWQ/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1769215907000,\"contributors\":[{\"name\":\"chenweiqi\",\"username\":\"\",\"email\":\"162210805109@stu.just.edu.cn\",\"commits\":1}],\"changelog\":[{\"hash\":\"523ef6e76b3b33d68b494ffbc41e3563ceeb23f5\",\"time\":1769215907000,\"email\":\"162210805109@stu.just.edu.cn\",\"author\":\"chenweiqi\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
