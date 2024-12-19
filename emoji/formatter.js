const fs = require('fs');

const emojiData = JSON.parse(fs.readFileSync('emoji/emoji-raw.json'));

const categories = []
const formatted = {}

emojiData.forEach(cat => {

    categories.push({
        name: cat.name,
        slug: cat.slug,
    })

    formatted[cat.slug] = cat.emojis.map(emoji => emoji.emoji)
})

fs.writeFileSync('_data/categories.json', JSON.stringify(categories));
fs.writeFileSync('_data/emoji.json', JSON.stringify(formatted));