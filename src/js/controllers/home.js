define([
    'utils/tplProvider'
],function(tplProvider){

    var mod = {
        init:function(opts){
            var action = this[opts.action]||this.basic;
            action.call(this,opts);
        },
        //basic action
        basic:function(opts){
            var tpl = tplProvider.getByUrl(opts.actionUrl);
            document.body.innerHTML = tpl;
        },
        //action index
        index:function(opts){
            this.basic(opts);
        }
    };

    return mod;

});