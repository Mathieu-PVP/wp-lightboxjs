<?php
/*
    Plugin Name: WP Lightboxjs
    Plugin URI: https://github.com/Mathieu-PVP/wp-lightboxjs
    Description: Un plugin qui permet d'avoir une lightbox pour vos images
    Author: Alibee by PVP
    Author URI: https://alibee.fr/
    Version: 1.0.0
*/

/**
 * CREATION DES MENUS
 */

 // Création des pages dans le menu vertical de WordPress
function wp_lightbox_js__menu_entries() {
    // Importation du logo
    $icon = plugins_url('/assets/icon.png', __FILE__);
    // Ajout des entrées dans le menu vertical de WordPress
    add_menu_page('WP Lightboxjs', 'WP LightboxJs', 'manage_options', 'wp-lightbox-js-plugin-settings', 'wp_lightbox_js_settings_page', $icon);
}

// Ajout du plugin dans le menu principale de WordPress
add_action('admin_menu', 'wp_lightbox_js__menu_entries');

// Contenu de la page principal
function wp_lightbox_js_settings_page() {
    // Importation du contenu
    include('pages/settings.php');
}

// Script de la lightbox
function wp_lightbox_js_script() {
?>
    <script type="text/javascript" src="/wp-content/plugins/wp-lightboxjs/js/lightbox.min.js"></script>
<?php
}

// Injection du script dans la balise "head" du site
add_action('wp_head', 'wp_lightbox_js_script');
