var socket = io.connect();
function addMessage(msg,pseudo){
	$("#chatEntries").append('div class="message"><p>' + pseudo + ' : ' + msg + '</p></div>');
}

function sentMessage() {
	if ($('#messageInput').val() != "")
	{
		socket.emit('message',$('#messageInput').val());
		addMessage($('#messageInput').val(),"Me", new Date().toISOString(), true);
		$("#messageInput").val('');
	}
}

