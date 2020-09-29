export const safelyGetFrontMatter = (pageContext) =>
  pageContext && pageContext.frontmatter ? pageContext.frontmatter : {}
