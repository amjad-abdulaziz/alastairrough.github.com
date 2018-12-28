<!--
  // dynamically change the height of an embedded iFrame
  // tested in FF2/IE7 (Windows), FF2/Safari3 (Mac)
  // *NOTE: resizing the iframe doesnot work across multiple domains
  function resizeIframe(frameElement) {
	try {
		// find the height of the internal page
  		var outer_height = frameElement.contentWindow.document.body.scrollHeight;
		if (outer_height > 0) {
			 //change the height of the iframe
	  		frameElement.height = outer_height;
		}
		//alert("resizeIframe() works! outer_height="+outer_height);
	} catch(e) {
		//alert("resizeIframe() fails!");
	}
}

//script to parse and layout the form
function layoutform(formID)
{
		
 //declare an array to hold labels
 labelArray = new Array();
		
 //pass the formID and declare the form
 mForm = document.forms[formID];
		
 //place the form HTML into a string
 mStr = (mForm.innerHTML);
 strLength = mStr.length;
		
 //We want to strip the 70%/30% from the HTML
		
 //Get the first part of the innerHTML
 indx = mStr.indexOf('<TR>');
 //innerHTM_1 = mStr.substr(0, mStr.indexOf('<TR>'));
 //innerHTM_2 = mStr.substr((mStr.indexOf('</TR>')+5),mStr.length);
 
 innerHTM_1 =  "<TABLE class=form width=100% align=center><TBODY>";
 innerHTM_2 = "<td " + mStr.substr(mStr.indexOf('v'),mStr.length);
 

 mForm.innerHTML = innerHTM_1 + innerHTM_2;

}

	function newImage(arg) {
		if (document.images) {
			rslt = new Image();
			rslt.src = arg;
			return rslt;
		}
	}

	function changeImages() {
		if (document.images && (preloadFlag == true)) {
			for (var i=0; i<changeImages.arguments.length; i+=2) {
				document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
			}
		}
	}

	var preloadFlag = false;
	function preloadImages() {
		if (document.images) {
			// DISABLE THIS LEGACY CODE
			// nav_1_schedules_over = newImage("/images/nav-1_schedules_over.gif");
			// nav_1_fares_over = newImage("/images/nav-1_fares_over.gif");
			// nav_1_conditions_over = newImage("/images/nav-1_conditions_over.gif");
			// nav_2_int_res_over = newImage("/images/nav-2_int_res_over.gif");
			// nav_2_int_travel_over = newImage("/images/nav-2_int_travel_over.gif");
			// nav_2_int_about_over = newImage("/images/nav-2_int_about_over.gif");
			// nav_2_int_news_over = newImage("/images/nav-2_int_news_over.gif");
			// nav_2_int_business_over = newImage("/images/nav-2_int_business_over.gif");
			// nav_2_int_employment_over = newImage("/images/nav-2_int_employment_over.gif");
			// nav_2_int_contact_over = newImage("/images/nav-2_int_contact_over.gif");
			// nav_2_int_home_over = newImage("/images/nav-2_int_home_over.gif");
			// preloadFlag = true;
		}
	}

	function Navigate(choice) {
		var spot = choice.options[choice.selectedIndex].value;
		if (spot != 'choose') {
			location.href = spot;
		}
	}

	//script for promo pop-up
	function popUp() {
		for (i=0; i<popUp.arguments.length; i++) {
			if (i == 0) {
				var theUrl = popUp.arguments[i];
			} else if (i == 1) {
				var theName = popUp.arguments[i];
			} else if (i == 2) {
				var theWidth = popUp.arguments[i];
			} else if (i==3) {
				var theHeight = popUp.arguments[i];
			}
		}
		if (theWidth == null) {
			var theWidth="400";
		}
		if (theHeight == null) {
			var theHeight="450";
		}

		var theStuff = "resizable,scrollbars=yes,toolbar=no,menubar=no,status=yes,width=" + theWidth + ",height=" + theHeight;
		var newWindow = window.open(theUrl, theName, theStuff);
		newWindow.focus();
	}

	
	// -->
