/**
 * Opens editor of hint (text box) below the checkbox or switch that turns
 * hints on. Then accepts editor input.
 * @author Derek S. Prijatelj
 * 
 */

hintSwitchListener();

/**
 * applies the EventListener to the element with the id "hintSwitch". When
 * hintSwitch is activated, then it will generate the hintEditor
 */
function hintSwitchListener(){
    var hintSwitch = document.getElementById("hintSwitch");
    
    if (hintSwitch.addEventListener){
        hintSwitch.addEventListener("click", displayHintEditor(), false);
    } else if (hintSwitch.attachEvent) {
        hintSwitch.attachEvent('onclick', displayHintEditor());
    }
}

/**
 * displays the hint editor. Each hint's individual content may be edited by
 * selecting the proper hint number in the drop down. select add hint if
 * want to add a new hint.
 */
function dislpayHintEditor(){
    // TODO display drop down menu for active hint.
    var hintEditor = document.getElementById("hintEditor");

    // FIXME ensure security measures have been met to avoid hacking.
    hintEditor.innerHTML = '
        <textarea class="problemEditor" id="hintInput" rows="6" cols="50">
        </textarea>
        <button type="button" id="saveHint">Save Hint</button>
    ';
}
