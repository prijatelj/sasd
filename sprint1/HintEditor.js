/**
 * Opens editor of hint (text box) below the checkbox or switch that turns
 * hints on. Then accepts editor input.
 *
 * @author Derek S. Prijatelj
 */

var mainImgDataArr = [];     // stores image meta data for main problem content
var hintImgDataArr = []; // stores image meta data for hint content

/**
 * toggles the hint editor. Each hint's individual content may be edited by
 * selecting the proper hint number in the drop down. select add hint if
 * want to add a new hint.
 *
 * @param objButton the html document element that called this function
 */
function toggleHintEditor(objButton){
    /*
     * TODO
     * Currently displays a single text box to write all hints. If want multiple
     * hints that are accessed via text links, then we will need a way to edit
     * each hint.
     */

    var hintEditor = document.getElementById("hintEditor");
    
    if (hintEditor.innerHTML.replace(/\s/g, '') === ''){
        var addedHTML = [
            '<form id="hintForm" name="hintForm">',
            '<textarea class="problemEditor" id="hintInput" rows="6" cols="50">',
            '</textarea>',
            '<button type="button" id="saveHint">Save Hint</button>',
            //'<input type="submit" name="saveHint" value="Save Hint"/>',
            '<button type="button" onclick="uploadImage(true)">Upload Image</button>',
            '</form>'
        ].join('');

        hintEditor.innerHTML = addedHTML;
        
        objButton.innerHTML = "Remove Hint";

        /* Probably the proper way to add event listeners. Caters to IE browsers.
        if (hintSwitch.addEventListener){
            hintSwitch.addEventListener("click", toggleHintEditor(), false);
        } else if (hintSwitch.attachEvent) {
            hintSwitch.attachEvent('onclick', toggleHintEditor());
        }
        */
        document.getElementById("saveHint")
            .addEventListener("click", saveHint, false);
    } else {
        document.getElementById("saveHint")
            .removeEventListener("click", saveHint, false);

        hintEditor.innerHTML = "";
        hintInput = "";
        objButton.innerHTML = "Add Hint";
    }
}

/**
 * Sends content of hint to funciton that translates to PG code.
 */
function saveHint(){
    translateToPG(document.getElementById("hintInput").value);
}

/**
 * Contains all meta data of an image for displaying in PG code.
 *
 * @param fileName name of the image file
 * @param width integer display size of image width
 * @param hieght integer display size of image height
 */
function imageMetaData(fileName, width, height){
    var this.fileName = fileName;
    var this.width = width;
    var this.height = height;
}

/**
 * Initiates the streamlined and automated process for inserting an image into 
 * a problem. 
 *
 * @param hintImgDataArr optional parameter (since ES6/ES2015) if true, adds 
 * uploaded image meta data to the global hintImgDataArr array.
 *
 * TODO Currently will need to request the size of the desired display size of
 * the image from the user, and will only be able to append the image at the end
 * of the problem, otherwise a location in the problem will need set via editor.
 */
function uploadImage(hint = false){
    var img = prompt("Please enter URL of externally hosted iage", "");
    var w = prompt("Enter width of image in pixels for desired display", "");
    var h = prompt("Enter height of image in plixels for desired display", "");
    
    if (img != null && w != null && h != null) {
        if (hint){
            hintImgDataArr[hintImgDataArr.length] = imageMetaData(img, w, h);
        } else {
            mainImgDataArr[mainImgDataArr.length] = imageMetaData(img, w, h);
        }
    }
    
    // navigate to proper problem set
    
    // call browser function

    // need to save file name, size, and location to be inserted into PG code.

    // call upload function
}
