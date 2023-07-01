export default function sortCharacterHealth(characters) {
  return characters.sort((a, b) => (b.health > a.health ? 1 : -1));
}
