const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
const langSet = new Set(languages)
console.log(langSet) 
console.log(langSet.size) 

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) 
    counts.push({ lang: l, count: filteredLang.length })
  }
console.log(counts)