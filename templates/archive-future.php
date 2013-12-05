<?php
$categories = get_terms('cubetech_future_group');
$counter = 2;
$count = 0;
$numberposts = 6;
?>
<p class="future-title-mobile">Übersicht Future</p>
<div class="future-overview">

	<?php
	
	
	
	$categorie    = get_query_var($wp_query->query_vars['taxonomy']);


      //select posts in this category (term), and of a specified content type (post type) 
      $posts = get_posts(array(
        'post_type' => 'cubetech_future',
        'tax_query' => array(
		array(
			'taxonomy' => 'cubetech_future_group',
			'field' => 'slug',
			'terms' => $categorie,
		)),
        'numberposts' => -1, // to show all posts in this category, could also use 'numberposts' => -1 instead
		));
      foreach($posts as $post): // begin cycle through posts of this category
       		setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
        	$post_meta_data = get_post_custom($post->ID);
			$post_meta = get_post($post->ID);
			//$titlelink = array('', '');

			
		
			if($count % $numberposts == 0){
				echo '<div class="grid">';
			}
			
			if ( $counter == 2 ) {
				echo '<div class="row">';
			} 
			$counter--;

			$image = wp_get_attachment_image_src($post_meta_data['cubetech_future_image-1'][0], 'cubetech-future-icon');
			$permalink = get_permalink( $post );
		?>
		<a href="<?php echo $permalink?>">
		    <article id="post-<?php the_ID(); ?>" style="background: url(<?php echo $image[0]; ?>) no-repeat center center;" class="col-sm-6" >
				<div class="archive-entry">	
		          <p class="overview-title"><?php the_title(); ?></p>
		          <p class="overview-date"><?php the_date(); ?></p>
				</div>
		        <?php echo get_post_meta($post->ID, 'field_key', true); ?>
		    </article>
		</a>
		<?php
		if ( $counter == 0 || count($posts)-1 == $count ) {
			echo '</div>';
			$counter = 2;
		} 
		if( $count % $numberposts == 5 || count($posts)-1 == $count ) {
			echo '</div>';
		}
		$count ++ ;	
		endforeach;
		?>
		
</div>

<div id="left_arrow_future_overview"></div>
<div id="right_arrow_future_overview"></div>
<div class="cubetech-future-overview-progress"></div>