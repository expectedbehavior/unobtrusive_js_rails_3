jQuery(function($) {
  function datafy(data) {
    return eval('('+data+')');
  }

  function flash(data) {
    var flashes = {}
    if(typeof data == "string") {
      flashes = datafy(data).flash
    } else {
      flashes = data.flash
    }
    for(key in flashes) {
      $('<div title="'+key+'" class="'+key+'"><p>'+flashes[key]+'</p></div>').appendTo('#flash').delay(2500).fadeOut(400)
    }
  }

  $('tr a[data-method=delete]')
//     .bind("ajax:error",      function(event, xhr, status, error) {
//       flash(xhr.responseText)
//     })
    .bind("ajax:success",    function(event, data, status, xhr) {
      $(this).closest('tr').remove()
      //flash(data)
    })
//     .bind("ajax:beforeSend", function(event, xhr, settings) {
//       $(this).parent().append('<img src="/images/ajax-loader.gif"/>')
//     })
//     .bind("ajax:complete", function(event, xhr, status) {
//       $('#log').append($(this).closest('tr').attr('id').replace(/post_/, '')+'<br/>');
//     })

//   $('form[data-remote=true]')
//     .bind("ajax:success", function(event, data, status, xhr) {
//       $(this).find(":input").val('')
//       flash(data)
//     })
})
