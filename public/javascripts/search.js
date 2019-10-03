$(function() {
    $ ('.search-button').click(function(){
        $(this).parent().toggleClass('open');
      });
    });
  $(document).ready(function(){
      $('input.typeahead').typeahead({
      name: 'typeahead',
      remote: 'http://localhost:3000/search?key=%QUERY',
      limit: 10
      });
      });
