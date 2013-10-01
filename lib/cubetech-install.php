<?php

	function cubetech_future_activate() {
		update_option( 'cubetech_future_link_title', 'Mehr erfahren' );
	}
	register_activation_hook( __FILE__, 'cubetech_future_activate' );

	function cubetech_future_uninstall()
	{
	    if ( ! current_user_can( 'activate_plugins' ) )
	        return;
	    check_admin_referer( 'bulk-plugins' );

	    // Important: Check if the file is the one
	    // that was registered during the uninstall hook.
	    if ( __FILE__ != WP_UNINSTALL_PLUGIN )
	        return;

		delete_option( 'cubetech_future_link_title' );

	}
	register_uninstall_hook( __FILE__, 'cubetech_future_uninstall' );

?>