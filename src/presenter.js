//import sumar from "./sumador";

const titulo = document.querySelector("#titulo-post");
const detalle = document.querySelector("#detalle-post");
const post_form = document.querySelector("#publicar-form");
const div_form = document.querySelector("#post-div");

post_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo_post = titulo.value;
  const detalle_post = detalle.value;

  div_form.innerHTML = "<p>" + post_formatter(titulo_post, detalle_post) + "</p>";
});

function post_formatter(titulo, detalle)
{
  const post = "========" + "<br>" + "Titulo: " + titulo + "<br>" +  "---------" +"<br>" + detalle + "<br>" + "========";
  return post;
}