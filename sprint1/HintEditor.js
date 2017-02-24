/**
 * Opens editor of hint (text box) below the checkbox or switch that turns
 * hints on. Then accepts editor input.
 *
 * @author Derek S. Prijatelj
 */

var hintInput; // being global may be undesirable 

/**
 * applies the EventListener to the element with the id "hintSwitch". When
 * hintSwitch is activated, then it will generate the hintEditor
 *
 * FIXME currently not used, due to onclick attribute of button, being less
 * code to write in the html. So this is unused and may be removed.
 */
function hintSwitchListener(){
    var hintSwitch = document.getElementById("hintSwitch");

    hintSwitch.addEventListener("click", toggleHintEditor, false);

    /* Probably the proper way to add event listeners. Caters to IE browsers.
    if (hintSwitch.addEventListener){
        hintSwitch.addEventListener("click", toggleHintEditor(), false);
    } else if (hintSwitch.attachEvent) {
        hintSwitch.attachEvent('onclick', toggleHintEditor());
    }
    */
}

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
            '</form>'
        ].join('');

        hintEditor.innerHTML = addedHTML;
        
        objButton.innerHTML = "Remove Hint";

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
 * saves the contents of the hintInput to a local, client-side, js var.
 */
function saveHint(){
    hintInput = document.getElementById("hintInput").value;
}
