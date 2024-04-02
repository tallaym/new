(function() {
    "use strict";
  
    $('.signin-form').submit(function(e){
        e.preventDefault();
    
        var username = $('input[name="username"]').val();
        var email = $('input[name="email"]').val();
        var object = $('input[name="object"]').val();
        var message = $('textarea[name="message"]').val();
        var commitId = $('#commitId').data('commit-id');
    
        var data = {
          "email": email,
          "object": object,
          "message": message,
          "commit_id": commitId,
          "username": username
        };

        console.log(data);
    
        $.ajax({
          url: 'https://15.236.247.175:8443/api/client',
          method: 'POST',
          dataType: 'json', 
          contentType: 'application/json', 
          data: JSON.stringify(data),
          success: function(response) {
            console.log('Requête AJAX réussie:', response);
            Swal.fire({
                position: "top-middle",
                icon: "success",
                title: "Information sent successfully",
                showConfirmButton: false,
                timer: 1500
            });
          },
          error: function(xhr, status, error) {
            console.error('Erreur lors de la requête AJAX');
            console.error(error);
            console.error('Erreur lors de la requête AJAX :', error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while processing your request. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
          }
        });
    
    });
  
})()