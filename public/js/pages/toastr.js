auth.onAuthStateChanged(user => {
    "use strict";

    var toast = 0;
    var toastz = 0;

    var theLogs = '';

    var toastbtc = '';

    var closeSave = document.getElementById('close-save');
    var closeExam = document.getElementById('close-exam');

    var biden = false;

    if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
            toast = localStorage.getItem('banktotal');
            toastz = toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            if(user.isAnonymous) {
                theLogs = `
                    ${(JSON.parse(localStorage.getItem('banklogs'))[0].account)} with 
                    ${(JSON.parse(localStorage.getItem('banklogs'))[0].balance)}.
                `;
            } 
        } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1) { 
            toast = localStorage.getItem('divtotal');
            toastz = toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            if(user.isAnonymous) {
                theLogs = `
                    ${(JSON.parse(localStorage.getItem('banklogs'))[0].account)}, <br> 
                    ${(JSON.parse(localStorage.getItem('banklogs'))[1].account)}.
                `;
            }
        }
    }

    if(user.email) {
        theLogs = `
            Bank logs will be sent to: <br> ${user.email}.
            <hr class="hr3-nil">
        `;
    } else if(user.phoneNumber) {
        theLogs = `
            Bank logs will be sent to: <br> ${user.phoneNumber}.
            <hr class="hr3-nil">
        `;
    }

    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
   
    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        toastbtc = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
    }

    var i = -1;
    var $toastlast;


    var getMessage = function() {        
        for (var i = 0; i < items.length; i++) {
            var msgs = [`
                ${toastbtc} Bitcoin payment not detected,
                <hr class="hr15-bot">
                Send $${toastz} BTC:
                <hr class="to-hr hr15-top">
                ${theLogs}
                <hr class="hr3-nil">
            `];
            i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        }
    };

    var toastbut = document.getElementById('anon-check');

    var savebut = document.getElementById('monez');

    $(toastbut).click(function() {
        var shortCutFunction = 'success';
        var msg = '';
        var title = '';
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: 'toast-top-full-width',
            preventDuplicates: true,
            onclick: null,
            timeOut: 5000
        };
        if (!msg) {
            msg = getMessage();
        }
        var $toast = toastr[shortCutFunction](msg, title);
        $toastlast = $toast;

        biden = true;

    });


    $(savebut).click(function() {
        var shortCutFunction = 'success';
        var msg = '';
        var title = '';
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: 'toast-top-full-width',
            preventDuplicates: true,
            onclick: null,
            timeOut: 5000
        };
        if (!msg) {
            msg = getMessage();
        }
        var $toast = toastr[shortCutFunction](msg, title);
        $toastlast = $toast;

        biden = true;

    });

    closeExam.addEventListener('click', showNotify);
    closeSave.addEventListener('click', showNotify);

    function showNotify() {
        if(biden) {
            setTimeout(() => {
                if(!(user.email && user.phoneNumber)) {
                    $('#discountModal').modal('show');
                }
            }, 3000);
        }

        biden = false;
    }

});