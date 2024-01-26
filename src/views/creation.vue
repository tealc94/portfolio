<template>
  <div class="container_img">
    <div class="CV">
        <h2>Mon CV</h2>
       <!-- <button class="survolOmbre" @click="ouvrirCVNouvelOnglet"><img class="imgCreation" src="../assets/CV.jpg" alt="Mon CV"></button>-->
        <button class="survolOmbre" @click="ouvrirCVNouvelOnglet"><img class="imgCreation" src="../assets/CV.jpg" alt="Mon CV"></button>
        <div>
          <p>Date de création 18/10/2023</p>
        </div>
          <div class="lien"><a target="_blank" href="https://github.com/tealc94/Devoir_CV/tree/create/3"><img src="../assets/signe-github-black.png" alt="GitHub"></a>
        </div>
    </div>

    <div class="cahierDesCharges">
        <h2>Cahier des charges</h2>
        <button class="survolOmbre" @click="ouvrirPDF"><img class="imgCreation" src="../assets/cahier_des_charges.jpg" alt="Cahier des charges"></button>        
        <p>Date de création 2/11/2023</p>
      </div>

    <div class="listeComment">
        <h2>Liste commentaire</h2>
        <button class="survolOmbre" @click="ouvrirCommentNouvelOnglet"><img class="imgCreation" src="../assets/liste_commentaire.jpg" alt="Liste commentaire"></button> 
        <div>
          <p>Date de création 11/11/2023</p>
        </div>
          <div class="lien"><a target="_blank" href="https://github.com/tealc94/Devoir_commentaire"><img src="../assets/signe-github-black.png" alt="GitHub"></a>
        </div>
    </div>
  </div>
</template>
  
<style>
.container_img{
    display: flex;
    justify-content: center;
    gap: 50px;
}

.imgCreation{
    border: 2px solid black;
    height: 300px;
    cursor: pointer;    
}

.lien{
  display: flex;
  justify-content: center;
}

.survolOmbre:hover{
  box-shadow: 5px 5px 5px black;
}
</style>


<script>
export default {
  methods: {
    OpenNewTab(monFichier){
      const fichier = process.env.BASE_URL + monFichier;
      const nouvelOnglet = window.open('', '_blank');
      nouvelOnglet.location.href = fichier;
    },

    ouvrirCVNouvelOnglet(){
      this.OpenNewTab('MonCV.html');
    },
    ouvrirPDF(){
      this.OpenNewTab('Cahier_des_charges_La_socketterie.pdf');
    },
    ouvrirCommentNouvelOnglet(){
      this.OpenNewTab('listeCommentaire.html');
    }
  }
};
</script>

