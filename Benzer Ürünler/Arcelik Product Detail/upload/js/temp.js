var curr, ord, ttl, txt;

// Support Appointment Form
if(document.querySelector('#app-wizard')){
    document.querySelectorAll('.btn-next').forEach(function(elm){
        elm.addEventListener('click', function(){
            curr = this.closest('.app-step');
            ord = parseFloat(curr.getAttribute('data-step'));
            curr.classList.remove('active');
            curr.nextElementSibling.classList.add('active');
            document.querySelector('#app-wizard .nav-link[data-order="' + ord + '"]').classList.remove('active');
            document.querySelector('#app-wizard .nav-link[data-order="' + ord + '"]').classList.add('completed');
            document.querySelector('#app-wizard .nav-link[data-order="' + (ord+1) + '"]').classList.add('active');
            
            if(document.querySelector('#app-swiper'))
                document.querySelector('#app-swiper').update();
            
            utils.pageScroll({top: 0});
        });
    });
    document.querySelectorAll('#app-wizard .nav-link').forEach(function(elm){
        elm.addEventListener('click', function(){
            ord = parseFloat(this.getAttribute('data-order'));
            document.querySelector('.app-step.active').classList.remove('active');
            document.querySelector('.app-step[data-step="' + ord + '"]').classList.add('active');
            document.querySelector('#app-wizard .nav-link.active').classList.remove('active');
            this.classList.add('active');
        });
    });
    document.querySelectorAll('#app-swiper .btn').forEach(function(elm){
        elm.addEventListener('click', function(){
            if(document.querySelector('#app-swiper .btn.selected'))
                document.querySelector('#app-swiper .btn.selected').classList.remove('selected');
            this.classList.add('selected');
        });
    });
    document.querySelector('#app-wizard .btn-complete').addEventListener('click', function(){
        document.querySelector('body').classList.add('page-processing');
        setTimeout(function(){
            document.querySelector('body').classList.remove('page-processing');
            document.querySelector('body').classList.add('app-form-completed');
            utils.pageScroll({top: 0});
        }, 3000);
    });
    document.querySelector('#app-wizard .app-man-select button').addEventListener('click', function(){
        document.querySelector('#app-wizard').classList.add('manual-selection');
    });
}

// Contact Us
if(document.querySelector('.ctc-form')){
    document.querySelector('.ctc-form .btn-send').addEventListener('click', function(){
        document.querySelector('body').classList.add('page-processing');
        setTimeout(function(){
            document.querySelector('body').classList.remove('page-processing');
            document.querySelector('body').classList.add('contact-form-completed');
            utils.pageScroll({top: 0});
        }, 3000);
    });
}

// Payment: Multicard
if(document.querySelector('.btn-mcard-pay')){
    document.querySelector('.btn-mcard-pay').addEventListener('click', function(){
        document.querySelector('.mcard-step[data-step="1"]').classList.add('completed');
        document.querySelector('.mcard-step[data-step="1"]').classList.remove('active');
        document.querySelector('.mcard-step[data-step="2"]').classList.add('active');
        MCPayCounter.reveal();
    });
}

// Payment Credit Card Init
if(document.querySelector('.page-payment')){
    // Payment: Credit Card
    CreditCard({
        parents: '.acc-body',
        form: 'form.pay-payment-form',
        container: '.pay-payment-form-card',
        numberInput: 'input#mcard_step_1_cardno',
        expiryInput: 'input#mcard_step_1_expiry',
        cvcInput: 'input#mcard_step_1_cvc',
        nameInput: 'input#mcard_step_1_name'
    });
    
    // Payment: Multi Credit Card Step 1
    CreditCard({
        parents: '.mcard-step',
        form: 'form.pay-payment-form-multi-step1',
        container: '.pay-payment-form-card-multi-step1',
        numberInput: 'input#mcard_step_2_cardno',
        expiryInput: 'input#mcard_step_2_expiry',
        cvcInput: 'input#mcard_step_2_cvc',
        nameInput: 'input#mcard_step_2_name'
    });
    
    // Payment: Multi Credit Card Step 2
    CreditCard({
        parents: '.mcard-step',
        form: 'form.pay-payment-form-multi-step2',
        container: '.pay-payment-form-card-multi-step2',
        numberInput: 'input#mcard_step_3_cardno',
        expiryInput: 'input#mcard_step_3_expiry',
        cvcInput: 'input#mcard_step_3_cvc',
        nameInput: 'input#mcard_step_3_name'
    });
}

