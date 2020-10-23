jQuery(document).ready(function($){
	jQuery('#country').bind("change", function(){
		getState(this.id, this.value, jQuery('#state').val());                
	});
	
	jQuery('#d_country').bind("change", function(){
		getState(this.id, this.value, jQuery('#d_state').val());
	});
	
	jQuery('#b_country').bind("change", function(){
		getState(this.id, this.value, jQuery('#b_state').val());
	});
	getState("country", jQuery('#country').val(), jQuery('#state').val());
	getState("d_country", jQuery('#d_country').val(), jQuery('#d_state').val());
	getState("b_country", jQuery('#b_country').val(), jQuery('#b_state').val());
});

function getState(id, value, state_val){
    var data = {};
    data["country_id"] = value;
    data["id"] = id;
	data["state_val"] = state_val;
    jQuery.getJSON(
        urlstates,
        data,
        function(json){
            if (json.status=='OK'){
                if (id=='country') jQuery('#state').not('[type=hidden]').parent().html(json.select_states);
                if (id=='d_country') jQuery('#d_state').not('[type=hidden]').parent().html(json.select_states);
                if (id=='b_country') jQuery('#b_state').not('[type=hidden]').parent().html(json.select_states);
            }
        }
    );
}