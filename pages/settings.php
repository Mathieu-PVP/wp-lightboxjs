<?php
    // PHP personnalisation
?>

<!-- HTML personnalisation -->
<div class="lightboxjs">
    <div class="lightboxjs-background"></div>
    <div class="lightboxjs-content">
        <h1 class="lightboxjs-title"><span class="lightboxjs-primary-text">Lightbox</span><span class="lightboxjs-secondary-text">.Js</span> (activé)<h1>
        <p class="lightboxjs-description">Veuillez placer la classe HTML "<strong><i>lightbox-js</i></strong>" sur l'image où vous souhaitez activer la lightbox.</p>
    </div>
</div>
<!-- CSS personnalisation -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    /*** ----------------------------------- ***/
    /*** LIGHTBOX ***/
    /*** ----------------------------------- ***/
    .lightboxjs, .lightboxjs-background {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
    }
    .lightboxjs {
        overflow-y: auto;
        font-family: 'Noto Sans', sans-serif;
    }
    .lightboxjs-background {
        background-color: rgb(0 0 0 / 40%);
        backdrop-filter: blur(30px);
    }
    /*** ----------------------------------- ***/
    /*** CONTENU ***/
    /*** ----------------------------------- ***/
    .lightboxjs-content {
        position: relative;
        border-radius: 5px !important;
        padding: 15px !important;
        max-width: 85%;
        width: 700px;
        margin: 50px auto auto auto;
        text-align: center;
        animation: lightboxjs_scale_anim .3s linear forwards;
        
    }
    .lightboxjs-title, .lightboxjs-description, #wpfooter {
        color: #ffffff;
        letter-spacing: 1px;
        text-shadow: 0px 0px 45px #00000030;
    }
    #footer-thankyou a, { color: #00ff7c; }
    #footer-thankyou a, .lightboxjs-primary-text, .lightboxjs-secondary-text { font-weight: 600; }
    .lightboxjs-primary-text { color: #f0dc4e; }
    .lightboxjs-secondary-text { color: #2e302c; }
    @keyframes lightboxjs_scale_anim {
        0% { transform: scale(0.5); }
        100% { transform: scale(1); }
    }
</style>