// Header Search
if(document.querySelector('#header-search')){
    document.querySelector('#searchText').addEventListener('keyup', function(){
        curr = (this.value || '').trim();

        if(curr.length > 0)
            document.querySelector('#header-search').classList.add('searching');
        else
            document.querySelector('#header-search').classList.remove('searching');
    });
}

// Product Detail Reviews
if(document.querySelector('.rvw-item-feedback')){
    document.querySelectorAll('.rvw-item-feedback .btn').forEach(function(elm){
        elm.addEventListener('click', function(){
            if(this.nextElementSibling)
                this.nextElementSibling.classList.remove('selected');
            if(this.previousElementSibling)
                this.previousElementSibling.classList.remove('selected');
            this.classList.add('selected');
        });
    });
}

// Payment Processing
if(document.querySelector('.content-loading')){
    setTimeout(function(){
        document.querySelector('.content-loading .t').innerText = 'Onaylanıyor…';
        setTimeout(function(){
            window.location = 'payment-result.html';
        }, 3000);
    }, 3000);
}

// Support Article Detail: Feedback
if(document.querySelector('.spt-article-feedback')){
    document.querySelectorAll('.spt-article-feedback .btn').forEach(function(elm){
        elm.addEventListener('click', function(){
            if(document.querySelector('.spt-article-feedback .selected'))
                document.querySelector('.spt-article-feedback .selected').classList.remove('selected');
            this.classList.add('selected');
        });
    });
}

// Post Comment
if(document.querySelector('.btn-post-comment')){
    document.querySelector('.btn-post-comment').addEventListener('click', function(){
        document.querySelector('.pcm').classList.add('sended');
    });
}

// Delivery Date Calculator
if(document.querySelector('.ddc-suggestion')){
    document.querySelector('.ddc-input input').addEventListener('focus', function(){
        document.querySelector('.ddc').classList.add('searched');
    });
    document.querySelector('.ddc-input input').addEventListener('blur', function(){
        document.querySelector('.ddc').classList.remove('searched');
    });
}

// Uploaded image preview trigger
if(document.querySelector('.file-thumb')){
    viewMedia.thumb('.file-thumb');
}

// Select Address
if(document.querySelector('#modal-select-address')){
    document.querySelectorAll('.rl-item input').forEach(function(elm){
        elm.addEventListener('click', function(){
            $('#modal-select-address').modal('hide');
        });
    });
}

// Click & Collect Select Store
if(document.querySelector('#modal-click-collect')){
    document.querySelectorAll('.srv-right .btn-selection').forEach(function(elm){
        elm.addEventListener('click', function(){
            if(document.querySelector('#modal-click-collect .srv-list .srv-right .btn-selection.selected'))
                document.querySelector('#modal-click-collect .srv-list .srv-right .btn-selection.selected').classList.remove('selected');
            this.classList.add('selected');
            ttl = this.closest('.srv-item').querySelector('.srv-name').innerText;
            txt = this.closest('.srv-item').querySelector('.srv-address').innerText;
            $('#modal-click-collect').modal('hide');
            document.querySelector('.pay-click-collect .drp-content').innerHTML = '<b>' + ttl + '</b><span>' + txt + '</span>';
        });
    });
}

// Stock Reminder
if(document.querySelector('.sr-form')){
    document.querySelector('.sr-form button').addEventListener('click', function(){
        document.querySelector('#stock-reminder').classList.add('sended');
    });
}

// Assistant Result
if(document.querySelector('#assistant-wizard .btn-apply')){
    document.querySelector('#assistant-wizard .btn-apply').addEventListener('click', function(){
        window.location = 'assistant-result.html';
    });
}