var xmlDoc, xmlObj, xmlItems;

function loadXML(xmlFile)
{
	/*
	alert("loadXML being called!: " + xmlFile);
	xmlDoc.async="false";
  	xmlDoc.onreadystatechange=verify;
  	xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  	xmlDoc.load(xmlFile);
  	xmlObj = xmlDoc.documentElement;
  	*/
  	
  	//load xml file
	// code for IE
	if (window.ActiveXObject)
	  {
	  xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	  xmlDoc.async=false;
	  xmlDoc.load(xmlFile);
	  xmlObj = xmlDoc.documentElement;
	  //xmlDoc.getElementsByTagName("newsitem").length
	  verify("No. of news items: " + xmlObj.childNodes.length)
	  }
	// code for Mozilla, etc.
	else if (document.implementation &&
	document.implementation.createDocument)
	  {
	  xmlDoc = document.implementation.createDocument("","doc",null);
	  xmlDoc.load(xmlFile);
	  xmlObj = xmlDoc.documentElement;
	  xmlDoc.onload=verify(xmlDoc)
	  }
  	
	  //display releases
	  xmlItems = getNoItems();
	  buildTOC(0);
	  
}

function verify(strMsg)
{
	// 0 Object is not initialized
  	// 1 Loading object is loading data
  	// 2 Loaded object has loaded data
  	// 3 Data from object can be worked with
  	// 4 Object completely initialized
	if (xmlDoc.readyState !=4)
	{
		alert("error loading xml file: " + strMsg);
	}

}

function getNoItems()
{
	noItems = xmlDoc.getElementsByTagName("newsitem").length;
	return noItems;
}

function buildTOC(indx)
{
	strHTML = "";
	tblOpen  = "<table id='tblNews'>";
	tblClose = "</table>";
	tdTitle  = "<td class=newsTitle valign='top' width='120'>";
	tdBrief  = "<td class=newsBrief valign='top'>";//<h2>Title</h2>NewsContent</td>";
	indxMax  = indx+9;
	
	//alert ("first:" + indx + ", last: " + indxMax + ' items:' + xmlItems);
	
	if ( indxMax > xmlItems)
	{ indxMax = xmlItems }
	
	for (var x = indx; x < indxMax; x++)
   	{
	   	strPDF     = xmlDoc.getElementsByTagName("PDF")[x].text;
	   	strDate    = "<a href='http://http/files/newspdfs/" + strPDF + "'>" + xmlDoc.getElementsByTagName("date")[x].text + "</a>";
	   	strTitle   = "<h2 class='tocTITLE'>" + "<a href='http://http/files/newspdfs/" + strPDF + "'>" + xmlDoc.getElementsByTagName("title")[x].text + "</a>" + "</h2>";	   	strContent = xmlDoc.getElementsByTagName("desc")[x].text;
	   	
	   	tdDate    = tdTitle + strDate + "<td>";
	   	tdContent = tdBrief + strTitle + strContent + "</td>";
	   	
	   	tblRow   = "<tr>" + tdDate + tdContent + "</tr>";
   		strHTML = strHTML + tblRow;
   	}
   	
   	strHTML = tblOpen + strHTML + tblClose;
  
   	buildNav(indx,indxMax)
   	
   	newsTOC.innerHTML = strHTML;

}

function buildNav(start,end)
{
	  first = start + 1;
	  last  = end;
	  prev  = start-10; //0;
	  
	  if ( prev < 0)
	  { prev = 0; }
	  
	  strList = "Listing " + first + " to " + last + " of " + xmlItems;
	  strPrev = "[ <a href='javascript:buildTOC(" + prev + ")'><< Previous 10</a> ] ";
	  strNext = " [ <a href='javascript:buildTOC(" + last + ")'>Next 10  >></a> ]";
	  
	  strNav = strPrev + strList + strNext;
	  
	  navigation.innerHTML = strNav;
}


