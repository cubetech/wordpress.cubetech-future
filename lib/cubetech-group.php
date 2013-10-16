<?php
function cubetech_future_create_taxonomy() {

	$labels = array(
		'name'                => __( 'Lehrling'),
		'singular_name'       => __( 'Lehrling' ),
		'search_items'        => __( 'Lehrlinge durchsuchen' ),
		'all_items'           => __( 'Alle Lehrlinge' ),
		'edit_item'           => __( 'Lehrling bearbeiten' ), 
		'update_item'         => __( 'Lehrling aktualisiseren' ),
		'add_new_item'        => __( 'Neuen Lehrling hinzufügen' ),
		'new_item_name'       => __( 'Lehrling' ),
		'menu_name'           => __( 'Lehrling' )
	);

	$args = array(
		'hierarchical'        => true,
		'labels'              => $labels,
		'show_ui'             => true,
		'show_admin_column'   => true,
		'query_var'           => true,
		'rewrite'             => array( 'slug' => 'future_overview' )
	);

	register_taxonomy( 'cubetech_future_group', array( 'cubetech_future' ), $args );
	flush_rewrite_rules();
}
add_action('init', 'cubetech_future_create_taxonomy');
?>