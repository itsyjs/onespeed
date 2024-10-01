const UNO_ID = '/__uno.css'

export default () => ([
  {
    name: 'itsy:onespeed-hotfix-serve',
    apply: 'serve',
    enforce: 'post',
    transform(code, id) {
      if (id.includes(UNO_ID)) return `${code}\nexport default __vite__css\n`
    },
  },
  {
    name: 'itsy:onespeed-hotfix-build',
    apply: 'build',
    enforce: 'post',
    transform(code, id) {
      if (id.includes(UNO_ID)) return `export default {}; ${code}`
    },
  }
])
