/**
  {
    "api":1,
    "name":"Fix Newlines",
    "description":"Replaces \\n with actual newlines characters",
    "author":"Marijn Doeve",
    "icon":"return",
    "tags":"fix,newlines"
  }
**/

function main(state) {
    state.fullText = state.fullText.replaceAll("\\n", "\n")
}
