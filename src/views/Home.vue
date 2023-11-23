<template>
<body>
    <div id="container-accueil">
      <img class="img-accueil" src="../assets/accueil2.jpg" alt="accueil" />
      <h1 class="titre-accueil">Jean-Yves PIERRE-GEROME</h1>
      <h2 class="sous-titre-accueil">Développeur web Junior</h2>
    </div>
    <div id="container-quiSuisJe">
      <h2>Qui suis-je ?</h2>
      <a href="#container-accueil"><img class="photo" src="../assets/photo.jpg" alt="photo"/></a>
      <p>
        Je suis Jean-Yves PIERRE-GEROME, responsable du supoprt technique pour
        un éditeur de logiciel. En raison de la collaboration continue avec
        notre équipe de développeurs, j'ai décidé de suivre une formation de
        développeur wev pour approfondir ma compréhension de ce domaine.
      </p>
    </div>

    <h2>Mes créations</h2>
    <div id="container_creaction">
      <div class="creation">
        <button id="ouvrirModal"><img class="img_modal" src="../assets/CV.jpg" alt="image miniature CV"/></button>
      </div>
    </div>

    <!-- Modal Creation -->
    <div id="monModal" class="modal">
      <div class="contenu_modal">
        <div class="fermer" id="fermerModal"></div>
        <creation></creation>
      </div>
    </div>

    <div id="container_contact">
      <img class="img-contact" src="../assets/Contact.jpg" alt="contact" />
      <div class="formulaire">
        <h2 class="sous-titre-contact">Contacter moi</h2>
        <form action="#" method="post">
          <table>
            <tr>
              <td>Nom*</td>
              <td>Prénom</td>
            </tr>
            <tr>
              <td><input id="firstName" type="text" required /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Email*</td>
              <td>Téléphone</td>
            </tr>
            <tr>
              <td><input type="email" name="" id="mail" required /></td>
              <td><input type="tel" name="" id="" /></td>
            </tr>
            <tr>
              <td colspan="2">Objet*</td>
            </tr>
            <tr>
              <td colspan="2"><input class="objet" type="text" required /></td>
            </tr>
            <tr>
              <td colspan="2">Message*</td>
            </tr>
            <tr>
              <td colspan="2"><textarea class="objet" name="" id="" cols="30" rows="10" required></textarea>
              </td>
            </tr>
            <span>*champs obligatoire</span>
            <br />
            <input id="envoiMessage" type="submit" value="Envoyer" />
          </table>
        </form>
      </div>
    </div>
  </body>
</template>

<script setup>
import creation from "./creation.vue";

document.addEventListener("DOMContentLoaded", function () {
  let ouvrirModal = document.getElementById("ouvrirModal");
  let modal = document.getElementById("monModal");
  let fermerModal = document.getElementById("fermerModal");

  let form = document.querySelector("form");
  let btn = document.getElementById("envoiMessage");

  let destinataire = "john.doe@gmail.com";

  //ouverture de la modal après le clic sur l'image
  ouvrirModal.addEventListener("click", function () {
    modal.style.display = "block";
  });

  //fermeture de la modal au clic
  fermerModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  //fermeture de la modal lors du clic à l'exterieur de la modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Votre message a été envoyé à l'adresse " + destinataire);
  });
});
</script>


<style>
/* style sur le body  */
*,
::before,
::after {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#container-accueil {
  width: 100%;
  margin: 0 auto;
}
#container-accueil .img-accueil {
  max-width: 100%;
  height: auto;
}

.titre-accueil {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  text-align: center;
}

.sous-titre-accueil {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  text-align: center;
}

#container-quiSuisJe {
  width: 80%;
  margin: 0 auto;
  max-width: 800px;
  height: 250px;
}

.photo {
  float: left;
  padding-right: 20px;
  border-radius: 50%;
}

h2 {
  text-align: center;
}

#container_creaction {
  display: flex;
  justify-content: center;
}

.creation {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 30%;
  text-align: center;
}

/*--CSS modal--*/
#ouvrirModal {
  height: 300px;
  cursor: pointer;
}

.img_modal {
  height: 300px;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 105%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.contenu_modal {
  background-color: #fff;
  margin: 1% auto;
  padding: 20px;
  width: 60%;
  height: 60%;
  max-height: 90vh;
  overflow-x: hidden;
}

.fermer {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

#container_contact {
  position: relative;
}

.img-contact {
  width: 100%;
  height: auto;
  display: block;
}

.formulaire {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}

.sous-titre-contact {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: black;
  text-align: center;
}
/*--CSS Formulaire--*/ 
table {
  border: 2px solid black;
  padding: 20px;
  border-radius: 20px;
}

#envoiMessage {
  width: 100px;
}

.objet {
  width: 100%;
}

</style>