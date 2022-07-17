export const generationKey = () => {
  let arrText = []
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 4; i++) {
    let text = "";
    for (let j = 0; j < 5; j++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    arrText.push(text)
  }

  const key = arrText.join('-')
  return key;
}