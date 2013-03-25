function loadBundles(lang) {
			jQuery.i18n.properties({
			    name:'Messages', 
			    path:'bundle/', 
			    mode:'both',
			    language:lang, 
			    callback: function() {
			        updateAllContent();
			    }
			});
		}

function updateAllContent(){
	$('span').each(function(){
					var This =$(this);
					var selectClass =This.attr('class');
					$('.'+selectClass).html(jQuery.i18n.prop(selectClass));
								})
	}
		

