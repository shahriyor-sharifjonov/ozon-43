$( function() {
  var dateFormat = "",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'с dd.mm.yy',
        minDate: -20, 
        maxDate: "+1M +10D"
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: -20, 
      dateFormat: 'по dd.mm.yy',
      maxDate: "+1M +10D"
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );

$(function() {
  $('.ozon__item-i').click(function() {
    $('.ozon__item-i').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$(function() {
  $('.limited-nav').click(function() {
    $('.limited-nav').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$(function() {
  $('.pagination__text').click(function() {
    $('.pagination__text').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$(function() {
  $('.seo-meta__body').click(function() {
    $('.seo-meta__body').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

function dropdown1(val) {
  var y = document.getElementsByClassName('pagination__dropdown__button');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}