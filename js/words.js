$(function() {
    $('#words_main').show();
    $('#words_hardware').hide();
    $('#words_software').hide();
    $('#words_research').hide();
    $('#project_tricorder').hide();
    $('#project_blaid').hide();	
    $('#project_hearing_aid').hide();
    $('#project_speakerphone').hide();
    $('#project_audio').hide();
    $('#project_iot').hide();	
	$('#project_blaid_image').hide();
	$('#project_blaid_snapshot').hide();
	$('#project_audio_image').hide();
	$('#project_audio_snapshot').hide();
	$('#project_hearing_aid_image').hide();
	$('#project_hearing_aid_snapshot').hide();
	$('#project_speakerphone_image').hide();
	$('#project_speakerphone_snapshot').hide();
	$('#project_iot_image').hide();
	$('#project_iot_snapshot').hide();	
	
	window.localStorage.setItem('lastState', "words_overview");
	window.localStorage.setItem('lastImage', "project_tricorder");
});

$(function() {
	$(".words_link").click(function() {
		var id = window.localStorage.getItem('lastState');
		$('#'+id).hide('slow');	
		id = $(this).attr("rel");
		$('#'+id).show('slow');
		window.localStorage.setItem('lastState', id);
		var n = id.search('project');
		if (n > -1) {
			var old_id = window.localStorage.getItem('lastImage');
			$('#'+old_id+"_image").hide('slow');
			$('#'+id+"_image").show('slow');
			$('#'+old_id+"_snapshot").hide('slow');
			$('#'+id+'_snapshot').show('slow');
			window.localStorage.setItem("lastImage", id);

		};
	});
});

