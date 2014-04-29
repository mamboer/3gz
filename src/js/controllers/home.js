define([
    'utils/tplProvider'
],function(tplProvider){

    var mod = {
        init:function(){
            var tpl = tplProvider.getByUrl('tpl/home/index');
            document.body.innerHTML = tpl;
        }
    };

    return mod;

});