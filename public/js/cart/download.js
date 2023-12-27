let items = [];

var table1 = jQuery('#example1').DataTable();

var theSettz = document.getElementById('settings');


if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){


    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);



    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance =`<td class="btn-balance">${data.balance}</td>`
        var account = `<td>${data.account}</td>`
        var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,      
        ]).draw();
    });

    for(var i = 0; i < items.length; i++) {

        var cartRow = document.createElement('tr');
        var cartRow2 = document.createElement('li');
        cartRow.classList.add('table-warning');

        cartRow2.classList.add('total','bg-black');
        var cartItems =  document.getElementsByClassName('champez3')[0];

        var cartRowContents = `
            <td><img src=${items[i].image}></td>       
            <td>
                PENDING
                <i class="fas fa-spin fa-sync-alt spinner-bordez"></i>
                <hr id="hr-pend">
                <span>${(items[i].balance).replace('Balance: ','')}</span> 
            </td>
            <td id=${'name-on-table' + items.indexOf(items[i])} style="filter: blur(0px);"></td>  
            <td>${items[i].account}</td>
            <td>${(items[i].price).replace('Price: ', '')}</td>
            <td>${items[i].info1}</td>
            <td>${items[i].info2}</td>
            <td>${items[i].info3}</td>
            <td>${items[i].info4}</td>
            <td>${items[i].info5}</td>
            <td>${items[i].info6}</td>
            <td>${items[i].website}</td>
        `;
        cartRow.innerHTML = cartRowContents;

        cartItems.prepend(cartRow);

        if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING') || (items[i].account).includes('ULTIMATE') || (items[i].account).includes('CURRENT') || (items[i].account).includes('CHEQUING')){
            var cartRow3 = document.createElement('div');
            cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
            var balance2 = items[i].balance;
            var price2 = items[i].price;
            var balance3 = balance2.replace('Balance: ', '');
            var price3 = price2.replace('Price: ', 'View: ');
            var cartItems3 = document.getElementsByClassName('xenon3')[0];
            var cartRowContents3 = `
                <div class="pricing-list highlight">
                    <div class="pricing-list-price">
                        <h2 class="text-white">${balance3}</h2>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <ul>
                        <li class="text-white">${items[i].website} </li>
                        <li class="text-white">${items[i].info1} </li>
                        <li class="text-white">${items[i].info2} </li>
                        <li class="text-white">${items[i].info3} </li>
                        <li class="text-white">${items[i].info4} </li>
                        <li class="text-white">${items[i].info5} </li>
                        <li class="text-white">${items[i].info6} </li>
                        <li class="text-white">${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                        <button type="submit" class="butn white" data-bs-toggle="modal" data-bs-target="#saveModal">
                            ${price3}
                        </button>
                    </ul>
                </div>
            `;
            cartRow3.innerHTML = cartRowContents3;
            cartItems3.prepend(cartRow3);
        } else {
            var cartRow3 = document.createElement('div');
            cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
            var balance2 = items[i].balance;
            var price2 = items[i].price;
            var balance3 = balance2.replace('Balance: ', '');
            var price3 = price2.replace('Price: ', 'View: ');
            var cartItems3 = document.getElementsByClassName('xenon3')[0];
            var cartRowContents3 = `
                <div class="pricing-list">
                    <div class="pricing-list-price">
                        <h2>${balance3}</h2>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <ul>
                        <li>${items[i].website} </li>
                        <li>${items[i].info1} </li>
                        <li>${items[i].info2} </li>
                        <li>${items[i].info3} </li>
                        <li>${items[i].info4} </li>
                        <li>${items[i].info5} </li>
                        <li>${items[i].info6} </li>
                        <li>${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                        <button type="submit" class="butn" data-bs-toggle="modal" data-bs-target="#saveModal">
                            ${price3}
                        </button>
                    </ul>
                </div>
            `;
            cartRow3.innerHTML = cartRowContents3;
            cartItems3.prepend(cartRow3);

          
        }
    
    }

    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
} else {
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('cartlength').style.display = 'none';

    document.getElementById('down-file').innerHTML = 'Empty Cart';
    document.getElementById('anon-check').innerHTML = `Banklogs <img src="img/partners/home.png">`;
    document.getElementById('anon-check').setAttribute('href', 'home');
    document.getElementById('save-1').innerHTML = `
        Your cart is currently empty, <br>
        add some logs to cart. 
    `;
    document.getElementById('anon-p').innerHTML = `
        Your cart is currently empty, <br>
        add some bank logs to cart. 
    `;
    document.getElementById('usage-p').innerHTML = `
        Cart: $0, Total: $0.
    `;
    document.getElementById('jinaHolder2').innerHTML = 'Shopping Cart: $0';
}


