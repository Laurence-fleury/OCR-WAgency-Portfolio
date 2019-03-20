$(function () {
    let $diapo0         =   $('.eltSlogan').css('display', 'block'),
        $diapo1         =   $('.eltPresentation').css('display', 'none'),
        i               =   0,
        $prev           =   $('#slider .prev'),
        $next           =   $('#slider .next');


        function transDiapo1() {
            $diapo0.css('display', 'none');
            $diapo1.css('display', 'block');
        }

        function transDiapo0() { 
            $diapo1.css('display', 'none');
            $diapo0.css('display', 'block');
        }

        $next.click(function () { 
            i++;
            if( i <= 1 ){
                transDiapo1();
                i=1;
            } else {
                transDiapo0();
                i=0;
            }   
        });

        $prev.click(function () { 
            i--;
            if( i >= 0 ){
                transDiapo1();
                i=0;
            } else {
                transDiapo0();
                i=1;
            }   
        });
});