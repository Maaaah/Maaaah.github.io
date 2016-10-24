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
	
    $('#matter').change(function(){
        if($('#matter').val() == 'words_software') {
            $('#words_software').show(); 
		} else if($('#matter').val() == 'words_hardware') {
            $('#words_hardware').show(); 			
		} else if($('#matter').val() == 'words_research') {
            $('#words_research').show(); 			
        } else {
            $('#words_main').show(); 
        } 
    });
});