document.getElementById('balance1').innerHTML = '$3,274';
document.getElementById('balance2').innerHTML = '$5,602';
document.getElementById('balance3').innerHTML = '$5,490';
document.getElementById('balance4').innerHTML = '$3,615';
document.getElementById('balance5').innerHTML = '$5,402';
document.getElementById('balance6').innerHTML = '$3,149';
document.getElementById('balance7').innerHTML = '$5,087';
document.getElementById('balance8').innerHTML = '$5,259';
document.getElementById('balance9').innerHTML = '$3,280';

document.getElementById('balance10').innerHTML = '$3,407';
document.getElementById('balance11').innerHTML = '$5,214';
document.getElementById('balance12').innerHTML = '$5,390';
document.getElementById('balance13').innerHTML = '$3,042';
document.getElementById('balance14').innerHTML = '$5,439';
document.getElementById('balance15').innerHTML = '$5,228';
document.getElementById('balance16').innerHTML = '$3,190';
document.getElementById('balance17').innerHTML = '$5,104';
document.getElementById('balance18').innerHTML = '$3,174';
document.getElementById('balance19').innerHTML = '$3,248';

document.getElementById('balance20').innerHTML = '$5,270';
document.getElementById('balance21').innerHTML = '$5,309';
document.getElementById('balance22').innerHTML = '$5,183';
document.getElementById('balance23').innerHTML = '$3,104';
document.getElementById('balance24').innerHTML = '$3,230';
document.getElementById('balance25').innerHTML = '$3,409';
document.getElementById('balance26').innerHTML = '$5,329';
document.getElementById('balance27').innerHTML = '$5,208';



var jobs = document.getElementsByClassName('prized');
for(j=0; j< jobs.length; j++) {
    var theJob = jobs[j];
    var thePrize = theJob.parentElement.children[1].children[2].innerText;
    
    var thePr = parseFloat((thePrize.replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();

    theJob.innerHTML = '$'+ thePr;
}



if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 3)){
    document.getElementsByClassName('dataTables_paginate')[0].style.display = 'block';
    document.getElementsByClassName('dataTables_length')[0].style.display = 'block'
}

function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;

    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
}


