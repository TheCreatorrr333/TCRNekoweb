{
  function choice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const quote_pool = [
    {text: "<a style='text-decoration: none; text-shadow: none;' href='https://irc.nekoweb.org'>https://irc.nekoweb.org</a> Internet Relay cat :3"},
    {text: "tails/senko/basil/θωθ/•ᴗ•/(*´꒳`*)"},
    {text: "Close your eyes you'll be here soon* 一 二 三 四 五分; 時々 本当に寝たい でも このワードできない おやすみ; おやすみ; おやすみ ;おやすみ"},
    {text: "<code style='font-family: monospace'>let yωz = f(y, z) = {x: x ∈ (y∩z) ⋀ x = -1}</code>"},
    {text: "Sometimes you have the only winning move is not to play"},
    {text: "10.03.2021 △△△"},
    {text: "We must know, we will know", author: "David Hilbert"},
    {text: "They say you die twice. First when you stop breathing, and second, a bit later on, when somebody says your name for the last time"},
    {text: "🎃 31 OCT = 25 DEC 🎅"},
    {text: "Why worry about anything else when you can have one thing  f o r e v e r"},
    {text: "Access is Power"},
    {text: "<code style='font-family: monospace'>\\frac{d❤️}{dt} = a💜\\n\\frac{d💜️}{dt} = -b❤️</code>"},
    {text: "A little bit of an, uh, incident"},
    {text: "Hi! I'm a Python programmer and I like wreaking havoc on school computers :3", author: "Totally not me"},
    {text: "The only true safe house in minecraft is a hidden one", author: "Mumbo Jumbo"},
    {text: "Men are only interested in one thing: mating. Checkmating", author: "Levy Rozman // gotham chess"},
    {text: "The way discord will go down for like 5 minutes and the entire community implodes is so funny to me"},
    {text: "In fact, why didn't English just do a find-and-replace on all the contractions? I'm sure there'dn't've been any problems with that.", author: "Tom Scott"},
    {text: "No matter how kind you are, german kids are always kinder."},
    {text: "20 years ago we had Johnny Cash, Bob Hope & Steve Jobs. Now we have no cash, no hope and no jobs."},
    {text: "Every dead body on Mt. Everest was once a highly motivated person so... maybe calm down."},
    {text: "Privacy is dead enough. We shan't make it more dead that it currently is."},
  ]

  let h3 = document.createElement("h3");

  // h3.style.fontStyle = "italic";
  h3.style.opacity = .7;

  q = choice(quote_pool)

  if (q.author){
    h3.innerHTML = `"<i>${q.text}</i>" ~ ${q.author}`
  } else {
    h3.innerHTML = `"<i>${q.text}</i>"`
  }

  let script = document.currentScript;
  script.parentNode.replaceChild(h3, script);
}
