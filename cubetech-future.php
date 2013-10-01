<?php
/**
 * Plugin Name: cubetech Future
 * Plugin URI: http://www.cubetech.ch
 * Description: cubetech Future - simple Future view with images
 * Version: 1.0
 * Author: cubetech GmbH
 * Author URI: http://www.cubetech.ch
 */

include_once('lib/cubetech-install.php');
include_once('lib/cubetech-metabox.php');
include_once('lib/cubetech-post-type.php');
include_once('lib/cubetech-settings.php');
include_once('lib/cubetech-group.php');

add_image_size( 'cubetech-future-icon', 855, 550, true );

wp_register_style('cubetech-date-picker-css', plugins_url('assets/css/jquery-ui.css', __FILE__) );
wp_enqueue_style('cubetech-date-picker-css');
wp_enqueue_script('jquery');
wp_register_script('cubetech_future_js', plugins_url('assets/js/cubetech-future.js', __FILE__), 'jquery');
wp_enqueue_script('cubetech_future_js');

add_action('wp_enqueue_scripts', 'cubetech_future_add_styles');

function cubetech_future_add_styles() {
	wp_register_style('cubetech-future-css', plugins_url('assets/css/cubetech-future.css', __FILE__) );
	wp_enqueue_style('cubetech-future-css');

}
add_filter( 'template_include', 'cubetech_future_template', 1 );

function cubetech_future_template($template_path) {
    if ( get_post_type() == 'cubetech_future' ) {
        if ( is_single() ) {
            // checks if the file exists in the theme first,
            // otherwise serve the file from the plugin
            if ( $theme_file = locate_template( array ( 'single-future.php' ) ) ) {
                $template_path = $theme_file;
            } else {
                $template_path = plugin_dir_path( __FILE__ ) . '/templates/single.php';
            }
        }
    }
    return $template_path;
}

?>