function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    if(localStorage.getItem('timez-set')) {
        localStorage.removeItem('timez-set');
    }
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    var downFile = document.getElementById('down-file');
    var anonP = document.getElementById('anon-p');
    var anonB = document.getElementById('anon-b');
    var usaP = document.getElementById('usage-p');

    var anonCheck = document.getElementById('anon-check');
    var anonCheck2 = document.getElementById('anon-check-2');
    var titleLog2 = document.getElementById('titlelogs2');
    var modalAmount = document.getElementById('modal-amount');
    var jinaHolder2 = document.getElementById('jinaHolder2');

    document.getElementById('thetot').innerHTML = `View Cart: $${total.toLocaleString()}`;


    var discountTotal = parseInt((total * 0.9).toFixed(0));
    localStorage.setItem('divtotal', discountTotal);
    var disTot = localStorage.getItem('divtotal');



    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        const bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
        const bankBal = (JSON.parse(localStorage.getItem('banklogs'))[0].balance);
        const bankImg = (JSON.parse(localStorage.getItem('banklogs'))[0].image);

        const banking1 = (JSON.parse(localStorage.getItem('banklogs'))[0].info1);
        const banking2 = (JSON.parse(localStorage.getItem('banklogs'))[0].info2);
        const banking3 = (JSON.parse(localStorage.getItem('banklogs'))[0].info3);
        const banking4 = (JSON.parse(localStorage.getItem('banklogs'))[0].info4);
        const banking5 = (JSON.parse(localStorage.getItem('banklogs'))[0].info5);

        const theBanklog = document.getElementsByClassName('the-banklog')[0];


        if(bankLog.includes('Huntington') || bankLog.includes('Woodforest')) {
            downFile.innerHTML = bankLog.split('Bank')[0];
            theBanklog.innerHTML = bankLog.split('Bank')[0];
            anonP.innerHTML = `
                ${bankLog} <br> <span>${bankBal}</span>.
            `;

            anonB.innerHTML = `
            ${bankLog} <br> <span>${bankBal}</span>.
        `;
        } else if(bankLog.includes('America')) {
            downFile.innerHTML = 'BankofAmerica';
            theBanklog.innerHTML = 'BankofAmerica';
            anonP.innerHTML = `
                ${bankLog} <br> <span>${bankBal}</span>.
            `;

            anonB.innerHTML = `
            ${bankLog} <br> <span>${bankBal}</span>.
        `;
        } else {
            downFile.innerHTML = bankLog.split('[')[0];
            theBanklog.innerHTML = bankLog.split('[')[0];
            anonP.innerHTML = `
                ${bankLog} with <br> <span>${bankBal}</span>.
            `;
            anonB.innerHTML = `
            ${bankLog} with <br> <span>${bankBal}</span>.
        `;
        }

        if(bankLog.includes('Chime') || bankLog.includes('Wells')) {
            anonCheck.innerHTML = `
                Download <img style="border-radius: 50% !important" src=${bankImg}>
            `;
            anonCheck2.innerHTML = `
                Download <img style="border-radius: 50% !important" src=${bankImg}>
            `;
            theSettz.innerHTML = `
                Bank Log <img style="border-radius: 50% !important" src=${bankImg}>
            `;
            document.getElementById('the-image').src = bankImg;
            document.getElementById('the-image').classList.add('bit-img');
        } else {
            anonCheck.innerHTML = `
                Download <img src=${bankImg}>
            `;
            anonCheck2.innerHTML = `
                Download <img src=${bankImg}>
            `;
            theSettz.innerHTML = `
                Bank Log <img src=${bankImg}>
            `;
            document.getElementById('the-image').src = bankImg;
        }

        jinaHolder2.innerHTML = bankLog;



        usaP.innerHTML = `
            ${banking1} , ${banking2} , ${banking3}
        `;

        titleLog2.innerHTML = `
            Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, 
            Total: $<span class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

        modalAmount.innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('disb').style.display = 'none';
    } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1) {
        var Loginz = (JSON.parse(localStorage.getItem('banklogs')));

        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('p');
            var logItems = document.getElementById('anon-p');
            logRow.innerHTML = `
                <hr class="thehr thezoo"> 
                ${Loginz[i].account}  <br> <span>${Loginz[i].balance}</span>. 
                <hr style="opacity: 0 !important; margin-bottom: -10px !important; margin-top: -7px !important">
            `;
            logItems.prepend(logRow);


            var logRow2 = document.createElement('p');
            var logItems2 = document.getElementById('anon-b');
            logRow2.innerHTML = `
                <hr class="thehr thezoo"> 
                ${Loginz[i].account}  <br> <span>${Loginz[i].balance}</span>. 
                <hr style="opacity: 0 !important; margin-bottom: -10px !important; margin-top: -7px !important">
            `;
            logItems2.prepend(logRow2);
        }

        document.getElementsByClassName('thezoo')[0].style.display = 'none';
    
        document.getElementById('usage-p').style.display = 'none';
        document.getElementById('usage-hr').style.display = 'none';

        theSettz.innerHTML = `
            Bank Logs <img src="img/partners/check.png">
        `;

        anonCheck.innerHTML = `
            Download
            <img src="img/partners/doh.png">
        `;

        anonCheck2.innerHTML = `
            Download
            <img src="img/partners/doh.png">
        `;

        downFile.innerHTML = `Bank Logins`;

        titleLog2.innerHTML = `
            Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, 
            Total: $<span class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

        jinaHolder2.innerHTML =  `${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs`;

        modalAmount.innerHTML = `
            Send  <span id="omanyala3">$</span> 
            <span id="omanyala2" class="countup">${parseInt(total).toLocaleString()}</span> 
            $<span id="omanyala" class="countup">${parseInt(disTot).toLocaleString()}</span>
        `;
        document.getElementById('bitcoin-logo').style.display = 'none';
    } 

localStorage.setItem('banktotal',total);
}