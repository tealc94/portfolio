<template>
  <div class="container_img">
    <div class="CV">
        <h2>Mon CV</h2>
        <button @click="ouvrirCVNouvelOnglet"><img class="imgCreation" src="../assets/CV.jpg" alt="Mon CV"></button>
        <div>
          <p>Date de création 18/10/2023</p>
        </div>
          <div class="lien"><a target="_blank" href="https://github.com/tealc94/Devoir_CV/tree/create/3"><img src="../assets/signe-github-black.png" alt="GitHub"></a>
        </div>
    </div>

    <div class="cahierDesCharges">
        <h2>Cahier des charges</h2>
        <button @click="ouvrirPDF"><img class="imgCreation" src="../assets/cahier_des_charges.jpg" alt="Cahier des charges"></button>        
        <p>Date de création 2/11/2023</p>
      </div>

    <div class="listeComment">
        <h2>Liste commentaire</h2>
        <button @click="ouvrirCommentNouvelOnglet"><img class="imgCreation" src="../assets/liste_commentaire.jpg" alt="Liste commentaire"></button> 
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
</style>


<script>
export default {
  methods: {
    ouvrirCVNouvelOnglet(){
      const fichierCV = process.env.BASE_URL + 'MonCV.html';
      const nouvelOngletCV = window.open('', '_blank');
      nouvelOngletCV.location.href = fichierCV;
    },
    ouvrirPDF(){
      const fichierPDF = process.env.BASE_URL + 'Cahier_des_charges_La_socketterie.pdf';
      const nouvelOngletPDF = window.open('', '_blank');
      nouvelOngletPDF.location.href = fichierPDF;
    },
    ouvrirCommentNouvelOnglet(){
      const fichierComment = process.env.BASE_URL + 'listeCommentaire.html';  
      const nouvelOngletComment = window.open('', '_blank');
      nouvelOngletComment.location.href = fichierComment;
    }
  }
};
</script>

