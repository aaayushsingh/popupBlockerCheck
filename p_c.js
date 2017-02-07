function openPopUp(urlToOpen) {
  var popup_window=window.open(urlToOpen,"p_check","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, width=0, height=0");            
  try {
    popup_window.focus();
    popup_window.close();
	return true;   
  }
  catch (e) {
    alert("Pop-up Blocker is enabled! Please add this site to your exception list. \n\nSee our FAQ section on how to unblock popups.");
	return false;
  }
return false;
}

if(openPopUp("http://www.printuu.com")){
		//not blocked, do your work here
		


	} else {

		/*#some_item*/.text("Make sure that the popups have been unblocked and then try again.");
	}


