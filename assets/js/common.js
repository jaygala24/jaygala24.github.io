$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).closest('.publication-card').find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).closest('.publication-card').find(".bibtex.hidden").toggleClass('open');
    });
    $('.more-authors').click(function() {
        $(this).find('.more-authors-collapsed, .more-authors-expanded').toggle();
    });
    $('a').removeClass('waves-effect waves-light');
});
