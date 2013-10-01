<?php

function cubetech_future_create_post_type() {
	register_post_type('cubetech_future',
		array(
			'labels' => array(
				'name' => __('Future'),
				'singular_name' => __('Future'),
				'add_new' => __('Lehrlingsprojekt hinzufügen'),
				'add_new_item' => __('Neues Lehrlingsprojekt hinzufügen'),
				'edit_item' => __('Lehrlingsprojekt bearbeiten'),
				'new_item' => __('Neues Lehrlingsprojekt'),
				'view_item' => __('Lehrlingsprojekt betrachten'),
				'search_items' => __('Lehrlingsprojekt durchsuchen'),
				'not_found' => __('Keine Lehrlingsprojekte gefunden.'),
				'not_found_in_trash' => __('Keine Lehrlingsprojekte gefunden.')
			),
			'capability_type' => 'post',
			'taxonomies' => array('cubetech_future_group'),
			'public' => true,
			'has_archive' => false,
			'rewrite' => array('slug' => 'Future', 'with_front' => false),
			'show_ui' => true,
			'menu_position' => '20',
			'menu_icon' => null,
			'hierarchical' => true,
			'supports' => array('title', 'editor')
		)
	);
	flush_rewrite_rules();
}

add_action('init', 'cubetech_future_create_post_type');

?>
