import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.bodyFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica Neue',
  'Hiragino Kaku Gothic ProN',
  '"Yu Gothic"',
  'YuGothic',
  'Verdana',
  'Meiryo',
  '"M+ 1p"',
  'sans-serif'
]
const typography = new Typography(githubTheme)
export default typography
