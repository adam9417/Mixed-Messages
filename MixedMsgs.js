//disc golf sayings
function randomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const opening = ['Daaang,', 'Ask me how I', 'Completely', 'Absolutely', 'A tree ninja', 'Shoulda'];
const verbs = ['threw', 'hucked', 'flicked', 'shanked', 'threaded', 'pured', 'tagged'];
const objects = ['my', 'your', 'that', 'a', 'the', 'this', 'that'];
const nouns = ['disc', 'Thunderbird', 'Zone', 'gap', 'tree', 'Insanity'];

function randomMessage() {
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns)].join(' ');
};

randomMessage(); 