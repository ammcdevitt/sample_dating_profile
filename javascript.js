/*JS for IMAGE PREVIEW. displays the image that the user uploads onto the window*/
function viewImg(input) {
    if (input.files && input.files[0]) {
        var readFile = new FileReader();
        readFile.onload = function (load) {
            $('#preview').attr('src', load.target.result);
        };
        readFile.readAsDataURL(input.files[0]);
    }
}