// Extra Warranty
if(document.querySelector('#wty_popup')){
    document.querySelectorAll('#wty_popup .btn-selection').forEach(function(elm){
        elm.addEventListener('click', function(){
            if(document.querySelector('#wty_popup .selected'))
                document.querySelector('#wty_popup .selected').classList.remove('selected');
            elm.classList.add('selected');
            setTimeout(function(){
                document.querySelector('#wty_popup .btn-close').click();

                if(document.querySelector('.page-user-product-detail')){
                    setTimeout(function(){
                        document.querySelector('#cart-notifier').classList.add('activated');
                        document.querySelector('body').classList.add('ntf-ready');
                    }, 333);
                }
            }, 333);
        });
    });
}

// PDP Tab
if(document.querySelector('#pdp-allreviews')){
    // PDP Review Feedback
    function reviewFeedbackBind(){
        document.querySelectorAll('.rvw-item-feedback .btn-selection').forEach(function(elm){
            elm.addEventListener('click', function(){
                if(this.nextElementSibling)
                    this.nextElementSibling.classList.remove('selected');
                if(this.previousElementSibling)
                    this.previousElementSibling.classList.remove('selected');
                this.classList.add('selected');
            });
        });
    }
    
    // PDP TAB AJAX
    if(document.querySelector('#pdp-allreviews[data-ajax]')){
        document.querySelector('#pdp-allreviews .acc-item > button').addEventListener('click', function(){
            document.querySelector('#pdp-allreviews .acc-body').innerHTML = SITE_CONFIG.general.preloader;
            setTimeout(function(){
                $('#pdp-allreviews .acc-body').load('upload/js/reviews.html #TABDATA', function(){
                    // if ajax call success
                    dispatcher({ type: 'TAB_LOADED', data: { id: 'PDP_TAB_REVIEWS' }  });
                    reviewFeedbackBind();
                });
            }, 3000);
        });
    }else{
        reviewFeedbackBind();
    }
}

// SUPPORT SEARCH
if(document.querySelector('.spt-search')){
    document.querySelector('.spt-search-input input').addEventListener('keyup', function(){
        curr = (this.value || '').trim();

        if (curr.length > 0)
            document.querySelector('.spt-search').classList.add('searching');
        else
            document.querySelector('.spt-search').classList.remove('searching');
    });         
}

// ADD TO CART
if(document.querySelector('.btn-add-to-cart')){
    document.querySelector('.btn-add-to-cart').addEventListener('click', function(){
        document.querySelector('#cart-notifier').classList.add('activated');
        document.querySelector('body').classList.add('ntf-ready');
    });
}

// MASTERPASS CONFIRMATION
if(document.querySelector('.mpass-account-notify')){
    document.querySelector('.mpass-account-notify .btn').addEventListener('click', function(){
        document.querySelector('#ajx_popup').classList.add('activated');
        document.querySelector('body').classList.add('ajx-mnp-ready');

        document.querySelector('#overlay').addEventListener('click', function(){
            document.querySelector('#ajx_popup').classList.remove('activated');
            document.querySelector('body').classList.remove('ajx-mnp-ready');
        });
        document.querySelector('#ajx_popup .btn-close').addEventListener('click', function(){
            document.querySelector('#ajx_popup').classList.remove('activated');
            document.querySelector('body').classList.remove('ajx-mnp-ready');
        });
    });
}

if(document.querySelector('.mpass-save-input')){
    document.querySelector('.mpass-save-input .btn').addEventListener('click', function(){
        document.querySelector('#ajx_popup_2').classList.add('activated');
        document.querySelector('body').classList.add('ajx-mnp-ready');

        document.querySelector('#overlay').addEventListener('click', function(){
            document.querySelector('#ajx_popup_2').classList.remove('activated');
            document.querySelector('body').classList.remove('ajx-mnp-ready');
        });
        document.querySelector('#ajx_popup_2 .btn-close').addEventListener('click', function(){
            document.querySelector('#ajx_popup_2').classList.remove('activated');
            document.querySelector('body').classList.remove('ajx-mnp-ready');
        });
    });
}

if(document.querySelector('#message_1')){
    document.querySelectorAll('.mpass-saved-list .btn-remove').forEach(function(elm){
        elm.addEventListener('click', function(){
            document.querySelector('#message_1').classList.add('activated');
            document.querySelector('body').classList.add('msg-opened');

            document.querySelector('#overlay').addEventListener('click', function(){
                document.querySelector('#message_1').classList.remove('activated');
                document.querySelector('body').classList.remove('msg-opened');
            });
            document.querySelector('#message_1 .btn-close').addEventListener('click', function(){
                document.querySelector('#message_1').classList.remove('activated');
                document.querySelector('body').classList.remove('msg-opened');
            });
        });
    });
}

