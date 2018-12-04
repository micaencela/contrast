var totalNights = 0;
var totalPeople = 0;
var totalLocation;
var totalBreakfast;
var totalBreakfastCost;
var totalCost;

//Make specifications functional - Night and Number of People

function updateTotalPeople() {
    totalPeople = 0;
    $('.numberPeople.selected').each(function() {
        totalPeople += parseFloat($(this).val());
    });
}

$('.numberPeople').click(function() {
    $(this).toggleClass('selected');
    $(this).find('i').toggleClass('far fas');
    $('#validatePeople').addClass('hide');
    updateTotalPeople();
});

function updateTotalNights() {
    totalNights = 0;
    $('.numberNights.selected').each(function() {
        totalNights += parseFloat($(this).val());
    });
}

$('.numberNights').click(function() {
    $(this).toggleClass('selected');
    $(this).find('i').toggleClass('far fas');
    $('#validateNights').addClass('hide');
    updateTotalNights();
});
// Selecting of nights and people. Adding value to elements through increments.

$(function() {
    $('.i-people>i').on('click', function() {
        $(this).toggleClass('far fas');
    });
    $('.i-nights>i').on('click', function() {
        $(this).toggleClass('far fas');
    });


    document.getElementById("searchtext").style.color = "#5F4B8B";

    // Taking off the hide on section 2 upon clicking of the 'Search' button. Filter results based on nights/people/city selection

    $('#search').on('click', function() {
        totalLocation = $('#locationSelect').val();
        $('#section2').removeClass('hide');
        if (totalPeople <= 2 && totalPeople >= 1 && totalNights >= 1 && totalNights <= 5) {
            $('.hotel').removeClass('hide');
        }
        if (totalPeople <= 6 && totalPeople >= 1 && totalPeople >= 1 && totalNights <= 10) {
            $('.hostel').removeClass('hide');
        }
        if (totalPeople >= 2 && totalPeople <= 4 && totalNights >= 3 && totalNights <= 10) {
            $('.motel').removeClass('hide');
        }
        if (totalPeople >= 1 && totalPeople <= 4 && totalNights >= 2 && totalNights <= 15) {
            $('.house').removeClass('hide');
        }
        if (totalPeople >= 5 && totalNights >= 11) {
            $('.noresults').removeClass('hide');
        }
        if (totalLocation == "Auckland") {
            $('.wlg').addClass('hide');
        }
        if (totalLocation == "Wellington") {
            $('.akl').addClass('hide');
        }
        if (totalPeople == 0) {
            $('#validatePeople').text("*Please select number of people.");
            $('#section2').addClass('hide');
        }
        if (totalNights == 0) {
            $('#validateNights').text("*Please select number of nights.");
            $('#section2').addClass('hide');
        }
        // if (totalPeople !== 0) {
        //     $('#validatePeople').addClass('hide');
        // }
        if (totalNights !== 0) {
            $('#validateNights').addClass('hide');
        }
    });

    //Breakfast option price addition to final cost via checkbox

    $('.breakfastCheckbox').change(function() {
        totalBreakfast = false;
        if ($(this).prop('checked')) {
            $(this).val('true');
            totalBreakfast = true;
            totalBreakfastCost = totalPeople * 10
            totalAllCost = totalCost + (totalPeople * 10)
            $('#bfastTotal01').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal01').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal02').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal02').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal03').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal03').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal04').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal04').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal05').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal05').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal06').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal06').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal07').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal07').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal08').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal08').text("$" + totalAllCost.toFixed(2));
        } else {
            $(this).val('false');
            totalBreakfast = false;
            totalBreakfastCost = 0
            totalAllCost = totalCost
            $('#bfastTotal01').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal01').text("$" + totalAllCost.toFixed(2));
            $('#bfastTotal02').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal02').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal03').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal03').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal04').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal04').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal05').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal05').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal06').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal06').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal07').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal07').text("$" + totalAllCost.toFixed(2));

            $('#bfastTotal08').text("$" + totalBreakfastCost.toFixed(2))
            $('#allTotal08').text("$" + totalAllCost.toFixed(2));
        }
    });

    //Taking off the hide on section 3 and overlay upon clicking book, along with calculations of final cost

    $('#AKLHotel').on('click', function() {
        totalCost = totalNights * 157;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem1').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal01').text("$" + totalCost.toFixed(2));
        $('#allTotal01').text("$" + totalAllCost.toFixed(2));
    });

    $('#WLGHotel').on('click', function() {
        totalCost = totalNights * 157;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem2').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal02').text("$" + totalCost.toFixed(2));
        $('#allTotal02').text("$" + totalAllCost.toFixed(2));
    });


    $('#AKLHostel').on('click', function() {
        totalCost = totalNights * 30;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem3').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal03').text("$" + totalCost.toFixed(2));
        $('#allTotal03').text("$" + totalAllCost.toFixed(2));
    });

    $('#WLGHostel').on('click', function() {
        totalCost = totalNights * 30;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem4').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal04').text("$" + totalCost.toFixed(2));
        $('#allTotal04').text("$" + totalAllCost.toFixed(2));
    });

    $('#AKLMotel').on('click', function() {
        totalCost = totalNights * 90;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem5').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal05').text("$" + totalCost.toFixed(2));
        $('#allTotal05').text("$" + totalAllCost.toFixed(2));
    });

    $('#WLGMotel').on('click', function() {
        totalCost = totalNights * 90;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem6').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal06').text("$" + totalCost.toFixed(2));
        $('#allTotal06').text("$" + totalAllCost.toFixed(2));
    });


    $('#AKLHouse').on('click', function() {
        totalCost = totalNights * 240;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem7').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal07').text("$" + totalCost.toFixed(2));
        $('#allTotal07').text("$" + totalAllCost.toFixed(2));
    });

    $('#WLGHouse').on('click', function() {
        totalCost = totalNights * 240;
        totalAllCost = totalCost
        $('.section3').removeClass('hide');
        $('#searchitem8').removeClass('hide');
        $('.overlay').removeClass('hide');
        $('#accTotal08').text("$" + totalCost.toFixed(2));
        $('#allTotal08').text("$" + totalAllCost.toFixed(2));
    });


    $('.close-button').on('click', function() {
        $('.section3').addClass('hide');
        $('#searchitem1').addClass('hide');
        $('#searchitem2').addClass('hide');
        $('#searchitem3').addClass('hide');
        $('#searchitem4').addClass('hide');
        $('#searchitem5').addClass('hide');
        $('#searchitem6').addClass('hide');
        $('#searchitem7').addClass('hide');
        $('#searchitem8').removeClass('hide');
        $('.overlay').addClass('hide');

    });

    //Auto-scroll to section 2

    $('[data-to]').on('click', function(e) {
        e.preventDefault();

        var sTarget = $(this).data('to');
        var targetOffsetTop = $(sTarget).offset().top - 10;

        $('html,body').animate({ scrollTop: targetOffsetTop }, 500);
    });

});