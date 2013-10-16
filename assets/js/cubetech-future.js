jQuery(function(jQuery) {
	
	jQuery('.cubetech-upload-future-button').click(function(e) {
		
		e.preventDefault();
		frame = wp.media({
			frame: 'post',
			multiple : true, // set to false if you want only one image
			library : { type : 'image'},
		});
		frame.on('close',function(data) {
			var imageArray = [];
			var counter = 1;
			if ( jQuery('.cubetech-preview-image').size() >= 1 ) {
				counter = jQuery('.cubetech-preview-image').size()+1;
			}			
			images = frame.state().get('selection');
			images.each(function(image) {
			
				var emptyPreviewImageExist =  jQuery('.cubetech-preview-image[src=""]').size();
				var emptyUploadImageExist =  jQuery('.cubetech-upload-image[src=""]').size();
				var lastPreviewImage = jQuery('.cubetech-preview-image').last();
				var lastUploadImage = jQuery('.cubetech-upload-image').last();
				
				if ( emptyUploadImageExist == 0 && emptyPreviewImageExist == 0 ) {
					jQuery('#cubetech_future_movie').parent('td').parent('tr').before('<tr><th><label for="cubetech_future_image">Bild'+counter+'</label></th><td><input name="cubetech_future_image-'+counter+'" type="hidden" class="cubetech-upload-image cubetech-upload-image-'+counter+'" value="" /><img src="" class="cubetech-preview-image cubetech-preview-image-'+counter+' cubetech_future_image-'+counter+'" alt="" style="max-height: 100px;" /><br /><small><a href="#" class="cubetech-clear-image-button">Bild entfernen</a></small><br clear="all" /><span class="description" style="display: inline-block; margin-top: 5px;"></span></td></tr>');
				}		
					
				var cubetechPreviewImage = jQuery('.cubetech-preview-image[src=""]').first();
				var cubetechUploadField = jQuery('.cubetech-upload-image[value=""]').first();					
											
				cubetechPreviewImage.attr('src', image.attributes.url).fadeIn();
				cubetechUploadField.attr('value', image.attributes.id);		
				
				counter++;
			});
			
			jQuery("#imageurls").val(imageArray.join(",")); // Adds all image URL's comma seperated to a text input
			jQuery('.cubetech-clear-image-button').on('click',function() {
				jQuery(this).parent().siblings('.cubetech-upload-image').val('');
				jQuery(this).parent().siblings('.cubetech-preview-image').attr('src','');		
				jQuery(this).parent().siblings('.cubetech-preview-image').fadeOut();
				return false;
			});			
		});	
		
		frame.open()	
	});
	


});

