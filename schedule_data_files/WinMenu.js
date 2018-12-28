/**** NOT A FREEWARE *** NOT A SHAREWARE *** 

                    COPYRIGHT 2003 MAESTROCMS CORP.
                      http://www.maestrocms.com

Update History:
03.09.25 jchen      first writing. locate object position using (looping parents')
03.12.15 jchen      disable whole function under Netscape
*/
var wxmenuMax = 200;
var wxmIndexMax = 0;
var wxmenuEntry;
var wxmenuLevel = new Array(wxmenuMax);
function wxmmEnter(wxIndex,wi) {
    var x,i,tbl,obj,top,left;
    // clean all existing subs
    for (i=2;i<=wxmIndexMax;i++) {
        if (wxmenuLevel[i]>wxmenuLevel[wxIndex]) {
            x = eval("wxmenu"+i);
            x.style.display='none';
            }
        }
    if (wxmenuEntry[wi]==0) return;
    // show a submenu
    x = eval("wxmenu"+wxmenuEntry[wi]);
    tbl = eval( "wxmenu" + wxIndex );
    // locate real position, check parents'
    obj = tbl;
    top = obj.offsetTop;
    left = obj.offsetLeft;
    while (true) {
        obj = obj.offsetParent;
        if (obj==null) break;
        top += obj.offsetTop;
        left += obj.offsetLeft;
        }
    x.style.top = top + event.srcElement.offsetTop;
    x.style.left = left + tbl.offsetWidth +1;   
    x.style.display = "block";
    }   
function wxWindowStyleMenu() {
    if (navigator.appName.indexOf("Netscape")>=0) return;

    var wxmenu = new Array(wxmenuMax);
    var i, wxIndex = 0, prevLevel = 0;
    var menuTable = window.menumap.childNodes(0);
    var current = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var div, href, level;
    wxmenuEntry = new Array(menuTable.rows.length);
    for (i=0; i<=menuTable.rows.length-1; i++) {
        wxmenuEntry[i] = 0;
        div = menuTable.cells(i,1).childNodes(0);
        //href = div.childNodes(0);
        level = div.className.substr("MenuMap".length, div.className.length-"MenuMap".length).valueOf();
        if (level==prevLevel) {
            }
        else if (level>prevLevel) {
            // start a child menu from this i
            wxmIndexMax++;
            wxIndex = wxmIndexMax;
            wxmenu[wxIndex] = "";
            wxmenuLevel[wxIndex] = level;
            if (prevLevel>0) {
                wxmenuEntry[ i-1 ] = wxIndex;               
                }
            current[ level ] = wxIndex;
            }
        else if (level<prevLevel) {
            // end the current menu
            wxIndex = current[level];
            }
        wxmenu[wxIndex] += "<tr><td onmouseenter=\"wxmmEnter(" +wxIndex+ "," +i+ ");\">" + div.outerHTML;
        prevLevel = level;
        }
    // always show the 1st level
    document.write( wxmenu[1] );
    document.write( "</table>" );
    // create the iframes to hold submenus
    for (i=2; i<=wxmIndexMax; i++) {
        document.write("<span id=wxmenu" +i+ " style=\"position:'absolute';display:'none';\">");
        document.write( "<table border=0 cellspacing=0 cellpadding=0>" );
        document.write( wxmenu[i] );
        document.write( "</table>" );
        document.write("</span>")
        }
    }
