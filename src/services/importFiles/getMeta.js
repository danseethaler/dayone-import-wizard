export default function(str) {
  return {
    words: str.split(/[\s]+/).length,
    characters: str.length
  };
}
