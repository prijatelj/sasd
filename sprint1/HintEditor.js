/**
 * Opens editor of hint (text box) below the checkbox or switch that turns
 * hints on. Then accepts editor input.
 *
 * @author Derek S. Prijatelj
 */

/**
 * toggles the hint editor. Each hint's individual content may be edited by
 * selecting the proper hint number in the drop down. select add hint if
 * want to add a new hint.
 */
function toggleHintEditor(objButton){
    /*
     * TODO
     * Currently displays a single text box to write all hints. If want multiple
     * hints that are accessed via text links, then we will need a way to edit
     * each hint.
     */

    var hintEditor = document.getElementById("hintEditor");

    /*
     * FIXME? add client side validation. NOTE: this adds no seccurity measures 
     * Have not included validation, because this string input will be 
     * translated to PG code and then WeBWorK should validate the input itself.
     */
    if (hintEditor.innerHTML.replace(/\s/g, '') === ''){
        var addedHTML = [
            '<form id="hintForm" name="hintForm">',
            '<textarea class="problemEditor" id="hintInput" rows="6" cols="50">',
            '</textarea>',
            '<button type="button" id="saveHint">Save Hint</button>',
            //'<input type="submit" name="saveHint" value="Save Hint"/>',
            '<button type="button" id="uploadImage">Upload Image</button>',
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
 * Initiates the streamlined and automated process for inserting an image into 
 * a problem. 
 *
 * TODO Currently will need to request the size of the desired display size of
 * the image from the user, and will only be able to append the image at the end
 * of the problem, otherwise a location in the problem will need set via editor.
 */
function uploadImage(){
}
