// Assistant Wizard
var assistantWizard = {
    el: {
        main: '#assistant-wizard',
        sels: '.asw-selecteds',
        step: '.asw-step',
        curr: '.asw-current',
        next: '.btn-asw-next'
    },
    step:{
        next: 2,
        curr: 1,
        max: 0,
        text: ''
    },
    next: function(){
        var _t = this;

        _t.step['curr'] = parseFloat($(_t.el['curr']).attr('data-step'));
        _t.step['next'] = _t.step['curr'] + 1;

        if(_t.step['next'] <= _t.step['max']){
            _t.step['text'] = $(_t.el['curr'] + ' input:checked').parents('.rl-item').find('.rl-text').text();

            $(_t.el['next']).addClass('btn-disabled');
            $(_t.el['curr']).removeClass('asw-current');
            $(_t.el['step'] + '[data-step="' + _t.step['next'] + '"]').addClass('asw-current');
            $(_t.el['sels'] + ' li[data-order="' + _t.step['curr'] + '"] button').text(_t.step['text']);
            $(_t.el['sels'] + ' li[data-order="' + _t.step['curr'] + '"]').addClass('active');
            $(_t.el['step'] + '[data-step="' + _t.step['next'] + '"] .swiper-container')[0].update();

            if(_t.step['curr'] == 1)
                $(_t.el['main']).removeClass('asw-ready');

            if(_t.step['next'] == _t.step['max'])
                $(_t.el['main']).addClass('asw-completed');
            
            console.log(_t.step);
        }
    },
    nav: function(ths){
        var _t = this;

        _t.step['curr'] = $(ths).parents('li').attr('data-order');

        $(_t.el['curr']).removeClass('asw-current');
        $(_t.el['step'] + '[data-step="' + _t.step['curr'] + '"]').addClass('asw-current');

        if($(_t.el['main']).hasClass('asw-completed'))
            $(_t.el['main']).removeClass('asw-completed');

        if(_t.step['curr'] == 1)
            $(_t.el['main']).addClass('asw-ready');

        while(_t.step['curr'] <= _t.step['max']){
            if($(_t.el['step'] + '[data-step="' + _t.step['curr'] + '"] input:checked').length > 0)
                $(_t.el['step'] + '[data-step="' + _t.step['curr'] + '"] input:checked')[0].checked = false;
            $(_t.el['sels'] + ' li[data-order="' + _t.step['curr'] + '"]').removeClass('active');
            $(_t.el['sels'] + ' li[data-order="' + _t.step['curr'] + '"] button').text('');
            $(_t.el['next']).addClass('btn-disabled');
            _t.step['curr']++;
        }
    },
    init: function(){
        var _t = this;

        _t.step['max'] = $(_t.el['step']).length;

        $(_t.el['next']).on('click', function(){
            _t.next();
        });

        $(_t.el['step'] + ' input').on('click', function(){
            $(_t.el['next']).removeClass('btn-disabled');
        });

        $(_t.el['sels'] + ' button').on('click', function(){
            _t.nav(this);
        });
    }
};
assistantWizard.init();