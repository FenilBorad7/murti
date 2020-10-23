var areq = null;
var timeoutId = null;

function ajaxSearch(suffixId){
	searchq = jQuery('#jshop_search' + suffixId).val();
	catid = encodeURI(jQuery('#ajaxcategory_id+ suffixId').val());
	if (timeoutId){
		clearTimeout(timeoutId);
	}
	if (searchq != ''){
		timeoutId = setTimeout(function(){
			if (areq){
				areq.abort();
			}
			areq = jQuery.ajax({
				type: "POST",
				url: ajaxlink,
				data: {
				    search         : searchq,
                                    search_type    : searchtype,
                                    category_id    : catid,
                                    include_subcat : include_subcat,
                                    displaycount   : displaycount,
                                    setsearchdata  : '1'
				}
			}).done(function( data ) {
				jQuery('#search-result'+ suffixId).css({'visibility': 'visible'});
				jQuery('#search-result'+ suffixId).html(data);
			});
		},500);
	} else {
		jQuery('#search-result'+ suffixId).css({'visibility': 'hidden'});
		jQuery('#search-result'+ suffixId).html('');
	}
}

function isEmptyValue(value){
	var pattern = /\S/;
	return ret = (pattern.test(value)) ? (true) : (false);
}

jQuery(document).click(function(){
	jQuery('#search-result'+ suffix_id).css({'visibility': 'hidden'});
	jQuery('#show_categories_filter'+ suffix_id).change(function(){
		jQuery('#ajaxcategory_id'+ suffix_id).val(this.value);
	})
});