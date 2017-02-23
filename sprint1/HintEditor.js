/**
 * Opens editor of hint (text box) below the checkbox or switch that turns
 * hints on. Then accepts editor input.
 * @author Derek S. Prijatelj
 * 
 */

/**
 * applies the EventListener to the element with the id "hintSwitch". When
 * hintSwitch is activated, then it will generate the hintEditor
 */
function hintSwitchListener(){
    var hintSwitch = document.getElementById("hintSwitch");

    hintSwitch.addEventListener("click", displayHintEditor(), false);
    /* 
    if (hintSwitch.addEventListener){
        hintSwitch.addEventListener("click", displayHintEditor(), false);
    } else if (hintSwitch.attachEvent) {
        hintSwitch.attachEvent('onclick', displayHintEditor());
    }
    */
}

/**
 * displays the hint editor. Each hint's individual content may be edited by
 * selecting the proper hint number in the drop down. select add hint if
 * want to add a new hint.
 */
function displayHintEditor(){
    // TODO display drop down menu for active hint.
    var hintEditor = document.getElementById("hintEditor");

    

    var html = [
        '<textarea class="problemEditor" id="hintInput" rows="6" cols="50">',
        '</textarea>',
        '<button type="button" id="saveHint">Save Hint</button>'
    ].join('');

    // FIXME ensure security measures have been met to avoid hacking.
    //hintEditor.innerHTML = "I HATE THIS!";
    hintEditor.innerHTML = html
}
