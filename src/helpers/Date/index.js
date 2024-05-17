export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];

// Le code sélectionné est écrit en JavaScript et définit une constante [`MONTHS`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fhelpers%2FDate%2Findex.js%22%2C%22MONTHS%22%5D "src/helpers/Date/index.js") et une fonction [`getMonth`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fhelpers%2FDate%2Findex.js%22%2C%22getMonth%22%5D "src/helpers/Date/index.js").

// La constante [`MONTHS`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fhelpers%2FDate%2Findex.js%22%2C%22MONTHS%22%5D "src/helpers/Date/index.js") est un objet qui associe les numéros de mois (de 0 à 11, conformément à l'indexation des mois en JavaScript où janvier est 0 et décembre est 11) à leurs noms en français.

// La fonction [`getMonth`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fhelpers%2FDate%2Findex.js%22%2C%22getMonth%22%5D "src/helpers/Date/index.js") prend un objet `Date` JavaScript en argument et renvoie le nom du mois en français. Elle utilise la méthode [`getMonth()`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fhelpers%2FDate%2Findex.js%22%2C%22getMonth()%22%5D "src/helpers/Date/index.js") de l'objet `Date`, qui renvoie le mois de la date sous forme de nombre (de 0 à 11), et utilise ce nombre pour obtenir le nom du mois correspondant dans l'objet [`MONTHS`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fhelpers%2FDate%2Findex.js%22%2C%22MONTHS%22%5D "src/helpers/Date/index.js").

// En résumé, ce code fournit un moyen de convertir une date JavaScript en une chaîne de caractères représentant le mois en français.