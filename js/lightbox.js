/**
 * @fileOverview Un module qui permet d'ajouter une lightbox à vos images
 * @author Alibee by PVP
 * @version 1.0.0
 */

'use strict';

/** La Class qui génère la LightBox. */
class LightBox {
    /**
     * Contructeur de la classe
     * @param {string} imageUrl - L'url de l'image.
     */
    constructor(imageUrl) {
        this.imageUrl = imageUrl;
        this._createLB();
    }

    /**
     * Fonction pour générer le contenu et le style de la LightBox
     * @return {void}
     */
    _createLB() {
        /*** ----------------------------------- ***/
        /*** Lightbox ***/
        /*** ----------------------------------- ***/
        const _lightbox = document.createElement('div');
        _lightbox.classList.add('lightboxjs');
        /*** ----------------------------------- ***/
        /*** CSS style ***/
        /*** ----------------------------------- ***/
        const _style = document.createElement('style');
        _style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
            img.lightbox-js { cursor: pointer; }
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
                z-index: 999;
                font-family: 'Noto Sans', sans-serif;
            }
            .lightboxjs-background {
                cursor: zoom-out;
                background-color: rgb(0 0 0 / 30%);
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
            @keyframes lightboxjs_scale_anim {
                0% { transform: scale(0.5); }
                100% { transform: scale(1); }
            }
            /*** Image ***/
            .lightboxjs-img {
                margin-top: 50px;
                max-width: 100%;
                width: 100%;
                height: 700px;
                max-height: 85%;
                object-fit: contain;
                box-shadow: 0px 0px 100px -55px #00000070;
                filter: drop-shadow(0px 1px 12px #00000030);
                background-color: #0e0e0e;
            }
            /*** Bouton de fermeture ***/
            .lightboxjs-close_button {
                position: absolute;
                top: 15px;
                right: 15px;
                height: 30px;
                width: 30px;
                border: unset;
                background-color: unset;
                cursor: pointer;
                font-weight: 700;
                background-color: #0000004d;
                color: #ffffff;
                border-radius: 50%;
                transition: all .1s ease-in-out;
            }
            .lightboxjs-close_button:after { content: "X"; }
            .lightboxjs-close_button:hover { transform: scale(1.1); }
            /*** Message d'erreur ***/
            .lightboxjs-error-msg {
                color: #FF0000;
                font-size: 14px;
                font-weight: 900;
            }
            /*** ----------------------------------- ***/
            /*** RESPONSIVE ***/
            /*** ----------------------------------- ***/
            @media screen and (max-width: 600px) {
                .lightboxjs, .lightboxjs-background {
                    min-width: 100%;
                    min-height: 100%;
                }
                .lightboxjs-content {
                    padding: 15px 0px 15px 0px !important;
                    max-width: 95%;
                }
                .lightboxjs-close_button { right: 0; }
            }
        `;
        _lightbox.appendChild(_style);
        /*** ----------------------------------- ***/
        /*** Arrière plan ***/
        /*** ----------------------------------- ***/
        const _lightbox__background = document.createElement('div');
        _lightbox__background.classList.add('lightboxjs-background');
        _lightbox__background.addEventListener('click', (e) => this._closeLB(e.target));
        _lightbox.appendChild(_lightbox__background);
        /*** ----------------------------------- ***/
        /*** Contenu ***/
        /*** ----------------------------------- ***/
        const _lightbox__content = document.createElement('div');
        _lightbox__content.classList.add('lightboxjs-content');
        /*** ----------------------------------- ***/
        /*** Image ***/
        /*** ----------------------------------- ***/
        const _lightbox__img = document.createElement('img');
        _lightbox__img.classList.add('lightboxjs-img');
        _lightbox__img.src = this.imageUrl;
        _lightbox__img.addEventListener('error', () => {
            // Si il y a une erreur, on supprime la node img
            _lightbox__img.remove();
            /*** ----------------------------------- ***/
            /*** Message d'erreur ***/
            /*** ----------------------------------- ***/
            const _lightbox__error_msg = document.createElement('p');
            _lightbox__error_msg.classList.add('lightboxjs-error-msg');
            _lightbox__error_msg.innerText = '⚠ Une erreur est survenue lors du chargement de l\'image.';
            _lightbox__content.appendChild(_lightbox__error_msg);
        });
        _lightbox__content.appendChild(_lightbox__img);
        /*** ----------------------------------- ***/
        /*** Bouton de fermeture ***/
        /*** ----------------------------------- ***/
        const _lightbox__close__button = document.createElement('button');
        _lightbox__close__button.classList.add('lightboxjs-close_button');
        _lightbox__close__button.addEventListener('click', (e) => this._closeLB(e.target));
        _lightbox__content.appendChild(_lightbox__close__button);
        /*** ----------------------------------- ***/
        _lightbox.appendChild(_lightbox__content);
        document.body.appendChild(_lightbox);
    }

    /**
     * Fonction pour fermer la lightbox
     * @return {void}
     */
    _closeLB(target) {
        var _target = target.closest('.lightboxjs');
        _target.remove();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // On applique un style globale aux images pour qu'on sache que la lightbox est activé
    const _global_style = document.createElement('style');
    _global_style.innerHTML = 'img.lightbox-js, .lightbox-js img { cursor: zoom-in; }';
    document.body.appendChild(_global_style);

    // Fonction permettant à toutes les images qui ont la classe "lightbox-js" d'avoir la lightbox quand on clique dessus.
    function _addLightboxTo(targets) {
        for (let i = 0; i < targets.length; i++) {
            targets[i].addEventListener('click', (e) => new LightBox(e.currentTarget.src));
        }
    }
    let _lightbox__images = document.querySelectorAll('.lightbox-js img');
    _addLightboxTo(_lightbox__images);
    _lightbox__images = document.querySelectorAll('img.lightbox-js');
    _addLightboxTo(_lightbox__images);
});