// Guest Payment OTP
if(document.querySelector('#modal-guest-address')){
    document.querySelectorAll('#modal-guest-address .btn-complete').forEach(function(elm){
        elm.addEventListener('click', function(){
            $('#modal-guest-address').modal('hide');
            $('#modal-guest-otp').modal('show');
        });
    });
    
}

// SELECT FOR COMPARE
function selectForCompare(){
    var _t = compare;

    $(this).parents('.prd').toggleClass(_t.cls['selected']);
    setTimeout(function () {
        _t.check();
    }, 1);
}

$('.prd-compare [type="checkbox"]').off('change', selectForCompare).on('change', selectForCompare);

// AJAX POPUP EVENTS

// When Ajax Load Popup Opened
function ON_AJAX_POPUP_OPENED(o){
    console.log('AJAX POPUP OPENED!!!', o);
}

stage.addEventListener("CustomEvent", [{ type: '#ajx_popup.opened', handler: 'ON_AJAX_POPUP_OPENED' }]);

// When Ajax Load Popup Closed
function ON_AJAX_POPUP_CLOSED(o){
    console.log('AJAX POPUP CLOSED!!!', o);
}

stage.addEventListener("CustomEvent", [{ type: '#ajx_popup.closed', handler: 'ON_AJAX_POPUP_CLOSED' }]);

// Cart Coupons
if(document.querySelector('#nav-clubs5')){
    document.querySelector('#nav-clubs5 .show-cpns').addEventListener('click', function(){
        this.closest('.club-holder').classList.add('coupons-listed');
    });
    document.querySelector('#nav-clubs5 .hide-cpns').addEventListener('click', function(){
        this.closest('.club-holder').classList.remove('coupons-listed');
    });
}

// Poltio Widget
// modalWidget = '<iframe id="poltio-embed-set-675" class="poltio-embed" src="https://www.poltio.com/e/set/675/slug?utm_source=embed2&utm_medium=&utm_campaign=set-675&share=on&notify=off&align=center&loc=tr" width="100%" height="300" frameBorder="0" allowFullScreen="allowfullscreen" scrolling="yes" title="Embed"></iframe>';

// inlineWidget = '<iframe id="poltio-embed-set-708" class="poltio-embed" src="https://www.poltio.com/e/set/708/slug?utm_source=embed2&utm_medium=&utm_campaign=set-708&share=on&notify=off&align=center&loc=tr" width="100%" height="300" frameBorder="0" allowFullScreen="allowfullscreen" scrolling="yes" title="Embed"></iframe>';

// if(document.querySelector('#modal-assistant')){
    // if(document.querySelector('#assistant.iframed')){
    //     if(isMobile){
    //         $('#modal-assistant .bnr-body').html(modalWidget);
    //     }else{
    //         $('#assistant .bnr-iframe').html(inlineWidget);
    //     }
    // }else{
        // $('#modal-assistant .bnr-body').html(modalWidget);
    // }
// }

// if(document.querySelector('.page-home')){
//     $('#modal-assistant .bnr-body').html(modalWidget);
// }

// Social Login OTP
if(document.querySelector('.social-otp')){
    $('.social-otp .send-code').on('click', function(){
        $('.social-otp').attr('data-step', 2);
        $('.social-otp .prg-summary').attr('data-step', 2);
    });

    $('.social-login .btn').on('click', function () {
        if(isMobile)
            utils.pageScroll({top: 0});
    
        bdy.addClass('social-otp-ready');
    });
    
    $('.social-otp .prg-back button').on('click', function () {
        bdy.removeClass('social-otp-ready');
        $('.social-otp').attr('data-step', 1);
        $('.social-otp .prg-summary').attr('data-step', 1);
    });
}

// Live Chat Form Trigger
$('.live-chat-trigger').on('click', function(){
    window.open("live-chat-form.html", "liveChatForm", "width=425,height=600");
});