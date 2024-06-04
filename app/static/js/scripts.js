$(document).ready(function() {
    $('#uploadForm').on('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        $.ajax({
            xhr: function() {
                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(event) {
                    if (event.lengthComputable) {
                        var percentComplete = Math.round((event.loaded / event.total) * 100);
                        $('#progressBar').width(percentComplete + '%');
                        $('#progressBar').html(percentComplete + '%');
                    }
                }, false);
                return xhr;
            },
            type: 'POST',
            url: '/upload',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                alert('Files successfully uploaded');
                location.reload();
            },
            error: function(response) {
                alert('Error uploading files');
            }
        });
    });
});
