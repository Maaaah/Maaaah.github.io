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
	window.localStorage.setItem('lastState', "words_overview");
});

$(function() {
	$(".words_link").click(function() {
		var id = window.localStorage.getItem('lastState');
		$('#'+id).hide('slow');	
		id = $(this).attr("rel");
		$('#'+id).show('slow');
		window.localStorage.setItem('lastState', id);
	});
});

