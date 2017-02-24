Sprint 1
=
To add the hint editor to a webpage, one must add some click-able element with the onclick attribute set to "toggleHintEditor(this)" and an empty div with id "hintEditor", as well as adding the HintEditor.js as an external script in the head of the html.

Once the element with the onclick attribute is clicked, a textbox and save button will appear inside the empty div with id="hintEditor". User may enter text and click the save button. The input is sent to the function that translates their input into PG code.

Javascript currently edits the onclick object that toggles the hint editor by changing its inner html. This may be undersireable in some cases, and may need edited depending on the design of the overall problem editor.
___
Derek S. Prijatelj
