<div class="page-content">
	<?php while (have_posts()) : the_post(); ?>
	<p class="content-title-mobile"><?php the_title(); ?></p>
	<div class="content-box" >	
		<?php 
			$contentreturn = '<ul class="cubetech-future">';	
			$i = 0;
	
			foreach ($posts as $post) {		
				$post_meta_data = get_post_custom($post->ID);
				$post_meta = get_post($post->ID);
				
				$titlelink = array('', '');
				foreach($post_meta_data as $p) {
					
					$image = wp_get_attachment_image($p[0], 'cubetech-future-icon');
					
					if($image) {
						$contentreturn .= '
						<li class="cubetech-future-icon cubetech-future-slide-' . $i . '">
							' . $image . '
						</li>';
					}
				}
			}
			echo $contentreturn . '</ul> '; 
		?>
		<div class="content-overlay">
			<p class="content-date"><?php the_date(); ?></p>
			<p class="content-title"><?php the_title(); ?></p>
			<?php the_content(); ?>
			<div id="minimize"><a href="#" id="content-minimize">-<p id="minimize-info">Info</p></a></div>
		</div>
		<div id="maximize"><a href="#" id="content-maximize">+<p id="maximize-info">Info</p></a></div>
	</div>
	<div id="left_arrow_future"></div>
	<div id="right_arrow_future"></div>
	<div class="button-left-mobile"><a href="#">Projektinfos</a></div>
	<div class="button-right-mobile"><a href="#">Nächstes >></a></div>
	<div class="cubetech-future-progress"></div>
	<?php endwhile; ?>
</div>