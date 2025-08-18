(function () { 
    document.addEventListener('DOMContentLoaded', navLoader);

    function navLoader() { 
        var navs = document.querySelectorAll('.nav-container');
        navs.forEach(function(nav){ 
            // 新增移入移除事件，显示nav相邻的ul，ul默认display:none
            nav.addEventListener('mouseenter', function(){
                this.querySelector('ul').style.display = 'block';
            });
            nav.addEventListener('mouseleave', function(){
                this.querySelector('ul').style.display = 'none';
            });
        });
    }
})(); 