jQuery(document).ready(function(){
	var contentwidth = jQuery('.content-box').width();
	var imgcount = jQuery(".cubetech-future > li").size();
	var contentpart = contentwidth / imgcount;	

	
	jQuery('.cubetech-future-progress').width(contentpart);

	jQuery('.cubetech-future > li').first().addClass('aktiv');
	jQuery('.cubetech-future > li').hide();    
	jQuery('.cubetech-future > li.aktiv').show();

	jQuery('.button-right-mobile').click(function(){
    	indeximage = jQuery('.cubetech-future > li.aktiv').index();	
	    jQuery('.cubetech-future > li.aktiv').removeClass('aktiv').addClass('oldaktiv');    
	    if ( jQuery('.oldaktiv').is(':last-child')) {
			jQuery('.cubetech-future > li').first().addClass('aktiv');
			position = 0;
	    	jQuery('.cubetech-future-progress').animate({'left': position}, 200);
	    } else{
	        jQuery('.oldaktiv').next().addClass('aktiv');
	        indeximage = jQuery('.cubetech-future > li.aktiv').index();
	        position = contentpart * indeximage;
	        jQuery('.cubetech-future-progress').animate({'left': position}, 200);
		}
	    jQuery('.oldaktiv').removeClass('oldaktiv');
	    jQuery('.cubetech-future > li').fadeOut();
	    jQuery('.cubetech-future > li.aktiv').fadeIn();		        
	});		
    jQuery('#right_arrow_future').click(function(){
    	indeximage = jQuery('.cubetech-future > li.aktiv').index();	
	    jQuery('.cubetech-future > li.aktiv').removeClass('aktiv').addClass('oldaktiv');    
	    if ( jQuery('.oldaktiv').is(':last-child')) {
			jQuery('.cubetech-future > li').first().addClass('aktiv');
			position = 0;
	    	jQuery('.cubetech-future-progress').animate({'left': position}, 200);

	    } else{
	        jQuery('.oldaktiv').next().addClass('aktiv');
	        indeximage = jQuery('.cubetech-future > li.aktiv').index();
	        position = contentpart * indeximage;
	        jQuery('.cubetech-future-progress').animate({'left': position}, 200);
	        
		}
	    jQuery('.oldaktiv').removeClass('oldaktiv');
	    jQuery('.cubetech-future > li').fadeOut();
	    jQuery('.cubetech-future > li.aktiv').fadeIn();	        
	});
		  
	jQuery('#left_arrow_future').click(function(){
		indeximage = jQuery('.cubetech-future > li.aktiv').index();	
	    jQuery('.cubetech-future > li.aktiv').removeClass('aktiv').addClass('oldaktiv');    
	    if ( jQuery('.oldaktiv').is(':first-child')) {
	    	jQuery('.cubetech-future > li').last().addClass('aktiv');
	    	position = contentpart * (imgcount - 1);
	    	jQuery('.cubetech-future-progress').animate({'left': position}, 200);
	    } else{
		    jQuery('.oldaktiv').prev().addClass('aktiv');
		    indeximage = jQuery('.cubetech-future > li.aktiv').index();
	        position = contentpart * indeximage;
		    jQuery('.cubetech-future-progress').animate({'left': position}, 200);
	    }
	    jQuery('.oldaktiv').removeClass('oldaktiv');
	    jQuery('.cubetech-future > li').fadeOut();
	    jQuery('.cubetech-future > li.aktiv').fadeIn();
    }); 
    
	var gridwidth = jQuery('.grid').width();
	var gridcount = jQuery(".grid").size();
	var gridpart = gridwidth / gridcount;	
	
	jQuery('.cubetech-future-overview-progress').width(gridpart);
    
    jQuery('.grid').first().addClass('aktiv');
	jQuery('.grid').hide();    
	jQuery('.grid.aktiv').show();
    
    jQuery('#right_arrow_future_overview').click(function(){
    	indexgrid = jQuery('.grid.aktiv').index();	
	    jQuery('.grid.aktiv').removeClass('aktiv').addClass('oldaktiv');    
	    if ( jQuery('.oldaktiv').is(':last-child') ) {
			jQuery('.grid').first().addClass('aktiv');
			position = 0;
	    	jQuery('.cubetech-future-overview-progress').animate({'left': position}, 200);

	    } else{
	        jQuery('.oldaktiv').next().addClass('aktiv');	
	        indexgrid = jQuery('.grid.aktiv').index();
	        position = gridpart * indexgrid;
	        jQuery('.cubetech-future-overview-progress').animate({'left': position}, 200);	             
		}
	    jQuery('.oldaktiv').removeClass('oldaktiv');
	    jQuery('.grid').fadeOut();
	    jQuery('.grid.aktiv').fadeIn();	        
	});
		  
	jQuery('#left_arrow_future_overview').click(function(){
		indexgrid = jQuery('.grid.aktiv').index();	
	    jQuery('.grid.aktiv').removeClass('aktiv').addClass('oldaktiv');    
	    if ( jQuery('.oldaktiv').is(':first-child')) {
	    	jQuery('.grid').last().addClass('aktiv');
	    	position = gridpart * (gridcount - 1);
	    	jQuery('.cubetech-future-overview-progress').animate({'left': position}, 200);
	    } else{
		    jQuery('.oldaktiv').prev().addClass('aktiv');
		    indexgrid = jQuery('.grid.aktiv').index();
	        position = gridpart * indexgrid;
		    jQuery('.cubetech-future-overview-progress').animate({'left': position}, 200);
	    }
	    jQuery('.oldaktiv').removeClass('oldaktiv');
	    jQuery('.grid').fadeOut();
	    jQuery('.grid.aktiv').fadeIn();
    }); 
    
    /* Content einblenden */
	jQuery('#futuremaximize').click(function(){
		jQuery('.content-overlay').css('display','block'); 
		jQuery('#futuremaximize').animate({ opacity: "0" }, 200);
		jQuery('.content-overlay').animate({ opacity: "1" }, 500, function() { 
			jQuery('#futuremaximize').css('z-index','999') 
		});
		return false;
	});
	jQuery('#futureminimize').click(function(){
		jQuery('.content-overlay').animate({ opacity: "0" }, 500, function() {
			jQuery('#futuremaximize').css('z-index','1001'); 
			jQuery('.content-overlay').css('display','none'); 
			jQuery('#futuremaximize').animate({ opacity: "1" }, 200); 
		});
		return false;
	});
});
