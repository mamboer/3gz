define([
    'utils/consts'
],function(C){
    var mod = {
        /**
         * 根据视图url获取对应的控制器路径。
         * 注意：视图url和控制器的路径是按照目录惯例进行组织的
         * @param  {string} url 视图URL
         * @return {string}     控制器路径
         */
        getControllerByUrl:function(url){

            //url generalization
            //特殊处理index.html
            url = url.lastIndexOf('.html')===-1? (url+C.defaultAction+'.html'):url;

            //views/home/manual.html
            var action = this.getActionByUrl(url),
                viewFlag = 'views/',
                ctrFlag = 'controllers/';

            url = url.substr(url.indexOf(viewFlag)+viewFlag.length,url.lastIndexOf('/'));
            url = url.substr(0,url.indexOf('/'));

            return ({
                controllerUrl:(ctrFlag+url),
                controller:url,
                action:action,
                actionUrl:(url+'/'+action)
            });

        },
        /**
         * 根据视图url获取对应控制器对应的action
         * @param  {string} url 视图url
         * @return {string}     action
         */
        getActionByUrl:function(url){
            url = url.substr(url.lastIndexOf('/')+1)
            url = url.substr(0,url.lastIndexOf('.html'));
            return url;
        },
        /**
         * 根据视图url调用对应的控制器
         * @param  {string} url 视图url
         * @param {string} opts 额外的配置信息
         */
        applyControllerByUrl:function(url,opts){
            var ctr = this.getControllerByUrl(url);
            opts = $.extend(opts||{},ctr);
            require([ctr.controllerUrl],function(CTR){
                CTR.init(opts);
            });
        }
    };

    return mod;

});